const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const fs = require('fs');
const cloudinary = require('cloudinary').v2;
const { Readable } = require('stream');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Use Cloudinary in production, local storage in development
const USE_CLOUDINARY = process.env.NODE_ENV === 'production' && process.env.CLOUDINARY_CLOUD_NAME;

// Ensure upload directories exist (for local development)
const uploadDirs = {
  audio: path.join(__dirname, '../../uploads/audio'),
  images: path.join(__dirname, '../../uploads/images')
};

if (!USE_CLOUDINARY) {
  Object.values(uploadDirs).forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
}

// Storage configuration for audio files
const audioStorage = USE_CLOUDINARY ? multer.memoryStorage() : multer.diskStorage({
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
const imageStorage = USE_CLOUDINARY ? multer.memoryStorage() : multer.diskStorage({
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

// File filter for audio files (optional - allows FormData without files)
const audioFileFilter = (req, file, cb) => {
  // If no file provided, that's okay (for optional audio uploads)
  if (!file) {
    cb(null, true);
    return;
  }

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

// Optional audio upload - parses FormData even without files
const uploadAudioOptional = multer({
  storage: audioStorage,
  fileFilter: audioFileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  }
}).any(); // Use .any() to parse FormData fields even when no files are present

// Helper function to upload buffer to Cloudinary
const uploadToCloudinary = (buffer, folder, resourceType = 'auto') => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: `beijingnese-library/${folder}`,
        resource_type: resourceType,
        use_filename: true,
        unique_filename: true
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );

    const readableStream = Readable.from(buffer);
    readableStream.pipe(uploadStream);
  });
};

module.exports = {
  uploadAudio,
  uploadAudioOptional,
  uploadImage,
  uploadDirs,
  uploadToCloudinary,
  USE_CLOUDINARY,
  cloudinary
};
