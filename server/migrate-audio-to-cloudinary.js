const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
const db = require('./models');
require('dotenv').config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'djjz22lh7',
  api_key: process.env.CLOUDINARY_API_KEY || '377394889443889',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'GN3GXNEeArnXdjjr7PyjwBFMHLM'
});

async function migrateAudioFiles() {
  console.log('🚀 Starting audio file migration to Cloudinary...\n');

  try {
    // Get all words with audio files
    const words = await db.Word.findAll({
      where: {
        audio_file_path: {
          [db.Sequelize.Op.ne]: null
        }
      }
    });

    // Get all word recordings
    const recordings = await db.WordRecording.findAll();

    console.log(`Found ${words.length} words with audio files`);
    console.log(`Found ${recordings.length} word recordings\n`);

    let successCount = 0;
    let skipCount = 0;
    let errorCount = 0;

    // Migrate word audio files
    console.log('📁 Migrating word audio files...');
    for (const word of words) {
      const localPath = word.audio_file_path;

      // Skip if already a Cloudinary URL
      if (localPath.startsWith('http')) {
        console.log(`⏭️  Skipping word ${word.id}: Already migrated`);
        skipCount++;
        continue;
      }

      const fullPath = path.join(__dirname, localPath);

      // Check if file exists
      if (!fs.existsSync(fullPath)) {
        console.log(`⚠️  Warning: File not found for word ${word.id}: ${fullPath}`);
        errorCount++;
        continue;
      }

      try {
        // Upload to Cloudinary
        console.log(`⬆️  Uploading: ${path.basename(fullPath)}`);
        const result = await cloudinary.uploader.upload(fullPath, {
          folder: 'beijingnese-library/audio',
          resource_type: 'video', // audio files use 'video' resource type
          use_filename: true,
          unique_filename: true
        });

        // Update database with Cloudinary URL
        await word.update({
          audio_file_path: result.secure_url
        });

        console.log(`✅ Success: Word ${word.id} - ${result.secure_url}`);
        successCount++;
      } catch (error) {
        console.error(`❌ Error uploading word ${word.id}:`, error.message);
        errorCount++;
      }
    }

    // Migrate word recordings
    console.log('\n📁 Migrating word recordings...');
    for (const recording of recordings) {
      const localPath = recording.audio_file_path;

      // Skip if already a Cloudinary URL
      if (localPath.startsWith('http')) {
        console.log(`⏭️  Skipping recording ${recording.id}: Already migrated`);
        skipCount++;
        continue;
      }

      const fullPath = path.join(__dirname, localPath);

      // Check if file exists
      if (!fs.existsSync(fullPath)) {
        console.log(`⚠️  Warning: File not found for recording ${recording.id}: ${fullPath}`);
        errorCount++;
        continue;
      }

      try {
        // Upload to Cloudinary
        console.log(`⬆️  Uploading: ${path.basename(fullPath)}`);
        const result = await cloudinary.uploader.upload(fullPath, {
          folder: 'beijingnese-library/audio',
          resource_type: 'video',
          use_filename: true,
          unique_filename: true
        });

        // Update database with Cloudinary URL
        await recording.update({
          audio_file_path: result.secure_url
        });

        console.log(`✅ Success: Recording ${recording.id} - ${result.secure_url}`);
        successCount++;
      } catch (error) {
        console.error(`❌ Error uploading recording ${recording.id}:`, error.message);
        errorCount++;
      }
    }

    console.log('\n' + '='.repeat(50));
    console.log('🎉 Migration Complete!');
    console.log('='.repeat(50));
    console.log(`✅ Successfully migrated: ${successCount} files`);
    console.log(`⏭️  Skipped (already migrated): ${skipCount} files`);
    console.log(`❌ Errors: ${errorCount} files`);
    console.log('='.repeat(50));

    process.exit(0);
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

// Run migration
migrateAudioFiles();
