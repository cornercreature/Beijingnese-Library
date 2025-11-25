const express = require('express');
const router = express.Router();
const wordController = require('../controllers/wordController');
const { validateCreateWord } = require('../middleware/validateRequest');
const { uploadLimiter } = require('../middleware/rateLimiter');
const { uploadAudio } = require('../config/upload');

/**
 * GET /api/words/stats
 * Get word statistics (total count, by category)
 */
router.get('/stats', wordController.getWordStats);

/**
 * GET /api/words
 * Get all words with optional filtering
 * Query params: category, limit, offset
 */
router.get('/', wordController.getAllWords);

/**
 * GET /api/words/:id
 * Get a single word by ID
 */
router.get('/:id', wordController.getWordById);

/**
 * POST /api/words
 * Create a new word
 * Accepts multipart/form-data with optional audio file
 */
router.post(
  '/',
  uploadLimiter,
  uploadAudio.single('audio'),
  validateCreateWord,
  wordController.createWord
);

/**
 * DELETE /api/words/:id
 * Delete a word (also deletes associated syllables and examples via CASCADE)
 */
router.delete('/:id', wordController.deleteWord);

module.exports = router;
