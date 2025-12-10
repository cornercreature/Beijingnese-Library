import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './ExportControls.css';

const ExportControls = ({ photos, photoWindowBounds }) => {
  const [isExportingPDF, setIsExportingPDF] = useState(false);
  const [isExportingPNG, setIsExportingPNG] = useState(false);

  const handleExportPDF = async () => {
    setIsExportingPDF(true);

    try {
      // Create PDF instance (letter size)
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'letter' // 215.9mm × 279.4mm
      });

      // Page 1: Front envelope (no photos)
      const frontElement = document.getElementById('envelope-front-render');
      if (frontElement) {
        const frontCanvas = await html2canvas(frontElement, {
          scale: 2,
          backgroundColor: '#ffffff',
          logging: false,
          useCORS: true
        });

        const frontImgData = frontCanvas.toDataURL('image/png');
        pdf.addImage(frontImgData, 'PNG', 0, 0, 215.9, 279.4);
      }

      // Page 2: Back envelope with photos
      pdf.addPage();
      const backElement = document.getElementById('envelope-back-render');
      if (backElement) {
        const backCanvas = await html2canvas(backElement, {
          scale: 2,
          backgroundColor: '#ffffff',
          logging: false,
          useCORS: true
        });

        const backImgData = backCanvas.toDataURL('image/png');
        pdf.addImage(backImgData, 'PNG', 0, 0, 215.9, 279.4);
      }

      // Download PDF
      const timestamp = new Date().getTime();
      pdf.save(`envelope-${timestamp}.pdf`);

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsExportingPDF(false);
    }
  };

  const handleExportBackPNG = async () => {
    setIsExportingPNG(true);

    try {
      const element = document.getElementById('envelope-back-render');
      if (!element) {
        throw new Error('Envelope back element not found');
      }

      const canvas = await html2canvas(element, {
        scale: 2,
        backgroundColor: '#ffffff',
        logging: false,
        useCORS: true
      });

      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          const timestamp = new Date().getTime();
          link.download = `envelope-back-${timestamp}.png`;
          link.href = url;
          link.click();
          URL.revokeObjectURL(url);
        }
        setIsExportingPNG(false);
      }, 'image/png');

    } catch (error) {
      console.error('Error exporting PNG:', error);
      alert('Failed to export PNG. Please try again.');
      setIsExportingPNG(false);
    }
  };

  return (
    <div className="export-controls">
      <h3 className="export-title">
        <div>导出</div>
        <div>export</div>
      </h3>

      <button
        type="button"
        onClick={handleExportPDF}
        disabled={isExportingPDF}
        className="export-button export-pdf"
      >
        {isExportingPDF ? (
          <>
            <div>生成中...</div>
            <div>generating pdf...</div>
          </>
        ) : (
          <>
            <div>导出PDF</div>
            <div>export 2-page pdf</div>
          </>
        )}
      </button>

      <button
        type="button"
        onClick={handleExportBackPNG}
        disabled={isExportingPNG}
        className="export-button export-png"
      >
        {isExportingPNG ? (
          <>
            <div>生成中...</div>
            <div>generating png...</div>
          </>
        ) : (
          <>
            <div>导出背面PNG</div>
            <div>export back png</div>
          </>
        )}
      </button>

      <p className="export-hint">
        <small>PDF includes front & back pages</small>
      </p>
    </div>
  );
};

export default ExportControls;
