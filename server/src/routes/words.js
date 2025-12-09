const express = require('express');
const router = express.Router();
const wordController = require('../controllers/wordController');
const { validateCreateWord } = require('../middleware/validateRequest');
const { uploadLimiter } = require('../middleware/rateLimiter');
const { uploadAudio } = require('../config/upload');

/**
 * @swagger
 * /api/words/stats:
 *   get:
 *     summary: Get word statistics
 *     tags: [Words]
 *     description: Returns total word count and breakdown by grammar category
 *     responses:
 *       200:
 *         description: Successfully retrieved statistics
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 */
router.get('/stats', wordController.getWordStats);

/**
 * @swagger
 * /api/words:
 *   get:
 *     summary: Get all words
 *     tags: [Words]
 *     description: Retrieve all words with optional filtering and pagination
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Filter by grammar category
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 50
 *         description: Number of words to return
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *           default: 0
 *         description: Number of words to skip
 *     responses:
 *       200:
 *         description: Successfully retrieved words
 */
router.get('/', wordController.getAllWords);

/**
 * @swagger
 * /api/words/{id}:
 *   get:
 *     summary: Get a single word by ID
 *     tags: [Words]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Word ID
 *     responses:
 *       200:
 *         description: Successfully retrieved word
 *       404:
 *         description: Word not found
 */
router.get('/:id', wordController.getWordById);

/**
 * @swagger
 * /api/words:
 *   post:
 *     summary: Create a new word
 *     tags: [Words]
 *     description: Create a new word with optional audio recording
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - chinese_characters
 *               - pinyin
 *               - english_definition
 *               - grammar_category
 *             properties:
 *               chinese_characters:
 *                 type: string
 *               pinyin:
 *                 type: string
 *               english_definition:
 *                 type: string
 *               putonghua_definition:
 *                 type: string
 *               grammar_category:
 *                 type: string
 *               audio:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Word created successfully
 */
router.post(
  '/',
  uploadLimiter,
  uploadAudio.single('audio'),
  validateCreateWord,
  wordController.createWord
);

/**
 * @swagger
 * /api/words/{id}/audio:
 *   post:
 *     summary: Upload audio for an existing word
 *     tags: [Words]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Word ID
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - audio
 *             properties:
 *               audio:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Audio uploaded successfully
 */
router.post(
  '/:id/audio',
  uploadLimiter,
  uploadAudio.single('audio'),
  wordController.uploadAudio
);

/**
 * @swagger
 * /api/words/{id}/examples:
 *   post:
 *     summary: Add an example sentence to a word
 *     tags: [Words]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Word ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - chinese_sentence
 *             properties:
 *               chinese_sentence:
 *                 type: string
 *               english_translation:
 *                 type: string
 *     responses:
 *       201:
 *         description: Example added successfully
 */
router.post('/:id/examples', wordController.addExample);

/**
 * @swagger
 * /api/words/{id}:
 *   delete:
 *     summary: Delete a word
 *     tags: [Words]
 *     description: Delete a word and all associated syllables and examples (CASCADE)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Word ID to delete
 *     responses:
 *       200:
 *         description: Word deleted successfully
 *       404:
 *         description: Word not found
 */
router.delete('/:id', wordController.deleteWord);

module.exports = router;
