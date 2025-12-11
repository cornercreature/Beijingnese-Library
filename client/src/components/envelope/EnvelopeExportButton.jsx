import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './EnvelopeExportButton.css';

const EnvelopeExportButton = ({ photos, photoWindowBounds }) => {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    console.log('🚀 Export PDF button clicked!');
    setIsExporting(true);

    try {
      console.log('📄 Creating PDF instance...');
      // Create PDF instance (tabloid size)
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'tabloid' // 431.8mm × 279.4mm (11" × 17")
      });

      // Page 1: Front envelope (with photos)
      console.log('🔍 Looking for envelope-front-render...');
      const frontElement = document.getElementById('envelope-front-render');
      console.log('Front element found:', frontElement);

      if (frontElement) {
        console.log('📸 Rendering front page with html2canvas...');
        const frontCanvas = await html2canvas(frontElement, {
          scale: 2,
          backgroundColor: '#ffffff',
          logging: true,
          useCORS: true
        });
        console.log('✅ Front canvas rendered:', frontCanvas.width, 'x', frontCanvas.height);

        const frontImgData = frontCanvas.toDataURL('image/png');
        pdf.addImage(frontImgData, 'PNG', 0, 0, 431.8, 279.4);
        console.log('✅ Front page added to PDF');
      } else {
        console.error('❌ Front element not found!');
      }

      // Page 2: Back envelope (without photos)
      console.log('➕ Adding second page...');
      pdf.addPage();

      console.log('🔍 Looking for envelope-back-render...');
      const backElement = document.getElementById('envelope-back-render');
      console.log('Back element found:', backElement);

      if (backElement) {
        console.log('📸 Rendering back page with html2canvas...');
        const backCanvas = await html2canvas(backElement, {
          scale: 2,
          backgroundColor: '#ffffff',
          logging: true,
          useCORS: true
        });
        console.log('✅ Back canvas rendered:', backCanvas.width, 'x', backCanvas.height);

        const backImgData = backCanvas.toDataURL('image/png');
        pdf.addImage(backImgData, 'PNG', 0, 0, 431.8, 279.4);
        console.log('✅ Back page added to PDF');
      } else {
        console.error('❌ Back element not found!');
      }

      // Download PDF
      const timestamp = new Date().getTime();
      console.log('💾 Saving PDF as envelope-' + timestamp + '.pdf');
      pdf.save(`envelope-${timestamp}.pdf`);
      console.log('✅ PDF export completed successfully!');

    } catch (error) {
      console.error('❌ Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again. Check console for details.');
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
