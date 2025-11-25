const express = require('express');
const router = express.Router();
const photoController = require('../controllers/photoController');
const { validateCreatePhoto } = require('../middleware/validateRequest');
const { uploadLimiter } = require('../middleware/rateLimiter');
const { uploadImage } = require('../config/upload');

/**
 * GET /api/photos
 * Get all photos
 * Query params: limit, offset
 */
router.get('/', photoController.getAllPhotos);

/**
 * GET /api/photos/:id
 * Get a single photo by ID
 */
router.get('/:id', photoController.getPhotoById);

/**
 * POST /api/photos
 * Create a new photo
 * Accepts multipart/form-data with required image file
 */
router.post(
  '/',
  uploadLimiter,
  uploadImage.single('image'),
  validateCreatePhoto,
  photoController.createPhoto
);

/**
 * DELETE /api/photos/:id
 * Delete a photo
 */
router.delete('/:id', photoController.deletePhoto);

module.exports = router;
