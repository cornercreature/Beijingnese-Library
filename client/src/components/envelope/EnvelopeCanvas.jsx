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

  const resizeState = useRef({
    isResizing: false,
    photoId: null,
    corner: null,
    startX: 0,
    startY: 0,
    initialSize: { width: 0, height: 0 },
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
    resizeState.current.isResizing = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    document.removeEventListener('mousemove', handleResizeMove);
    document.removeEventListener('mouseup', handleResizeUp);
  };

  const handleResizeMouseDown = (photoId, corner, e) => {
    e.preventDefault();
    e.stopPropagation();

    const photo = photos.find(p => p.id === photoId);
    if (!photo) return;

    onSelectPhoto(photoId);

    resizeState.current = {
      isResizing: true,
      photoId,
      corner,
      startX: e.clientX,
      startY: e.clientY,
      initialSize: { ...photo.size },
      initialPosition: { ...photo.position }
    };

    document.addEventListener('mousemove', handleResizeMove);
    document.addEventListener('mouseup', handleResizeUp);
  };

  const handleResizeMove = (e) => {
    if (!resizeState.current.isResizing) return;

    const deltaX = e.clientX - resizeState.current.startX;
    const deltaY = e.clientY - resizeState.current.startY;

    const photo = photos.find(p => p.id === resizeState.current.photoId);
    if (!photo) return;

    const corner = resizeState.current.corner;
    const aspectRatio = resizeState.current.initialSize.width / resizeState.current.initialSize.height;

    let newWidth = resizeState.current.initialSize.width;
    let newHeight = resizeState.current.initialSize.height;
    let newX = resizeState.current.initialPosition.x;
    let newY = resizeState.current.initialPosition.y;

    // Calculate size changes based on corner
    if (corner.includes('e')) {
      newWidth = resizeState.current.initialSize.width + deltaX;
    }
    if (corner.includes('w')) {
      newWidth = resizeState.current.initialSize.width - deltaX;
      newX = resizeState.current.initialPosition.x + deltaX;
    }
    if (corner.includes('s')) {
      newHeight = resizeState.current.initialSize.height + deltaY;
    }
    if (corner.includes('n')) {
      newHeight = resizeState.current.initialSize.height - deltaY;
      newY = resizeState.current.initialPosition.y + deltaY;
    }

    // Maintain aspect ratio
    if (corner === 'nw' || corner === 'ne' || corner === 'sw' || corner === 'se') {
      newHeight = newWidth / aspectRatio;
      if (corner === 'nw' || corner === 'ne') {
        newY = resizeState.current.initialPosition.y + (resizeState.current.initialSize.height - newHeight);
      }
    }

    // Constrain minimum size
    newWidth = Math.max(50, newWidth);
    newHeight = Math.max(50, newHeight);

    // Constrain to photo window bounds
    newX = Math.max(photoWindowBounds.x, Math.min(newX, photoWindowBounds.x + photoWindowBounds.width - newWidth));
    newY = Math.max(photoWindowBounds.y, Math.min(newY, photoWindowBounds.y + photoWindowBounds.height - newHeight));

    onUpdatePhoto(resizeState.current.photoId, {
      size: { width: newWidth, height: newHeight },
      position: { x: newX, y: newY }
    });
  };

  const handleResizeUp = () => {
    resizeState.current.isResizing = false;
    document.removeEventListener('mousemove', handleResizeMove);
    document.removeEventListener('mouseup', handleResizeUp);
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
    // Flap area: use CSS variables (default 45-70% left, 7-27% top)

    // Calculate relative position within A-g area
    const agLeft = 0.618;
    const agTop = 0.307;
    const agWidth = 0.21; // 82.8% - 61.8%
    const agHeight = 0.138; // 44.5% - 30.7%

    const photoCenterX = photo.position.x + photo.size.width / 2;
    const photoCenterY = photo.position.y + photo.size.height / 2;

    const relativeX = (photoCenterX / visibleWidth - agLeft) / agWidth;
    const relativeY = (photoCenterY / visibleHeight - agTop) / agHeight;

    // Map to flap coordinates (matching CSS variables)
    const flapLeft = 0.384;
    const flapTop = 0.13;
    const flapWidth = 0.208; // 100% - 38.4% - 40.8% = 20.8%
    const flapHeight = 0.14; // 100% - 13% - 73% = 14%

    const flapCenterX = (flapLeft + relativeX * flapWidth) * exportWidth;
    const flapCenterY = (flapTop + relativeY * flapHeight) * exportHeight;

    // Calculate position with constraints to keep within flap bounds
    const photoWidthScaled = photo.size.width * scaleX;
    const photoHeightScaled = photo.size.height * scaleY;

    let leftPos = flapCenterX - (photoWidthScaled / 2);
    let topPos = flapCenterY - (photoHeightScaled / 2);

    // Constrain to flap area boundaries
    const flapLeftPx = flapLeft * exportWidth;
    const flapTopPx = flapTop * exportHeight;
    const flapRightPx = (flapLeft + flapWidth) * exportWidth;
    const flapBottomPx = (flapTop + flapHeight) * exportHeight;

    leftPos = Math.max(flapLeftPx, Math.min(leftPos, flapRightPx - photoWidthScaled));
    topPos = Math.max(flapTopPx, Math.min(topPos, flapBottomPx - photoHeightScaled));

    return {
      left: `${leftPos}px`,
      top: `${topPos}px`,
      width: `${photoWidthScaled}px`,
      height: `${photoHeightScaled}px`,
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
              <div
                key={`flap-wrapper-${photo.id}`}
                style={{
                  position: 'absolute',
                  left: `${0.384 * 1632}px`,
                  top: `${0.13 * 1056}px`,
                  width: `${0.208 * 1632}px`,
                  height: `${0.14 * 1056}px`,
                  overflow: 'hidden',
                  zIndex: photo.zIndex
                }}
              >
                <img
                  key={`flap-${photo.id}`}
                  src={photo.url}
                  alt="Flap Reflection"
                  style={{
                    position: 'absolute',
                    left: `${parseFloat(flapStyle.left) - (0.384 * 1632)}px`,
                    top: `${parseFloat(flapStyle.top) - (0.13 * 1056)}px`,
                    width: flapStyle.width,
                    height: flapStyle.height,
                    transform: `rotate(${(photo.rotation || 0) + 180}deg)`,
                    transformOrigin: 'center center'
                  }}
                />
              </div>
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

        {/* Flap area boundary indicator */}
        <div className="flap-area-boundary">
          <span className="boundary-label">flap area</span>
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

          {/* Render photos inside drop zone for overflow clipping */}
          {photos.map(photo => (
            <div
              key={photo.id}
              className={`photo-item ${selectedPhotoId === photo.id ? 'selected' : ''}`}
              style={{
                left: `${photo.position.x - photoWindowBounds.x}px`,
                top: `${photo.position.y - photoWindowBounds.y}px`,
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
              {selectedPhotoId === photo.id && (
                <>
                  <div className="resize-handle nw" onMouseDown={(e) => handleResizeMouseDown(photo.id, 'nw', e)} />
                  <div className="resize-handle ne" onMouseDown={(e) => handleResizeMouseDown(photo.id, 'ne', e)} />
                  <div className="resize-handle sw" onMouseDown={(e) => handleResizeMouseDown(photo.id, 'sw', e)} />
                  <div className="resize-handle se" onMouseDown={(e) => handleResizeMouseDown(photo.id, 'se', e)} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnvelopeCanvas;
