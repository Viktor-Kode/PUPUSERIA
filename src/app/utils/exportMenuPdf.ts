'use client'

import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { FullMenuType } from '@/app/types/fullmenu'
import { DietaryType } from '@/app/components/Common/DietaryIcons'

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

  cursorY += 32

  // Helper function to sanitize text for PDF (removes problematic characters)
  const sanitizeText = (text: string): string => {
    if (!text) return ''
    // Replace problematic Unicode characters with ASCII equivalents
    return String(text)
      .replace(/['']/g, "'") // Replace curly quotes with straight quotes
      .replace(/[""]/g, '"') // Replace curly double quotes
      .replace(/[–—]/g, '-') // Replace em/en dashes
      .replace(/…/g, '...') // Replace ellipsis
      .replace(/[^\x20-\x7E\n\r\t]/g, '') // Keep only printable ASCII + newlines/tabs
  }

  // Helper function to format dietary icons as text
  // Maps old dietary types to readable labels that match the icon meanings
  // Using text-only labels for better PDF compatibility
  const formatDietaryIcons = (dietary?: DietaryType[]): string => {
    if (!dietary || dietary.length === 0) return ''
    
    // Text labels that match the icon meanings (leaf, plant roots, wheat, etc.)
    // Using ASCII-only characters to avoid encoding issues
    const labelMap: Record<DietaryType, string> = {
      vegetarian: '[Veg]', // Leaf icon
      vegan: '[Vgn]', // Plant roots icon
      'gluten-free': '[GF]', // Wheat icon
      spicy: '[Spicy]', // Pepper icon
      halal: '[H]',
      kosher: '[K]',
      'nut-free': '[NF]', // Peanut icon
      'dairy-free': '[DF]', // Milk carton icon
      organic: '[Org]',
      'low-calorie': '[LC]',
      'chefs-pick': '[CP]', // Changed from star to avoid encoding issues
    }
    
    return dietary
      .map((d) => labelMap[d] || `[${d}]`)
      .join(' ')
  }

  // Prepare table data with 4 columns: Name (with icons), Style, Price, Description
  // Sanitize all text to avoid encoding issues
  const tableData = menu.map((item) => {
    const dietaryIcons = formatDietaryIcons(item.dietary)
    const nameWithIcons = dietaryIcons
      ? `${sanitizeText(item.name)} ${dietaryIcons}`
      : sanitizeText(item.name)

    return [
      nameWithIcons,
      sanitizeText(item.style),
      sanitizeText(item.price),
      sanitizeText(item.description),
    ]
  })

  autoTable(doc, {
    head: [['Name', 'Style', 'Price', 'Description']],
    body: tableData,
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

  // Get all unique dietary types used in the menu
  const usedDietaryTypes = new Set<DietaryType>()
  menu.forEach((item) => {
    if (item.dietary) {
      item.dietary.forEach((d) => usedDietaryTypes.add(d))
    }
  })

  // Add legend if there are any dietary labels used
  if (usedDietaryTypes.size > 0) {
    // Get the final Y position after the table
    // jspdf-autotable stores the final Y position in doc.lastAutoTable.finalY
    const lastAutoTableY = (doc as any).lastAutoTable?.finalY
    const legendY = lastAutoTableY ? lastAutoTableY + 40 : doc.internal.pageSize.getHeight() - 100
    
    // Legend label mapping (same as formatDietaryIcons)
    const labelMap: Record<DietaryType, string> = {
      vegetarian: '[Veg]', // Leaf icon
      vegan: '[Vgn]', // Plant roots icon
      'gluten-free': '[GF]', // Wheat icon
      spicy: '[Spicy]', // Pepper icon
      halal: '[H]',
      kosher: '[K]',
      'nut-free': '[NF]', // Peanut icon
      'dairy-free': '[DF]', // Milk carton icon
      organic: '[Org]',
      'low-calorie': '[LC]',
      'chefs-pick': '[CP]', // Changed from star to avoid encoding issues
    }

    // Full name mapping for legend (using ASCII-safe characters)
    const fullNameMap: Record<DietaryType, string> = {
      vegetarian: 'Vegetarian',
      vegan: 'Vegan',
      'gluten-free': 'Gluten-Free',
      spicy: 'Spicy',
      halal: 'Halal',
      kosher: 'Kosher',
      'nut-free': 'Nut-Free',
      'dairy-free': 'Dairy-Free',
      organic: 'Organic',
      'low-calorie': 'Low-Calorie',
      'chefs-pick': "Chef's Pick",
    }

    // Draw legend section
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(12)
    doc.text('Dietary Information', marginX, legendY)
    
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10)
    
    let legendX = marginX
    let currentY = legendY + 16
    const lineHeight = 14
    const maxWidth = doc.internal.pageSize.getWidth() - marginX * 2
    let currentLineWidth = 0

    // Sort dietary types for consistent display
    const sortedTypes = Array.from(usedDietaryTypes).sort()

    sortedTypes.forEach((type) => {
      const label = labelMap[type] || `[${type}]`
      const fullName = sanitizeText(fullNameMap[type] || type)
      const text = `${label} = ${fullName}`
      const textWidth = doc.getTextWidth(text)

      // Check if we need a new line
      if (currentLineWidth > 0 && currentLineWidth + textWidth + 20 > maxWidth) {
        currentY += lineHeight
        legendX = marginX
        currentLineWidth = 0
      }

      // Add separator if not first item on line
      if (currentLineWidth > 0) {
        const separator = ' | '
        doc.text(separator, legendX, currentY)
        legendX += doc.getTextWidth(separator)
        currentLineWidth = legendX - marginX
      }

      // Render the text
      doc.text(text, legendX, currentY)
      legendX += textWidth
      currentLineWidth = legendX - marginX
    })
  }

  doc.save('freddys-tacos-menu.pdf')
}

