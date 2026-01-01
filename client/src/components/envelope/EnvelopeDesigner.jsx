import React, { useState, useEffect } from 'react';
import EnvelopeCanvas from './EnvelopeCanvas';
import PhotoUploader from './PhotoUploader';
import PhotoEditor from './PhotoEditor';
import PhotoList from './PhotoList';
import EnvelopeExportButton from './EnvelopeExportButton';
import './EnvelopeDesigner.css';

const EnvelopeDesigner = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhotoId, setSelectedPhotoId] = useState(null);

  // Photo window bounds - matches CSS in EnvelopeCanvas.css (.photo-window-boundary)
  // Expanded to nearly full canvas for maximum creative freedom
  const canvasRef = React.useRef(null);
  const [photoWindowBounds, setPhotoWindowBounds] = useState({
    x: 40,       // Left offset
    y: 40,       // Top offset
    width: 800,  // Default width (will be recalculated)
    height: 600  // Default height (will be recalculated)
  });

  // Calculate actual photo window bounds after canvas mounts
  useEffect(() => {
    if (canvasRef.current) {
      const updateBounds = () => {
        const containerWidth = canvasRef.current.offsetWidth;
        const containerHeight = canvasRef.current.offsetHeight;

        // Percentage-based positioning to match template red area A-g
        const leftPercent = 0.73;
        const topPercent = 0.31;
        const rightPercent = 0.04;
        const bottomPercent = 0.08;

        setPhotoWindowBounds({
          x: containerWidth * leftPercent,
          y: containerHeight * topPercent,
          width: containerWidth * (1 - leftPercent - rightPercent),
          height: containerHeight * (1 - topPercent - bottomPercent)
        });
      };
      updateBounds();
      window.addEventListener('resize', updateBounds);
      return () => window.removeEventListener('resize', updateBounds);
    }
  }, []);

  const handleAddPhotos = (newPhotos) => {
    const photosWithDefaults = newPhotos.map((photo, index) => ({
      ...photo,
      id: Date.now() + Math.random(),
      position: {
        x: photoWindowBounds.x + 20 + (index * 20),
        y: photoWindowBounds.y + 20 + (index * 20)
      },
      size: { width: 200, height: 150 },
      rotation: 0,
      zIndex: photos.length + index
    }));

    setPhotos(prev => [...prev, ...photosWithDefaults]);
  };

  const handleAddPhotosFromFiles = (files) => {
    // Convert File objects to data URLs
    const promises = files.map(file => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          resolve({
            url: e.target.result,
            name: file.name
          });
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(promises).then(photosData => {
      handleAddPhotos(photosData);
    });
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
    <div className="envelope-designer-content">
      <div className="envelope-canvas-area" ref={canvasRef}>
          <EnvelopeCanvas
            photos={photos}
            selectedPhotoId={selectedPhotoId}
            photoWindowBounds={photoWindowBounds}
            onSelectPhoto={handleSelectPhoto}
            onUpdatePhoto={handleUpdatePhoto}
            onAddPhotos={handleAddPhotosFromFiles}
          />
        </div>

        <div className="envelope-sidebar">
          <h2 className="envelope-title">
            <div>信封设计</div>
            <div>envelope designer</div>
          </h2>

          <PhotoUploader onAddPhotos={handleAddPhotos} />

          <PhotoList
            photos={photos}
            selectedPhotoId={selectedPhotoId}
            onSelectPhoto={handleSelectPhoto}
            onDeletePhoto={handleDeletePhoto}
          />

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
  );
};

export default EnvelopeDesigner;
