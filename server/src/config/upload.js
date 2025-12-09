const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const fs = require('fs');

// Ensure upload directories exist
const uploadDirs = {
  audio: path.join(__dirname, '../../uploads/audio'),
  images: path.join(__dirname, '../../uploads/images')
};

Object.values(uploadDirs).forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Storage configuration for audio files
const audioStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDirs.audio);
  },
  filename: function (req, file, cb) {
    // Generate unique filename: timestamp-randomhex.ext
    const uniqueSuffix = Date.now() + '-' + crypto.randomBytes(8).toString('hex');
    const ext = path.extname(file.originalname);
    cb(null, uniqueSuffix + ext);
  }
});

// Storage configuration for image files
const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDirs.images);
  },
  filename: function (req, file, cb) {
    // Generate unique filename: timestamp-randomhex.ext
    const uniqueSuffix = Date.now() + '-' + crypto.randomBytes(8).toString('hex');
    const ext = path.extname(file.originalname);
    cb(null, uniqueSuffix + ext);
  }
});

// File filter for audio files
const audioFileFilter = (req, file, cb) => {
  const allowedMimes = [
    'audio/webm',
    'audio/wav',
    'audio/wave',
    'audio/x-wav',
    'audio/mpeg',
    'audio/mp3',
    'audio/mp4',
    'audio/m4a',
    'audio/x-m4a',
    'audio/ogg'
  ];

  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error(`Invalid audio file type. Allowed types: ${allowedMimes.join(', ')}`), false);
  }
};

// File filter for image files
const imageFileFilter = (req, file, cb) => {
  const allowedMimes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
    'image/gif'
  ];

  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error(`Invalid image file type. Allowed types: ${allowedMimes.join(', ')}`), false);
  }
};

// Multer upload middleware for audio files
const uploadAudio = multer({
  storage: audioStorage,
  fileFilter: audioFileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  }
});

// Multer upload middleware for images
const uploadImage = multer({
  storage: imageStorage,
  fileFilter: imageFileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

module.exports = {
  uploadAudio,
  uploadImage,
  uploadDirs
};
