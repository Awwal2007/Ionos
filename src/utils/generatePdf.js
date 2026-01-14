// utils/invoicePdfGenerator.js
import { jsPDF } from 'jspdf';

export const generateInvoicePDF = async (invoiceData) => {
  const doc = new jsPDF('p', 'mm', 'a4');
  const pageWidth = doc.internal.pageSize.getWidth();


  const logoUrl = '/invoice ionos.png'; // public/logo.png
  const imgData = await loadImageAsBase64(logoUrl);

  doc.addImage(imgData, 'PNG', 20, 10, 40, 20);


  
  // Set fonts
  doc.setFont('helvetica', 'normal');
  
  // Header: "Invoice to:"
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Invoice to:', 20, 20);
  
  // Customer Information
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text('Mr. Amir Masoom', 20, 30);
  doc.text('Unit 15, Linen House,', 20, 35);
  doc.text('253 Kilburn Lane,', 20, 40);
  doc.text('Queen\'s Park London, W10 4BQ', 20, 45);
  doc.text('UNITED KINGDOM', 20, 50);
  doc.text('portal@halalfoodauthority.com', 20, 55);
  
  // Invoice Details Section
  const startY = 70;
  
  // Description Header
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Description: SSL Business Wildcard', 20, startY);
  
  // Bullet points
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const bulletPoints = [
    '- Instant SSL DV',
    '- Protection for one domain name',
    '- Domain Validated',
    '- Up to 256-bit encryption',
    '- £500,000 loss excess amount',
    '- Padlock display',
    '- Easy to activate on your website'
  ];
  
  bulletPoints.forEach((point, index) => {
    doc.text(point, 20, startY + 10 + (index * 5));
  });
  
  // Table Header
  const tableStartY = startY + 50;
  doc.setFont('helvetica', 'bold');
  doc.text('Duration', 20, tableStartY);
  doc.text('Price', 100, tableStartY);
  doc.text('Amount', 160, tableStartY);
  
  // Draw table lines
  doc.setLineWidth(0.5);
  doc.line(20, tableStartY + 2, pageWidth - 20, tableStartY + 2);
  
  // Table Content
  doc.setFont('helvetica', 'normal');
  doc.text('1 Years', 20, tableStartY + 10);
  doc.text('£1,390.00', 100, tableStartY + 10);
  doc.text('£1,390.00', 160, tableStartY + 10);
  
  // Subtotal
  doc.text('Subtotal', 20, tableStartY + 20);
  doc.text('£1,390.00', 100, tableStartY + 20);
  doc.text('£1,390.00', 160, tableStartY + 20);
  
  // VAT
  doc.text('VAT', 20, tableStartY + 30);
  doc.text('£278.00', 100, tableStartY + 30);
  doc.text('£1,668.00', 160, tableStartY + 30);
  
  // Draw lines for separation
  doc.line(20, tableStartY + 32, pageWidth - 20, tableStartY + 32);
  
  // Total Amount
  doc.setFont('helvetica', 'bold');
  doc.text('Total Amount', 20, tableStartY + 40);
  doc.text('£1,668.00', 100, tableStartY + 40);
  doc.text('£1,668.00', 160, tableStartY + 40);
  
  // Amount Due (at bottom)
  const bottomY = tableStartY + 60;
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Amount due: £1,668.00 GBP', 20, bottomY);
  
  // Add a border around the invoice
//   doc.setLineWidth(0.3);
//   doc.rect(15, 15, pageWidth - 30, bottomY - 5);
  
  // Add invoice number and date (optional)
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const today = new Date().toLocaleDateString('en-GB');
  doc.text(`Invoice Date: ${today}`, pageWidth - 60, 20);
  doc.text(`Invoice #: ${Date.now().toString().slice(-8)}`, pageWidth - 60, 25);
  
  // Save the PDF
  doc.save(`Invoice-${Date.now()}.pdf`);
};



const loadImageAsBase64 = (url) =>
  new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = function () {
      const canvas = document.createElement('canvas');
      canvas.width = this.width;
      canvas.height = this.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(this, 0, 0);
      resolve(canvas.toDataURL('image/png'));
    };
    img.src = url;
  });