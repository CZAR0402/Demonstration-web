import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

/**
 * Generate and download a beautifully styled PDF report of all CRM leads.
 * @param {Array} leads - The array of leads from the database.
 * @param {Object} currentUser - The currently authenticated user profile.
 */
export const exportLeadsToPDF = (leads = [], currentUser = null) => {
  if (!Array.isArray(leads) || leads.length === 0) {
    alert('No CRM leads available to export.');
    return;
  }

  // Create A4 Landscape document for wide, readable tabular layout
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // 1. Header Banner Background (#482d82 Fivopay Purple)
  doc.setFillColor(72, 45, 130);
  doc.rect(0, 0, pageWidth, 26, 'F');

  // Cyan-Blue Accent stripe
  doc.setFillColor(27, 104, 179);
  doc.rect(0, 26, pageWidth, 2.5, 'F');

  // Brand Name & Tagline
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(255, 255, 255);
  doc.text('FIVOPAY CRM', 14, 12);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(220, 220, 250);
  doc.text('MAKING BANKING EASIER • ENTERPRISE LEAD REGISTRY', 14, 19);

  // Metadata block (Right side of header)
  doc.setFontSize(8);
  doc.setTextColor(255, 255, 255);
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
  const timeStr = now.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  const userName = currentUser?.name || 'Authorized User';
  const userRole = currentUser?.role === 'ADMIN' ? 'Head of Governance' : 'Sales Executive (BDE)';

  doc.text(`Generated: ${dateStr} at ${timeStr}`, pageWidth - 14, 11, { align: 'right' });
  doc.text(`Exported By: ${userName} (${userRole})`, pageWidth - 14, 16, { align: 'right' });
  doc.text(`Total Records: ${leads.length} Entities`, pageWidth - 14, 21, { align: 'right' });

  // 2. Summary KPI Ribbon
  const stagesCount = {
    New: 0,
    Contacted: 0,
    Interested: 0,
    'Demo Scheduled': 0,
    'Proposal Sent': 0,
    'Closed Won': 0,
    'Closed Lost': 0
  };

  const typesCount = {};

  leads.forEach(l => {
    if (l.stage && stagesCount[l.stage] !== undefined) {
      stagesCount[l.stage]++;
    } else {
      stagesCount['New']++;
    }
    const t = l.type || 'Cooperative Society';
    typesCount[t] = (typesCount[t] || 0) + 1;
  });

  // Small Summary Box below header
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(14, 33, pageWidth - 28, 14, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(71, 85, 105);
  doc.text('PIPELINE SUMMARY:', 18, 41);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(15, 23, 42);

  const summaryPills = [
    `Total: ${leads.length}`,
    `New: ${stagesCount.New}`,
    `Contacted: ${stagesCount.Contacted}`,
    `Interested: ${stagesCount.Interested}`,
    `Demo Scheduled: ${stagesCount['Demo Scheduled']}`,
    `Proposal Sent: ${stagesCount['Proposal Sent']}`,
    `Closed Won: ${stagesCount['Closed Won']}`
  ];

  let currentX = 52;
  summaryPills.forEach(pill => {
    doc.text(`• ${pill}`, currentX, 41);
    currentX += doc.getTextWidth(`• ${pill}`) + 6;
  });

  // 3. Tabular Data Rows
  const tableRows = leads.map((lead, index) => {
    const modulesText = Array.isArray(lead.requiredModules) && lead.requiredModules.length > 0
      ? lead.requiredModules.slice(0, 3).join(', ') + (lead.requiredModules.length > 3 ? ` (+${lead.requiredModules.length - 3})` : '')
      : 'Standard Banking Suite';

    const contactDetails = [
      lead.email || '',
      lead.phone ? `Ph: ${lead.phone}` : ''
    ].filter(Boolean).join('\n');

    return [
      String(index + 1),
      `${lead.name || 'Untitled'}${lead.location ? `\n[${lead.location}]` : ''}`,
      lead.type || 'Cooperative Society',
      lead.contactPerson || 'N/A',
      contactDetails || 'No direct contact',
      modulesText,
      lead.stage || 'New',
      lead.assignedToName || 'Unassigned'
    ];
  });

  // Table Configuration using autoTable
  autoTable(doc, {
    startY: 51,
    margin: { left: 14, right: 14, bottom: 18 },
    head: [[
      '#',
      'Entity Name & Location',
      'Entity Type',
      'Contact Person',
      'Email / Phone',
      'Demanded Modules',
      'Stage',
      'Assigned BDE'
    ]],
    body: tableRows,
    theme: 'grid',
    headStyles: {
      fillColor: [72, 45, 130], // #482d82
      textColor: [255, 255, 255],
      fontStyle: 'bold',
      fontSize: 8,
      halign: 'left',
      cellPadding: 3
    },
    alternateRowStyles: {
      fillColor: [248, 250, 252]
    },
    styles: {
      fontSize: 7.5,
      textColor: [30, 41, 59],
      cellPadding: 2.5,
      overflow: 'linebreak',
      valign: 'middle'
    },
    columnStyles: {
      0: { cellWidth: 10, halign: 'center' }, // #
      1: { cellWidth: 50, fontStyle: 'bold' }, // Entity Name & Location
      2: { cellWidth: 35 },                    // Entity Type
      3: { cellWidth: 32 },                    // Contact Person
      4: { cellWidth: 48 },                    // Email / Phone
      5: { cellWidth: 42 },                    // Demanded Modules
      6: { cellWidth: 26, fontStyle: 'bold' }, // Stage
      7: { cellWidth: 26 }                     // Assigned BDE
    },
    didDrawCell: (data) => {
      // Colorize Stage column for Closed Won or In Progress
      if (data.section === 'body' && data.column.index === 6) {
        const text = String(data.cell.raw || '');
        if (text === 'Closed Won') {
          doc.setTextColor(16, 185, 129); // Green
        } else if (text === 'Demo Scheduled' || text === 'Proposal Sent') {
          doc.setTextColor(99, 102, 241); // Accent Purple
        } else if (text === 'Closed Lost') {
          doc.setTextColor(239, 68, 68); // Red
        }
      }
    },
    didDrawPage: (data) => {
      // Footer on every page
      const pageNumber = doc.internal.getNumberOfPages();
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      doc.setTextColor(148, 163, 184);

      // Left footer
      doc.text(
        'CONFIDENTIAL • FIVOPAY ENTERPRISE CRM • WWW.FIVOPAY.COM',
        14,
        pageHeight - 8
      );

      // Right footer
      doc.text(
        `Page ${data.pageNumber} of ${pageNumber}`,
        pageWidth - 14,
        pageHeight - 8,
        { align: 'right' }
      );
    }
  });

  // Generate File Name
  const fileName = `Fivopay_CRM_Leads_Report_${now.toISOString().split('T')[0]}.pdf`;
  doc.save(fileName);
};
