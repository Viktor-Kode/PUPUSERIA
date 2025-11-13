'use client'

import { useMemo, useState } from 'react'
import { FullMenuData } from '@/data/siteContent'
import { DietaryIcon, DietaryTag, DietaryLegend } from '@/components/dietary'
import { DietaryType } from '@/app/components/Common/DietaryIcons'

// Helper function to map old dietary types to new dietary tags
const mapDietaryTypeToTag = (oldType: DietaryType): DietaryTag | null => {
  const mapping: Record<string, DietaryTag> = {
    'vegetarian': 'vegetarian',
    'vegan': 'vegan',
    'gluten-free': 'glutenFree',
    'spicy': 'spicy',
    'nut-free': 'nutFree',
    'dairy-free': 'dairyFree',
  }
  return mapping[oldType] || null
}

const InteractiveMenu = () => {
  const [activeStyle, setActiveStyle] = useState<string>('All')

  const styles = useMemo(() => {
    const uniqueStyles = Array.from(
      new Set(FullMenuData.map((item) => item.style)),
    ).sort()
    return ['All', ...uniqueStyles]
  }, [])

  const filteredMenu = useMemo(() => {
    if (activeStyle === 'All') return FullMenuData
    return FullMenuData.filter((item) => item.style === activeStyle)
  }, [activeStyle])

  // Get all unique dietary tags used in the menu items
  const usedDietaryTags = useMemo(() => {
    const allTags = new Set<DietaryTag>()
    FullMenuData.forEach((item) => {
      if (item.dietary) {
        item.dietary.forEach((oldType) => {
          const tag = mapDietaryTypeToTag(oldType)
          if (tag) {
            allTags.add(tag)
          }
        })
      }
    })
    return Array.from(allTags)
  }, [])

  return (
    <section id='menu-section' className='scroll-mt-20'>
      <div className='container'>
        <div className='text-center mb-12'>
          <p className='text-primary text-lg font-normal tracking-widest uppercase'>
            Tasting Menu
          </p>
          <h2 className='mt-3'>Explore the Current Lineup</h2>
          <p className='text-deep/70 max-w-2xl mx-auto mt-4'>
            Filter by style to explore Freddys latest tacos, small bites, and
            sweet finishes. Tap a row to reveal the chef&apos;s notes for each
            dish.
          </p>
        </div>

        <div className='flex flex-wrap justify-center gap-3 mb-8'>
          {styles.map((style) => {
            const isActive = style === activeStyle
            return (
              <button
                key={style}
                type='button'
                onClick={() => {
                  setActiveStyle(style)
                }}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-primary text-white border-primary shadow-md'
                    : 'border-black/10 text-black/70 hover:border-primary hover:text-primary'
                }`}>
                {style}
              </button>
            )
          })}
        </div>

        <div className='rounded-[32px] border border-amber-500/60 bg-[#f5d77a] shadow-[0_45px_90px_-40px_rgba(150,105,20,0.55)]'>
          <div className='grid grid-cols-[2fr_1fr_auto] gap-4 px-8 py-5 text-left text-sm font-semibold uppercase text-deep/80'>
            <span>Name</span>
            <span className='text-center'>Style</span>
            <span className='text-right'>Price</span>
          </div>
          <div className='divide-y divide-white/30'>
            {filteredMenu.map((item) => {
              return (
                <div key={item.name} className='px-8 py-6'>
                  <div className='grid grid-cols-[2fr_1fr_auto] items-start gap-4 text-[#2f2a1f]'>
                    <div>
                      <div className='flex items-center gap-2 flex-wrap'>
                        <p className='text-lg font-semibold'>
                          {item.name}
                        </p>
                        {item.dietary && item.dietary.length > 0 && (
                          <div className='flex items-center gap-1.5 flex-wrap'>
                            {item.dietary
                              .map(mapDietaryTypeToTag)
                              .filter((tag): tag is DietaryTag => tag !== null)
                              .map((tag) => (
                                <DietaryIcon
                                  key={tag}
                                  tag={tag}
                                  size={18}
                                  className={
                                    tag === 'vegan' || tag === 'vegetarian'
                                      ? 'text-green-600'
                                      : tag === 'spicy'
                                      ? 'text-red-500'
                                      : 'text-amber-600'
                                  }
                                />
                              ))}
                          </div>
                        )}
                      </div>
                      <p className='mt-2 text-sm text-[#2f2a1f]/80 leading-6'>
                        {item.description}
                      </p>
                    </div>
                    <p className='text-center text-sm font-medium text-[#2f2a1f]/80'>
                      {item.style}
                    </p>
                    <div className='flex items-center justify-end'>
                      <span className='text-base font-semibold text-[#2f2a1f]'>
                        {item.price}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        
        {/* Legend at bottom showing only dietary labels used in menu */}
        {usedDietaryTags.length > 0 && (
          <div className='mt-8 flex justify-center'>
            <DietaryLegend iconSize={16} tags={usedDietaryTags} />
          </div>
        )}
      </div>
    </section>
  )
}

export default InteractiveMenu

