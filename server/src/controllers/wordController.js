const db = require('../../models');
const { parsePinyin } = require('../utils/pinyinToneParser');
const { Op } = require('sequelize');

/**
 * Get all words with optional filtering
 * GET /api/words?category=Noun&limit=10&offset=0
 */
exports.getAllWords = async (req, res) => {
  try {
    const { category, limit = 50, offset = 0 } = req.query;

    const whereClause = {};
    if (category) {
      whereClause.grammar_category = category;
    }

    const words = await db.Word.findAll({
      where: whereClause,
      include: [
        {
          model: db.PinyinSyllable,
          as: 'syllables',
          separate: true,
          order: [['position', 'ASC']]
        },
        {
          model: db.ExampleSentence,
          as: 'examples'
        }
      ],
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: [['created_at', 'DESC']]
    });

    const totalCount = await db.Word.count({ where: whereClause });

    res.json({
      success: true,
      data: words,
      pagination: {
        total: totalCount,
        limit: parseInt(limit),
        offset: parseInt(offset),
        hasMore: offset + words.length < totalCount
      }
    });
  } catch (error) {
    console.error('Error fetching words:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch words'
    });
  }
};

/**
 * Get a single word by ID
 * GET /api/words/:id
 */
exports.getWordById = async (req, res) => {
  try {
    const { id } = req.params;

    const word = await db.Word.findByPk(id, {
      include: [
        {
          model: db.PinyinSyllable,
          as: 'syllables',
          separate: true,
          order: [['position', 'ASC']]
        },
        {
          model: db.ExampleSentence,
          as: 'examples'
        }
      ]
    });

    if (!word) {
      return res.status(404).json({
        success: false,
        error: 'Word not found'
      });
    }

    res.json({
      success: true,
      data: word
    });
  } catch (error) {
    console.error('Error fetching word:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch word'
    });
  }
};

/**
 * Create a new word
 * POST /api/words
 */
exports.createWord = async (req, res) => {
  const transaction = await db.sequelize.transaction();

  try {
    const {
      chinese_characters,
      pinyin,
      english_definition,
      putonghua_definition,
      grammar_category,
      examples = []
    } = req.body;

    // Create the word
    const word = await db.Word.create({
      chinese_characters,
      pinyin,
      english_definition,
      putonghua_definition,
      grammar_category,
      audio_file_path: req.file ? `/uploads/audio/${req.file.filename}` : null,
      audio_file_size: req.file ? req.file.size : null,
      audio_mime_type: req.file ? req.file.mimetype : null
    }, { transaction });

    // Parse pinyin and create syllables
    const syllables = parsePinyin(pinyin, chinese_characters);

    if (syllables.length > 0) {
      const syllableData = syllables.map(syl => ({
        word_id: word.id,
        syllable: syl.syllable,
        character: syl.character,
        tone_number: syl.tone_number,
        position: syl.position
      }));

      await db.PinyinSyllable.bulkCreate(syllableData, { transaction });
    }

    // Create example sentences
    if (examples && examples.length > 0) {
      const exampleData = examples.map(ex => ({
        word_id: word.id,
        chinese_sentence: ex.chinese_sentence,
        english_translation: ex.english_translation
      }));

      await db.ExampleSentence.bulkCreate(exampleData, { transaction });
    }

    await transaction.commit();

    // Fetch the complete word with associations
    const createdWord = await db.Word.findByPk(word.id, {
      include: [
        {
          model: db.PinyinSyllable,
          as: 'syllables',
          separate: true,
          order: [['position', 'ASC']]
        },
        {
          model: db.ExampleSentence,
          as: 'examples'
        }
      ]
    });

    res.status(201).json({
      success: true,
      message: 'Word created successfully',
      data: createdWord
    });
  } catch (error) {
    await transaction.rollback();
    console.error('Error creating word:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to create word',
      details: error.message
    });
  }
};

/**
 * Delete a word
 * DELETE /api/words/:id
 */
exports.deleteWord = async (req, res) => {
  try {
    const { id } = req.params;

    const word = await db.Word.findByPk(id);

    if (!word) {
      return res.status(404).json({
        success: false,
        error: 'Word not found'
      });
    }

    // Cascade delete will handle syllables and examples
    await word.destroy();

    res.json({
      success: true,
      message: 'Word deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting word:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to delete word'
    });
  }
};

/**
 * Get word statistics
 * GET /api/words/stats
 */
exports.getWordStats = async (req, res) => {
  try {
    const totalWords = await db.Word.count();

    const byCategory = await db.Word.findAll({
      attributes: [
        'grammar_category',
        [db.sequelize.fn('COUNT', db.sequelize.col('id')), 'count']
      ],
      group: ['grammar_category']
    });

    res.json({
      success: true,
      data: {
        total: totalWords,
        by_category: byCategory.reduce((acc, item) => {
          acc[item.grammar_category] = parseInt(item.get('count'));
          return acc;
        }, {})
      }
    });
  } catch (error) {
    console.error('Error fetching word stats:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch statistics'
    });
  }
};

module.exports = exports;
