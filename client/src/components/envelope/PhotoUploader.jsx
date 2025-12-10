import React, { useRef } from 'react';
import './PhotoUploader.css';

const PhotoUploader = ({ onAddPhotos }) => {
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);

    if (files.length === 0) return;

    // Validate files
    const validFiles = files.filter(file => {
      // Check file type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        alert(`Invalid file type: ${file.name}. Please upload JPG, PNG, or WebP images.`);
        return false;
      }

      // Check file size (5MB limit)
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      if (file.size > maxSize) {
        alert(`File too large: ${file.name}. Maximum size is 5MB.`);
        return false;
      }

      return true;
    });

    if (validFiles.length === 0) return;

    // Read files and create photo objects
    const photoPromises = validFiles.map(file => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          resolve({
            url: e.target.result,
            fileName: file.name
          });
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(photoPromises).then(photos => {
      onAddPhotos(photos);
    });

    // Reset input
    e.target.value = '';
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="photo-uploader">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/jpg,image/png,image/webp"
        multiple
        onChange={handleFileSelect}
        style={{ display: 'none' }}
      />

      <button
        type="button"
        onClick={handleButtonClick}
        className="upload-button"
      >
        <div>上传图片</div>
        <div>upload photos</div>
      </button>

      <p className="upload-hint">
        <small>JPG, PNG, or WebP • Max 5MB each</small>
      </p>
    </div>
  );
};

export default PhotoUploader;
