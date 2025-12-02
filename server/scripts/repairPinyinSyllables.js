const db = require('../models');

/**
 * Manual mappings for words where the automatic parser failed
 * Each entry maps: word_id -> array of syllables (one per character)
 *
 * Note: For 儿化音 (er-ization), when 儿 is a light tone (tone 0),
 * it combines with the previous character into one syllable.
 */
// For 儿化音: Map each CHARACTER to its syllable (儿 gets "r" when combined)
const MANUAL_SYLLABLE_MAPPINGS = {
  9: ['nín', 'gé', 'nǎ', 'r', 'ne'],       // 您搁哪儿呢 (哪=nǎ, 儿=r)
  12: ['má', 'liū', 'r', 'de'],            // 麻溜儿地 (溜=liū, 儿=r)
  26: ['tē', 'r', 'lóu'],                  // 忒儿喽 (忒=tē, 儿=r)
  28: ['tēi'],                             // 忒 (keep first pronunciation)
  32: ['wá', 'r', 'mìng'],                 // 玩儿命 (玩=wá, 儿=r)
  36: ['jiào', 'jìn', 'r'],                // 较劲儿 (较=jiào, 劲=jìn, 儿=r)
  37: ['gē', 'nà', 'r', 'ne'],             // 搁那儿呢 (那=nà, 儿=r)
  38: ['dòu', 'zhī', 'r'],                 // 豆汁儿 (汁=zhī, 儿=r)
  39: ['lǎo', 'jiā', 'r'],                 // 老家儿 (家=jiā, 儿=r)
  43: ['má', 'lī', 'r', 'de'],             // 麻利儿的 (利=lī, 儿=r)
  45: ['yǎn', 'mù', 'qián', 'r'],          // 眼目前儿 (前=qián, 儿=r)
  47: ['jiě', 'men', 'r'],                 // 姐们儿 (们=men, 儿=r)
  48: ['kōu', 'mén', 'r'],                 // 抠门儿 (门=mén, 儿=r)
  49: ['niān', 'r', 'huài'],               // 蔫儿坏 (蔫=niān, 儿=r)
  51: ['dì', 'jiè', 'r'],                  // 地界儿 (界=jiè, 儿=r)
  57: ['cí', 'qì', ','],                   // 瓷器,
  58: ['yǒu', 'yàng', 'r', ','],           // 有样儿, (样=yàng, 儿=r)
  59: ['ná', 'yàng', 'r', ','],            // 拿样儿, (样=yàng, 儿=r)
  61: ['zì', 'gě', 'r', ','],              // 自个儿, (个=gě, 儿=r)
  62: ['shú', 'zhāng', 'r', ','],          // 熟张儿, (张=zhāng, 儿=r)
  63: ['yìng', 'chá', 'r', ','],           // 硬茬儿, (茬=chá, 儿=r)
  64: ['yì', 'huì', 'yí', 'xià', ','],     // 意会一下,
  67: ['cī', 'r', 'lou'],                  // 呲儿喽 (呲=cī, 儿=r)
  68: ['āi', 'cī', 'r'],                   // 挨呲儿 (呲=cī, 儿=r)
  72: ['gē', 'mè', 'r'],                   // 哥们儿 (们=mè, 儿=r)
  73: ['lī', 'gè', 'r', 'lēng'],           // 哩个儿愣 (个=gè, 儿=r)
  83: ['jī', 'r', 'nǎ', 'r', 'le'],        // 今儿哪儿了 (今=jī,儿=r, 哪=nǎ,儿=r)
  91: ['ài', 'shì', 'r'],                  // 碍事儿 (事=shì, 儿=r)
  93: ['bá', 'fèn', 'r'],                  // 拔份儿 (份=fèn, 儿=r)
  94: ['bàn', 'shú', 'liǎn', 'r'],         // 半熟脸儿 (脸=liǎn, 儿=r)
  98: ['dā', 'chá', 'r'],                  // 搭茬儿 (茬=chá, 儿=r)
  104: ['mén', 'r', 'qīng'],               // 门儿清 (门=mén, 儿=r)
  105: ['jiáo', 'gu', 'r']                 // 嚼谷儿 (谷=gu, 儿=r)
};

/**
 * Detect tone number from a pinyin syllable with tone marks
 */
const TONE_MAP = {
  'ā': 1, 'á': 2, 'ǎ': 3, 'à': 4,
  'ē': 1, 'é': 2, 'ě': 3, 'è': 4,
  'ī': 1, 'í': 2, 'ǐ': 3, 'ì': 4,
  'ō': 1, 'ó': 2, 'ǒ': 3, 'ò': 4,
  'ū': 1, 'ú': 2, 'ǔ': 3, 'ù': 4,
  'ǖ': 1, 'ǘ': 2, 'ǚ': 3, 'ǜ': 4,
  'Ā': 1, 'Á': 2, 'Ǎ': 3, 'À': 4,
  'Ē': 1, 'É': 2, 'Ě': 3, 'È': 4,
  'Ī': 1, 'Í': 2, 'Ǐ': 3, 'Ì': 4,
  'Ō': 1, 'Ó': 2, 'Ǒ': 3, 'Ò': 4,
  'Ū': 1, 'Ú': 2, 'Ǔ': 3, 'Ù': 4,
  'Ǖ': 1, 'Ǘ': 2, 'Ǚ': 3, 'Ǜ': 4
};

function detectTone(syllable) {
  if (!syllable || syllable.trim() === '') return 0;

  for (const char of syllable) {
    if (TONE_MAP[char]) {
      return TONE_MAP[char];
    }
  }

  return 0; // Neutral/light tone
}

/**
 * Repair syllables for a single word
 */
async function repairWord(wordId, correctSyllables, transaction) {
  try {
    // Get the word with its current syllables
    const word = await db.Word.findByPk(wordId, {
      include: [{
        model: db.PinyinSyllable,
        as: 'syllables'
      }],
      transaction
    });

    if (!word) {
      console.log(`⚠️  Word ${wordId} not found`);
      return false;
    }

    const characters = Array.from(word.chinese_characters);

    if (characters.length !== correctSyllables.length) {
      console.log(`⚠️  Mismatch for ${word.chinese_characters}: ${characters.length} chars, ${correctSyllables.length} syllables`);
      return false;
    }

    // Delete old syllables
    await db.PinyinSyllable.destroy({
      where: { word_id: wordId },
      transaction
    });

    // Create new syllables
    for (let i = 0; i < correctSyllables.length; i++) {
      await db.PinyinSyllable.create({
        word_id: wordId,
        syllable: correctSyllables[i],
        character: characters[i],
        tone_number: detectTone(correctSyllables[i]),
        position: i
      }, { transaction });
    }

    console.log(`✓ Fixed: ${word.chinese_characters} (${word.pinyin})`);
    return true;

  } catch (error) {
    console.error(`❌ Error repairing word ${wordId}:`, error.message);
    return false;
  }
}

/**
 * Main repair function
 */
async function repairAllSyllables() {
  console.log('\n' + '='.repeat(60));
  console.log('🔧 Pinyin Syllable Repair Script');
  console.log('='.repeat(60) + '\n');

  let repaired = 0;
  let failed = 0;

  try {
    await db.sequelize.transaction(async (transaction) => {
      for (const [wordId, syllables] of Object.entries(MANUAL_SYLLABLE_MAPPINGS)) {
        const success = await repairWord(parseInt(wordId), syllables, transaction);
        if (success) {
          repaired++;
        } else {
          failed++;
        }
      }
    });

    console.log('\n' + '='.repeat(60));
    console.log('📊 Repair Complete');
    console.log('='.repeat(60));
    console.log(`✅ Repaired: ${repaired} words`);
    console.log(`❌ Failed: ${failed} words`);
    console.log('='.repeat(60) + '\n');

  } catch (error) {
    console.error('\n❌ Fatal error during repair:', error);
    throw error;
  }
}

// Run the repair
if (require.main === module) {
  repairAllSyllables()
    .then(() => {
      console.log('✅ Repair script completed successfully\n');
      process.exit(0);
    })
    .catch(error => {
      console.error('❌ Repair script failed:', error);
      process.exit(1);
    });
}

module.exports = { repairAllSyllables };
