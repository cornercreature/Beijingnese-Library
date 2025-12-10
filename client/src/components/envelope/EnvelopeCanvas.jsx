import React, { useRef } from 'react';
import './EnvelopeCanvas.css';

const EnvelopeCanvas = ({
  photos,
  selectedPhotoId,
  photoWindowBounds,
  onSelectPhoto,
  onUpdatePhoto
}) => {
  const dragState = useRef({
    isDragging: false,
    photoId: null,
    startX: 0,
    startY: 0,
    initialPosition: { x: 0, y: 0 }
  });

  const handleMouseDown = (photoId, e) => {
    e.preventDefault();
    e.stopPropagation();

    const photo = photos.find(p => p.id === photoId);
    if (!photo) return;

    onSelectPhoto(photoId);

    dragState.current = {
      isDragging: true,
      photoId,
      startX: e.clientX,
      startY: e.clientY,
      initialPosition: { ...photo.position }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!dragState.current.isDragging) return;

    const deltaX = e.clientX - dragState.current.startX;
    const deltaY = e.clientY - dragState.current.startY;

    const photo = photos.find(p => p.id === dragState.current.photoId);
    if (!photo) return;

    // Calculate new position
    let newX = dragState.current.initialPosition.x + deltaX;
    let newY = dragState.current.initialPosition.y + deltaY;

    // Constrain to photo window bounds
    newX = Math.max(photoWindowBounds.x,
      Math.min(newX, photoWindowBounds.x + photoWindowBounds.width - photo.size.width));
    newY = Math.max(photoWindowBounds.y,
      Math.min(newY, photoWindowBounds.y + photoWindowBounds.height - photo.size.height));

    onUpdatePhoto(dragState.current.photoId, {
      position: { x: newX, y: newY }
    });
  };

  const handleMouseUp = () => {
    dragState.current.isDragging = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleCanvasClick = (e) => {
    // Deselect if clicking on empty canvas area
    if (e.target.classList.contains('envelope-canvas-inner')) {
      onSelectPhoto(null);
    }
  };

  return (
    <div className="envelope-canvas">
      {/* Hidden render divs for export */}
      <div id="envelope-front-render" className="envelope-render-hidden">
        <img
          src="/templatepublic-01.png"
          alt="Envelope Front"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.style.background = '#F4F4F4';
            e.target.parentElement.innerHTML += '<p style="text-align:center;padding:50px;font-family:Noto Serif SC;">Please add templatepublic-01.png to public folder</p>';
          }}
        />
      </div>

      <div id="envelope-back-render" className="envelope-render-hidden">
        <img
          src="/templatepublic-02.png"
          alt="Envelope Back"
          className="envelope-background"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.style.background = '#F4F4F4';
          }}
        />
        <div className="photo-container-export">
          {photos.map(photo => (
            <img
              key={photo.id}
              src={photo.url}
              alt="Uploaded"
              style={{
                position: 'absolute',
                left: `${photo.position.x}px`,
                top: `${photo.position.y}px`,
                width: `${photo.size.width}px`,
                height: `${photo.size.height}px`,
                zIndex: photo.zIndex
              }}
            />
          ))}
        </div>
      </div>

      {/* Visible canvas */}
      <div className="envelope-canvas-inner" onClick={handleCanvasClick}>
        <img
          src="/templatepublic-01.png"
          alt="Envelope Template"
          className="envelope-background"
          draggable={false}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextElementSibling.style.display = 'flex';
          }}
        />

        <div className="placeholder-message">
          <p>Add <strong>templatepublic-01.png</strong> and <strong>templatepublic-02.png</strong> to the <code>/client/public/</code> folder</p>
          <p style={{fontSize: '14px', marginTop: '10px'}}>The envelope designer is ready! Just add your envelope images.</p>
        </div>

        {/* Photo window boundary indicator */}
        <div className="photo-window-boundary">
          <span className="boundary-label">photo area</span>
        </div>

        {/* Render photos */}
        {photos.map(photo => (
          <div
            key={photo.id}
            className={`photo-item ${selectedPhotoId === photo.id ? 'selected' : ''}`}
            style={{
              left: `${photo.position.x}px`,
              top: `${photo.position.y}px`,
              width: `${photo.size.width}px`,
              height: `${photo.size.height}px`,
              zIndex: photo.zIndex
            }}
            onMouseDown={(e) => handleMouseDown(photo.id, e)}
          >
            <img
              src={photo.url}
              alt="Uploaded"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnvelopeCanvas;
