// Quick test script to verify models and associations
const db = require('./models');

async function testModels() {
  try {
    console.log('🔍 Testing database models...\n');

    // Test connection
    await db.sequelize.authenticate();
    console.log('✅ Database connection successful\n');

    // Test fetching words with associations
    console.log('📖 Fetching words with syllables and examples...');
    const words = await db.Word.findAll({
      include: [
        {
          model: db.PinyinSyllable,
          as: 'syllables',
          order: [['position', 'ASC']]
        },
        {
          model: db.ExampleSentence,
          as: 'examples'
        }
      ]
    });

    if (words.length === 0) {
      console.log('⚠️  No words found in database');
    } else {
      console.log(`✅ Found ${words.length} word(s):\n`);

      words.forEach(word => {
        console.log(`🔤 ${word.chinese_characters} (${word.pinyin})`);
        console.log(`   English: ${word.english_definition}`);
        console.log(`   Category: ${word.grammar_category}`);
        console.log(`   Syllables: ${word.syllables.length}`);

        // Show syllables with tone info
        if (word.syllables.length > 0) {
          word.syllables.forEach(syl => {
            const toneLabel = syl.tone_number === 0 ? '(light tone)' : `(tone ${syl.tone_number})`;
            console.log(`     - ${syl.character}: ${syl.syllable} ${toneLabel}`);
          });
        }

        console.log(`   Examples: ${word.examples.length}`);
        if (word.examples.length > 0) {
          word.examples.forEach(ex => {
            console.log(`     - ${ex.chinese_sentence}`);
            console.log(`       ${ex.english_translation}`);
          });
        }
        console.log();
      });
    }

    // Test fetching photos
    console.log('📷 Fetching photos...');
    const photos = await db.Photo.findAll();
    console.log(`✅ Found ${photos.length} photo(s)\n`);

    console.log('✨ Model test complete!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error testing models:', error);
    process.exit(1);
  }
}

testModels();
