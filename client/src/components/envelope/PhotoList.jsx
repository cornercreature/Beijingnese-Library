import React from 'react';
import './PhotoList.css';

const PhotoList = ({ photos, selectedPhotoId, onSelectPhoto, onDeletePhoto }) => {
  if (photos.length === 0) return null;

  return (
    <div className="photo-list">
      <div className="photo-list-header">
        <div>{photos.length} 张照片</div>
        <div>{photos.length} {photos.length === 1 ? 'photo' : 'photos'}</div>
      </div>
      <div className="photo-thumbnails">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className={`photo-thumbnail ${selectedPhotoId === photo.id ? 'selected' : ''}`}
            onClick={() => onSelectPhoto(photo.id)}
          >
            <img src={photo.url} alt={`Photo ${index + 1}`} />
            <button
              className="thumbnail-delete"
              onClick={(e) => {
                e.stopPropagation();
                onDeletePhoto(photo.id);
              }}
              title="Delete photo"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
