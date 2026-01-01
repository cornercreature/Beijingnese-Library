import React, { useRef, useState } from 'react';
import './EnvelopeCanvas.css';

const EnvelopeCanvas = ({
  photos,
  selectedPhotoId,
  photoWindowBounds,
  onSelectPhoto,
  onUpdatePhoto,
  onAddPhotos
}) => {
  const canvasInnerRef = useRef(null);
  const [isDragOver, setIsDragOver] = useState(false);
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

  // Drag and drop handlers for file upload
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    const imageFiles = files.filter(f => f.type.startsWith('image/'));

    if (imageFiles.length > 0 && onAddPhotos) {
      onAddPhotos(imageFiles);
    }
  };

  // Calculate photo position for export based on proportional scaling
  // Export render dimensions: 1632 × 1056 (tabloid landscape at 96 DPI)
  // Visible canvas dimensions: dynamic based on container
  const getExportPhotoStyle = (photo) => {
    if (!canvasInnerRef.current) {
      // Fallback if ref not ready
      return {
        left: `${photo.position.x}px`,
        top: `${photo.position.y}px`,
        width: `${photo.size.width}px`,
        height: `${photo.size.height}px`,
      };
    }

    const visibleWidth = canvasInnerRef.current.offsetWidth;
    const visibleHeight = canvasInnerRef.current.offsetHeight;
    const exportWidth = 1632;
    const exportHeight = 1056;

    // Calculate scale factors for both dimensions
    const scaleX = exportWidth / visibleWidth;
    const scaleY = exportHeight / visibleHeight;

    // Scale all photo properties
    return {
      left: `${photo.position.x * scaleX}px`,
      top: `${photo.position.y * scaleY}px`,
      width: `${photo.size.width * scaleX}px`,
      height: `${photo.size.height * scaleY}px`,
    };
  };

  // Check if photo should be reflected to flap area
  // Photos in upper portion of A-g area (61.8-82.8% left, 30.7-45% top) map to flap
  const shouldReflectToFlap = (photo) => {
    if (!canvasInnerRef.current) return false;

    const visibleWidth = canvasInnerRef.current.offsetWidth;
    const visibleHeight = canvasInnerRef.current.offsetHeight;

    // Calculate photo center position as percentage
    const photoCenterX = (photo.position.x + photo.size.width / 2) / visibleWidth;
    const photoCenterY = (photo.position.y + photo.size.height / 2) / visibleHeight;

    // Check if photo is in the upper portion of A-g area that corresponds to flap
    const inFlapCorrespondingRegion =
      photoCenterX >= 0.618 && photoCenterX <= 0.828 && // Within A-g horizontal bounds
      photoCenterY >= 0.307 && photoCenterY <= 0.45;    // Upper portion only

    return inFlapCorrespondingRegion;
  };

  // Calculate flap reflection position for a photo
  const getFlapReflectionStyle = (photo) => {
    if (!canvasInnerRef.current) return null;

    const visibleWidth = canvasInnerRef.current.offsetWidth;
    const visibleHeight = canvasInnerRef.current.offsetHeight;
    const exportWidth = 1632;
    const exportHeight = 1056;

    const scaleX = exportWidth / visibleWidth;
    const scaleY = exportHeight / visibleHeight;

    // Map from A-g coordinates to flap (q∀) coordinates
    // A-g area: 61.8-82.8% left, 30.7-81.4% top
    // Flap area: 45-70% left, 7-27% top

    // Calculate relative position within A-g area
    const agLeft = 0.618;
    const agTop = 0.307;
    const agWidth = 0.21; // 82.8% - 61.8%
    const agHeight = 0.138; // 44.5% - 30.7%

    const photoCenterX = photo.position.x + photo.size.width / 2;
    const photoCenterY = photo.position.y + photo.size.height / 2;

    const relativeX = (photoCenterX / visibleWidth - agLeft) / agWidth;
    const relativeY = (photoCenterY / visibleHeight - agTop) / agHeight;

    // Map to flap coordinates
    const flapLeft = 0.45;
    const flapTop = 0.07;
    const flapWidth = 0.25; // 70% - 45%
    const flapHeight = 0.20; // 27% - 7%

    const flapCenterX = (flapLeft + relativeX * flapWidth) * exportWidth;
    const flapCenterY = (flapTop + relativeY * flapHeight) * exportHeight;

    return {
      left: `${flapCenterX - (photo.size.width * scaleX / 2)}px`,
      top: `${flapCenterY - (photo.size.height * scaleY / 2)}px`,
      width: `${photo.size.width * scaleX}px`,
      height: `${photo.size.height * scaleY}px`,
    };
  };

  return (
    <div className="envelope-canvas">
      {/* Hidden render divs for export */}
      <div id="envelope-front-render" className="envelope-render-hidden">
        <img
          src="/templatepublic-01.png"
          alt="Envelope Front"
          className="envelope-background"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.style.background = '#F4F4F4';
            e.target.parentElement.innerHTML += '<p style="text-align:center;padding:50px;font-family:Noto Serif SC;">Please add templatepublic-01.png to public folder</p>';
          }}
        />
        <div className="photo-container-export">
          {/* Render photos in main A-g area */}
          {photos.map(photo => {
            const style = getExportPhotoStyle(photo);
            return (
              <img
                key={photo.id}
                src={photo.url}
                alt="Uploaded"
                style={{
                  position: 'absolute',
                  ...style,
                  transform: `rotate(${photo.rotation || 0}deg)`,
                  zIndex: photo.zIndex
                }}
              />
            );
          })}

          {/* Render reflected photos in flap area */}
          {photos.filter(photo => shouldReflectToFlap(photo)).map(photo => {
            const flapStyle = getFlapReflectionStyle(photo);
            if (!flapStyle) return null;
            return (
              <img
                key={`flap-${photo.id}`}
                src={photo.url}
                alt="Flap Reflection"
                style={{
                  position: 'absolute',
                  ...flapStyle,
                  transform: `rotate(${(photo.rotation || 0) + 180}deg)`,
                  zIndex: photo.zIndex
                }}
              />
            );
          })}
        </div>
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
      </div>

      {/* Visible canvas */}
      <div className="envelope-canvas-inner" ref={canvasInnerRef} onClick={handleCanvasClick}>
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

        {/* Training overlay */}
        <img
          src="/training.png"
          alt="Training Overlay"
          className="training-overlay"
          draggable={false}
        />

        <div className="placeholder-message">
          <p>Add <strong>templatepublic-01.png</strong> and <strong>templatepublic-02.png</strong> to the <code>/client/public/</code> folder</p>
          <p style={{fontSize: '14px', marginTop: '10px'}}>The envelope designer is ready! Just add your envelope images.</p>
        </div>

        {/* Photo window boundary indicator */}
        <div className="photo-window-boundary">
          <span className="boundary-label">photo area</span>
        </div>

        {/* Drop zone for drag and drop */}
        <div
          className={`photo-drop-zone ${isDragOver ? 'drag-over' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {photos.length === 0 && !isDragOver && (
            <span className="drop-hint">Drop photos here or use upload button</span>
          )}
          {isDragOver && (
            <span className="drop-hint-active">Release to upload</span>
          )}
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
              transform: `rotate(${photo.rotation || 0}deg)`,
              zIndex: photo.zIndex + 10
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
