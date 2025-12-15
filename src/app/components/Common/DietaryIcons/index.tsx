'use client'

import React from 'react'

/**
 * Dietary tags based on REAL menu data.
 * These describe the food honestly — not marketing claims.
 */
export type DietaryType =
  | 'vegetarian'
  | 'vegan'
  | 'spicy'
  | 'glutenFree'
  | 'glutenFreeOptional'
  | 'containsDairy'
  | 'containsEgg'
  | 'containsMeat'
  | 'containsShellfish'
  | 'chefsPick'

interface DietaryIconsProps {
  dietary: DietaryType[]
  className?: string
  size?: number
}

const DietaryIcons: React.FC<DietaryIconsProps> = ({
  dietary,
  className = '',
  size = 20,
}) => {
  if (!dietary || dietary.length === 0) return null

  /**
   * Human-readable labels for tooltips
   */
  const labelMap: Record<DietaryType, string> = {
    vegetarian: 'Vegetarian',
    vegan: 'Vegan',
    spicy: 'Spicy',
    glutenFree: 'Gluten Free',
    glutenFreeOptional: 'Gluten Free (Preparation Dependent)',
    containsDairy: 'Contains Dairy',
    containsEgg: 'Contains Egg',
    containsMeat: 'Contains Meat',
    containsShellfish: 'Contains Shellfish',
    chefsPick: "Chef’s Pick",
  }

  /**
   * Icon mapping — visuals stay the same, meaning is corrected
   */
  const iconComponents: Record<DietaryType, React.ReactNode> = {
    vegetarian: (
      <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        aria-label='Vegetarian'>
        <circle cx='12' cy='12' r='10' fill='#4CAF50' />
        <path
          d='M12 4c-1.93 0-3.68.78-4.95 2.05L12 12l4.95-5.95C15.68 4.78 13.93 4 12 4z'
          fill='#2E7D32'
        />
      </svg>
    ),

    vegan: (
      <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        aria-label='Vegan'>
        <circle cx='12' cy='12' r='10' fill='#2E7D32' />
        <path
          d='M12 4c-1.93 0-3.68.78-4.95 2.05L12 12l4.95-5.95C15.68 4.78 13.93 4 12 4z'
          fill='#4CAF50'
        />
      </svg>
    ),

    glutenFree: (
      <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        aria-label='Gluten Free'>
        <circle cx='12' cy='12' r='10' fill='#FF9800' />
        <text
          x='12'
          y='16.5'
          fontSize='10'
          fontWeight='bold'
          fill='white'
          textAnchor='middle'>
          GF
        </text>
      </svg>
    ),

    glutenFreeOptional: (
      <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        aria-label='Gluten Free Optional'>
        <circle cx='12' cy='12' r='10' fill='#FFB74D' />
        <text
          x='12'
          y='16.5'
          fontSize='9'
          fontWeight='bold'
          fill='white'
          textAnchor='middle'>
          GF*
        </text>
      </svg>
    ),

    spicy: (
      <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        aria-label='Spicy'>
        <path
          d='M12 2C8 2 6 4 6 8c0 4 2 6 6 10 4-4 6-6 6-10 0-4-2-6-6-6z'
          fill='#F44336'
        />
      </svg>
    ),

    containsDairy: (
      <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        aria-label='Contains Dairy'>
        <rect x='4' y='4' width='16' height='16' rx='2' fill='#2196F3' />
        <line
          x1='4'
          y1='4'
          x2='20'
          y2='20'
          stroke='#F44336'
          strokeWidth='2.5'
          strokeLinecap='round'
        />
      </svg>
    ),

    containsEgg: (
      <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        aria-label='Contains Egg'>
        <ellipse cx='12' cy='13' rx='6' ry='8' fill='#FFF176' />
      </svg>
    ),

    containsMeat: (
      <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        aria-label='Contains Meat'>
        <circle cx='12' cy='12' r='10' fill='#795548' />
      </svg>
    ),

    containsShellfish: (
      <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        aria-label='Contains Shellfish'>
        <path
          d='M12 3c4 0 7 3 7 7s-3 8-7 11c-4-3-7-7-7-11s3-7 7-7z'
          fill='#FF7043'
        />
      </svg>
    ),

    chefsPick: (
      <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        aria-label="Chef’s Pick">
        <path
          d='M12 2L2 7l10 5 10-5-10-5z'
          fill='#FB8C00'
        />
      </svg>
    ),
  }

  return (
    <div className='flex items-center gap-1.5 flex-wrap'>
      {dietary.map((type) => (
        <span
          key={type}
          title={labelMap[type]}
          className='inline-flex items-center justify-center'>
          {iconComponents[type]}
        </span>
      ))}
    </div>
  )
}

export default DietaryIcons
