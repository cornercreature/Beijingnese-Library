import React from 'react';
import './PhotoEditor.css';

const PhotoEditor = ({
  photo,
  onUpdate,
  onDelete,
  onBringToFront,
  onSendToBack,
  windowBounds
}) => {
  return (
    <div className="photo-editor">
      <h3 className="editor-title">
        <div>编辑照片</div>
        <div>edit photo</div>
      </h3>

      <div className="editor-section">
        <label className="editor-label">旋转 / rotation</label>
        <div className="rotation-control">
          <input
            type="range"
            min="0"
            max="360"
            value={photo.rotation || 0}
            onChange={(e) => onUpdate({ rotation: parseInt(e.target.value) })}
            className="rotation-slider"
          />
          <input
            type="number"
            min="0"
            max="360"
            value={Math.round(photo.rotation || 0)}
            onChange={(e) => onUpdate({ rotation: parseInt(e.target.value) || 0 })}
            className="rotation-number"
          />
          <span className="rotation-unit">°</span>
        </div>
      </div>

      <div className="editor-section">
        <label className="editor-label">层级 / layers</label>
        <div className="button-group">
          <button
            type="button"
            onClick={onBringToFront}
            className="layer-button"
          >
            前置
          </button>
          <button
            type="button"
            onClick={onSendToBack}
            className="layer-button"
          >
            后置
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoEditor;
