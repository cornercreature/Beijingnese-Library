const db = require('../../models');

/**
 * Get all photos
 * GET /api/photos?limit=10&offset=0
 */
exports.getAllPhotos = async (req, res) => {
  try {
    const { limit = 50, offset = 0 } = req.query;

    const photos = await db.Photo.findAll({
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: [['created_at', 'DESC']]
    });

    const totalCount = await db.Photo.count();

    res.json({
      success: true,
      data: photos,
      pagination: {
        total: totalCount,
        limit: parseInt(limit),
        offset: parseInt(offset),
        hasMore: offset + photos.length < totalCount
      }
    });
  } catch (error) {
    console.error('Error fetching photos:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch photos'
    });
  }
};

/**
 * Get a single photo by ID
 * GET /api/photos/:id
 */
exports.getPhotoById = async (req, res) => {
  try {
    const { id } = req.params;

    const photo = await db.Photo.findByPk(id);

    if (!photo) {
      return res.status(404).json({
        success: false,
        error: 'Photo not found'
      });
    }

    res.json({
      success: true,
      data: photo
    });
  } catch (error) {
    console.error('Error fetching photo:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch photo'
    });
  }
};

/**
 * Create a new photo
 * POST /api/photos
 */
exports.createPhoto = async (req, res) => {
  try {
    const { caption_chinese, caption_english } = req.body;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: 'No image file provided'
      });
    }

    const photo = await db.Photo.create({
      image_file_path: `/uploads/images/${req.file.filename}`,
      image_file_size: req.file.size,
      image_mime_type: req.file.mimetype,
      caption_chinese,
      caption_english
    });

    res.status(201).json({
      success: true,
      message: 'Photo created successfully',
      data: photo
    });
  } catch (error) {
    console.error('Error creating photo:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to create photo',
      details: error.message
    });
  }
};

/**
 * Delete a photo
 * DELETE /api/photos/:id
 */
exports.deletePhoto = async (req, res) => {
  try {
    const { id } = req.params;

    const photo = await db.Photo.findByPk(id);

    if (!photo) {
      return res.status(404).json({
        success: false,
        error: 'Photo not found'
      });
    }

    await photo.destroy();

    res.json({
      success: true,
      message: 'Photo deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting photo:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to delete photo'
    });
  }
};

module.exports = exports;
