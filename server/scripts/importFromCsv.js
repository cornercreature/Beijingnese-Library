const fs = require('fs');
const path = require('path');
const { parseCsvFile, normalizeRow, mapGrammarCategory, groupRowsByWord } = require('../src/utils/csvParser');
const { parsePinyin } = require('../src/utils/pinyinToneParser');
const db = require('../models');

// Constants
const CSV_DIR = path.join(__dirname, '../../google sheets csv');

// Statistics tracker
const stats = {
  filesProcessed: 0,
  totalRows: 0,
  validRows: 0,
  wordsCreated: 0,
  examplesCreated: 0,
  duplicatesSkipped: 0,
  errors: 0,
  errorDetails: []
};

/**
 * Import all CSV files from the directory
 */
async function importAllCsvFiles() {
  console.log('\n' + '='.repeat(60));
  console.log('📚 Beijingnese Library - CSV Import Script');
  console.log('='.repeat(60) + '\n');

  try {
    // Get all CSV files
    const files = fs.readdirSync(CSV_DIR)
      .filter(file => file.endsWith('.csv'))
      .map(file => path.join(CSV_DIR, file));

    console.log(`Found ${files.length} CSV files to process\n`);

    // Collect all rows from all files
    const allRows = [];

    for (const file of files) {
      const fileName = path.basename(file);
      console.log(`📄 Reading: ${fileName}`);

      const rows = parseCsvFile(file);
      stats.filesProcessed++;
      stats.totalRows += rows.length;

      // Normalize rows
      const normalizedRows = rows
        .map(normalizeRow)
        .filter(row => row !== null);

      stats.validRows += normalizedRows.length;
      allRows.push(...normalizedRows);

      console.log(`   ✓ Parsed ${rows.length} rows, ${normalizedRows.length} valid\n`);
    }

    console.log('─'.repeat(60));
    console.log(`Total valid rows: ${stats.validRows}\n`);

    // Group rows by word
    const wordGroups = groupRowsByWord(allRows);
    console.log(`Unique words to import: ${wordGroups.size}\n`);

    // Start database transaction
    console.log('Starting database import...\n');

    await db.sequelize.transaction(async (transaction) => {
      for (const [wordKey, rows] of wordGroups.entries()) {
        await importWordGroup(rows, transaction);
      }
    });

    // Print final statistics
    printStatistics();

  } catch (error) {
    console.error('\n❌ Fatal error during import:', error);
    stats.errors++;
    throw error;
  }
}

/**
 * Import a group of rows representing one word
 * @param {Array} rows - Array of rows for the same word
 * @param {Object} transaction - Sequelize transaction
 */
async function importWordGroup(rows, transaction) {
  try {
    // Use first row for word data
    const firstRow = rows[0];

    // Map grammar category
    const grammarCategory = mapGrammarCategory(firstRow.type);
    if (!grammarCategory) {
      stats.errors++;
      stats.errorDetails.push({
        word: firstRow.chinese_characters,
        error: `Invalid grammar category: ${firstRow.type}`
      });
      return;
    }

    // Check if word already exists
    const existingWord = await db.Word.findOne({
      where: {
        chinese_characters: firstRow.chinese_characters,
        pinyin: firstRow.pinyin
      },
      transaction
    });

    if (existingWord) {
      console.log(`⚠️  Word already exists: ${firstRow.chinese_characters} (${firstRow.pinyin})`);
      stats.duplicatesSkipped++;

      // Still add any new example sentences
      for (const row of rows) {
        if (row.example) {
          await createExampleSentence(existingWord.id, row.example, transaction);
        }
      }
      return;
    }

    // Parse pinyin into syllables
    const syllables = parsePinyin(firstRow.pinyin, firstRow.chinese_characters);

    // Create word record
    const word = await db.Word.create({
      chinese_characters: firstRow.chinese_characters,
      pinyin: firstRow.pinyin,
      english_definition: firstRow.eng_def,
      putonghua_definition: firstRow.chin_def,
      grammar_category: grammarCategory
    }, { transaction });

    stats.wordsCreated++;
    console.log(`✓ Created word: ${word.chinese_characters} (${word.pinyin})`);

    // Create pinyin syllables
    for (const syllable of syllables) {
      await db.PinyinSyllable.create({
        word_id: word.id,
        syllable: syllable.syllable,
        character: syllable.character,
        tone_number: syllable.tone_number,
        position: syllable.position
      }, { transaction });
    }

    // Create example sentences from all rows that have examples
    for (const row of rows) {
      if (row.example) {
        await createExampleSentence(word.id, row.example, transaction);
      }
    }

  } catch (error) {
    stats.errors++;
    stats.errorDetails.push({
      word: rows[0].chinese_characters,
      error: error.message
    });
    console.error(`❌ Error importing word: ${rows[0].chinese_characters}`, error.message);
  }
}

/**
 * Create an example sentence
 * @param {number} wordId - Word ID
 * @param {string} chineseSentence - Chinese sentence text
 * @param {Object} transaction - Sequelize transaction
 */
async function createExampleSentence(wordId, chineseSentence, transaction) {
  try {
    await db.ExampleSentence.create({
      word_id: wordId,
      chinese_sentence: chineseSentence,
      english_translation: ''  // Leave empty for now
    }, { transaction });

    stats.examplesCreated++;
  } catch (error) {
    console.error(`  ⚠️  Error creating example sentence: ${error.message}`);
  }
}

/**
 * Print final import statistics
 */
function printStatistics() {
  console.log('\n' + '='.repeat(60));
  console.log('📊 Import Statistics');
  console.log('='.repeat(60));
  console.log(`Files processed:       ${stats.filesProcessed}`);
  console.log(`Total rows:            ${stats.totalRows}`);
  console.log(`Valid rows:            ${stats.validRows}`);
  console.log(`Words created:         ${stats.wordsCreated}`);
  console.log(`Examples created:      ${stats.examplesCreated}`);
  console.log(`Duplicates skipped:    ${stats.duplicatesSkipped}`);
  console.log(`Errors:                ${stats.errors}`);
  console.log('='.repeat(60));

  if (stats.errorDetails.length > 0) {
    console.log('\n❌ Error Details:');
    stats.errorDetails.forEach(err => {
      console.log(`   ${err.word}: ${err.error}`);
    });
  }

  console.log('\n✅ Import completed!\n');
}

// Run the import
if (require.main === module) {
  importAllCsvFiles()
    .then(() => {
      process.exit(0);
    })
    .catch(error => {
      console.error('Import failed:', error);
      process.exit(1);
    });
}

module.exports = { importAllCsvFiles };
