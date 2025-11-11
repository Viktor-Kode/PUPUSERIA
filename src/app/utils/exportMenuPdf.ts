'use client'

import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { FullMenuType } from '@/app/types/fullmenu'

export const exportMenuPdf = (menu: FullMenuType[]) => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'letter',
  })

  const marginX = 48
  let cursorY = 64

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(24)
  doc.text("Freddys Tacos Menu", marginX, cursorY)

  doc.setFontSize(11)
  doc.setFont('helvetica', 'normal')
  cursorY += 24
  doc.text(`Generated on ${new Date().toLocaleDateString()}`, marginX, cursorY)

  cursorY += 24

  autoTable(doc, {
    head: [['Name', 'Style', 'Price', 'Description']],
    body: menu.map((item) => [
      item.name,
      item.style,
      item.price,
      item.description,
    ]),
    startY: cursorY,
    styles: {
      font: 'helvetica',
      fontSize: 11,
      textColor: '#2f2a1f',
      cellPadding: 8,
      valign: 'middle',
      lineColor: '#f1e3b2',
      lineWidth: 0.4,
    },
    headStyles: {
      fillColor: [224, 193, 118],
      textColor: '#2f2a1f',
      fontStyle: 'bold',
    },
    columnStyles: {
      0: { cellWidth: 140 },
      1: { cellWidth: 110 },
      2: { cellWidth: 60, halign: 'right' },
      3: { cellWidth: 'auto' },
    },
  })

  doc.save('freddys-tacos-menu.pdf')
}

