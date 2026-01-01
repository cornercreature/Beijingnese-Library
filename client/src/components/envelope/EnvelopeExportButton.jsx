import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './EnvelopeExportButton.css';

const EnvelopeExportButton = ({ photos, photoWindowBounds }) => {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);

    try {
      // Create PDF instance (tabloid size)
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'tabloid' // 431.8mm × 279.4mm (11" × 17")
      });

      // Page 1: Front envelope (with photos)
      const frontElement = document.getElementById('envelope-front-render');

      if (frontElement) {
        const frontCanvas = await html2canvas(frontElement, {
          scale: 3,
          backgroundColor: '#ffffff',
          logging: false,
          useCORS: true
        });

        const frontImgData = frontCanvas.toDataURL('image/png');
        pdf.addImage(frontImgData, 'PNG', 0, 0, 431.8, 279.4);
      }

      // Page 2: Back envelope (without photos)
      pdf.addPage();

      const backElement = document.getElementById('envelope-back-render');

      if (backElement) {
        const backCanvas = await html2canvas(backElement, {
          scale: 3,
          backgroundColor: '#ffffff',
          logging: false,
          useCORS: true
        });

        const backImgData = backCanvas.toDataURL('image/png');
        pdf.addImage(backImgData, 'PNG', 0, 0, 431.8, 279.4);
      }

      // Download PDF
      const timestamp = new Date().getTime();
      pdf.save(`envelope-${timestamp}.pdf`);

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleExport}
      disabled={isExporting}
      className="envelope-export-button"
    >
      {isExporting ? (
        <>
          <div>生成中...</div>
          <div>generating pdf...</div>
        </>
      ) : (
        <>
          <div>导出PDF</div>
          <div>export pdf</div>
        </>
      )}
    </button>
  );
};

export default EnvelopeExportButton;
