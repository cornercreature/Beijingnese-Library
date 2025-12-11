import React, { useState, useEffect } from 'react';
import EnvelopeCanvas from './EnvelopeCanvas';
import PhotoUploader from './PhotoUploader';
import PhotoEditor from './PhotoEditor';
import EnvelopeExportButton from './EnvelopeExportButton';
import './EnvelopeDesigner.css';

const EnvelopeDesigner = ({ wordData, onClose }) => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhotoId, setSelectedPhotoId] = useState(null);

  // Photo window bounds - matches CSS in EnvelopeCanvas.css (.photo-window-boundary)
  // CSS uses: left: calc(100% - 91px - 290px), top: 265px, width: 290px, height: 440px
  // Using a ref to calculate actual position dynamically
  const canvasRef = React.useRef(null);
  const [photoWindowBounds, setPhotoWindowBounds] = useState({
    x: 819,      // Default: approx 1200px container - 91px - 290px
    y: 265,      // Top position (matches CSS)
    width: 290,  // Width of photo window (matches CSS)
    height: 440  // Height of photo window (matches CSS)
  });

  // Calculate actual photo window bounds after canvas mounts
  useEffect(() => {
    if (canvasRef.current) {
      const updateBounds = () => {
        const containerWidth = canvasRef.current.offsetWidth;
        setPhotoWindowBounds(prev => ({
          ...prev,
          x: containerWidth - 91 - 290
        }));
      };
      updateBounds();
      window.addEventListener('resize', updateBounds);
      return () => window.removeEventListener('resize', updateBounds);
    }
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Handle Delete key to remove selected photo
  useEffect(() => {
    const handleDelete = (e) => {
      if (e.key === 'Delete' && selectedPhotoId) {
        handleDeletePhoto(selectedPhotoId);
      }
    };

    document.addEventListener('keydown', handleDelete);
    return () => document.removeEventListener('keydown', handleDelete);
  }, [selectedPhotoId]);

  const handleAddPhotos = (newPhotos) => {
    const photosWithDefaults = newPhotos.map((photo, index) => ({
      ...photo,
      id: Date.now() + Math.random(),
      position: {
        x: photoWindowBounds.x + 20 + (index * 20),
        y: photoWindowBounds.y + 20 + (index * 20)
      },
      size: { width: 200, height: 150 },
      zIndex: photos.length + index
    }));

    setPhotos(prev => [...prev, ...photosWithDefaults]);
  };

  const handleDeletePhoto = (photoId) => {
    setPhotos(prev => prev.filter(p => p.id !== photoId));
    if (selectedPhotoId === photoId) {
      setSelectedPhotoId(null);
    }
  };

  const handleUpdatePhoto = (photoId, updates) => {
    setPhotos(prev => prev.map(p =>
      p.id === photoId ? { ...p, ...updates } : p
    ));
  };

  const handleSelectPhoto = (photoId) => {
    setSelectedPhotoId(photoId);
  };

  const handleBringToFront = () => {
    if (!selectedPhotoId) return;
    const maxZIndex = Math.max(...photos.map(p => p.zIndex), 0);
    handleUpdatePhoto(selectedPhotoId, { zIndex: maxZIndex + 1 });
  };

  const handleSendToBack = () => {
    if (!selectedPhotoId) return;
    const minZIndex = Math.min(...photos.map(p => p.zIndex), 0);
    handleUpdatePhoto(selectedPhotoId, { zIndex: minZIndex - 1 });
  };

  const selectedPhoto = photos.find(p => p.id === selectedPhotoId);

  return (
    <div className="envelope-designer-modal" onClick={onClose}>
      <div className="envelope-designer-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <span>✕</span>
        </button>

        <div className="envelope-canvas-area" ref={canvasRef}>
          <EnvelopeCanvas
            photos={photos}
            selectedPhotoId={selectedPhotoId}
            photoWindowBounds={photoWindowBounds}
            onSelectPhoto={handleSelectPhoto}
            onUpdatePhoto={handleUpdatePhoto}
          />
        </div>

        <div className="envelope-sidebar">
          <h2 className="envelope-title">
            <div>信封设计</div>
            <div>envelope designer</div>
          </h2>

          <PhotoUploader onAddPhotos={handleAddPhotos} />

          <EnvelopeExportButton photos={photos} photoWindowBounds={photoWindowBounds} />

          {selectedPhoto && (
            <PhotoEditor
              photo={selectedPhoto}
              onUpdate={(updates) => handleUpdatePhoto(selectedPhotoId, updates)}
              onDelete={() => handleDeletePhoto(selectedPhotoId)}
              onBringToFront={handleBringToFront}
              onSendToBack={handleSendToBack}
              windowBounds={photoWindowBounds}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EnvelopeDesigner;
