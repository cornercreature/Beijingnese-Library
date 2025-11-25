'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Insert sample words
    await queryInterface.bulkInsert('words', [
      {
        chinese_characters: '胡同',
        pinyin: 'hútòng',
        english_definition: 'alley, narrow lane',
        putonghua_definition: '小巷',
        grammar_category: 'Noun',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        chinese_characters: '倍儿',
        pinyin: 'bèir',
        english_definition: 'very, extremely (Beijing slang)',
        putonghua_definition: '非常',
        grammar_category: 'Adjective',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});

    // Get the inserted word IDs
    const words = await queryInterface.sequelize.query(
      `SELECT id, chinese_characters FROM words;`
    );
    const wordRows = words[0];

    // Insert pinyin syllables for 胡同
    const hutongWord = wordRows.find(w => w.chinese_characters === '胡同');
    if (hutongWord) {
      await queryInterface.bulkInsert('pinyin_syllables', [
        {
          word_id: hutongWord.id,
          syllable: 'hú',
          character: '胡',
          tone_number: 2,
          position: 0,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_id: hutongWord.id,
          syllable: 'tòng',
          character: '同',
          tone_number: 4,
          position: 1,
          created_at: new Date(),
          updated_at: new Date()
        }
      ], {});

      // Insert example sentence
      await queryInterface.bulkInsert('example_sentences', [
        {
          word_id: hutongWord.id,
          chinese_sentence: '我家住在胡同里。',
          english_translation: 'My home is in an alley.',
          created_at: new Date(),
          updated_at: new Date()
        }
      ], {});
    }

    // Insert pinyin syllables for 倍儿
    const beirWord = wordRows.find(w => w.chinese_characters === '倍儿');
    if (beirWord) {
      await queryInterface.bulkInsert('pinyin_syllables', [
        {
          word_id: beirWord.id,
          syllable: 'bèi',
          character: '倍',
          tone_number: 4,
          position: 0,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_id: beirWord.id,
          syllable: 'r',
          character: '儿',
          tone_number: 0,  // Light tone - this will appear smaller!
          position: 1,
          created_at: new Date(),
          updated_at: new Date()
        }
      ], {});

      // Insert example sentence
      await queryInterface.bulkInsert('example_sentences', [
        {
          word_id: beirWord.id,
          chinese_sentence: '今天天气倍儿棒！',
          english_translation: 'The weather is extremely good today!',
          created_at: new Date(),
          updated_at: new Date()
        }
      ], {});
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('example_sentences', null, {});
    await queryInterface.bulkDelete('pinyin_syllables', null, {});
    await queryInterface.bulkDelete('words', null, {});
  }
};
