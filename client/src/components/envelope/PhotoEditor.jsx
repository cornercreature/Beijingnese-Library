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
  const handlePositionChange = (axis, value) => {
    const numValue = parseInt(value) || 0;

    if (axis === 'x') {
      const maxX = windowBounds.x + windowBounds.width - photo.size.width;
      const constrainedX = Math.max(windowBounds.x, Math.min(numValue, maxX));
      onUpdate({ position: { ...photo.position, x: constrainedX } });
    } else {
      const maxY = windowBounds.y + windowBounds.height - photo.size.height;
      const constrainedY = Math.max(windowBounds.y, Math.min(numValue, maxY));
      onUpdate({ position: { ...photo.position, y: constrainedY } });
    }
  };

  const handleSizeChange = (dimension, value) => {
    const numValue = parseInt(value) || 0;

    if (dimension === 'width') {
      const maxWidth = windowBounds.width;
      const constrainedWidth = Math.max(50, Math.min(numValue, maxWidth));
      onUpdate({ size: { ...photo.size, width: constrainedWidth } });
    } else {
      const maxHeight = windowBounds.height;
      const constrainedHeight = Math.max(50, Math.min(numValue, maxHeight));
      onUpdate({ size: { ...photo.size, height: constrainedHeight } });
    }
  };

  return (
    <div className="photo-editor">
      <h3 className="editor-title">
        <div>编辑照片</div>
        <div>edit photo</div>
      </h3>

      <div className="editor-section">
        <label className="editor-label">位置 / position</label>
        <div className="input-group">
          <div className="input-field">
            <label>x</label>
            <input
              type="number"
              value={Math.round(photo.position.x)}
              onChange={(e) => handlePositionChange('x', e.target.value)}
              className="number-input"
            />
          </div>
          <div className="input-field">
            <label>y</label>
            <input
              type="number"
              value={Math.round(photo.position.y)}
              onChange={(e) => handlePositionChange('y', e.target.value)}
              className="number-input"
            />
          </div>
        </div>
      </div>

      <div className="editor-section">
        <label className="editor-label">大小 / size</label>
        <div className="input-group">
          <div className="input-field">
            <label>w</label>
            <input
              type="number"
              value={Math.round(photo.size.width)}
              onChange={(e) => handleSizeChange('width', e.target.value)}
              className="number-input"
            />
          </div>
          <div className="input-field">
            <label>h</label>
            <input
              type="number"
              value={Math.round(photo.size.height)}
              onChange={(e) => handleSizeChange('height', e.target.value)}
              className="number-input"
            />
          </div>
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

      <button
        type="button"
        onClick={onDelete}
        className="delete-button"
      >
        <div>删除照片</div>
        <div>delete photo</div>
      </button>
    </div>
  );
};

export default PhotoEditor;
