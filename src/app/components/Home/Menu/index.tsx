'use client'

import { useMemo, useState } from 'react'
import { FullMenuData } from '@/data/siteContent'

const InteractiveMenu = () => {
  const [activeStyle, setActiveStyle] = useState<string>('All')
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

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

  const handleRowClick = (name: string) => {
    setExpandedItem((prev) => (prev === name ? null : name))
  }

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
                  setExpandedItem(null)
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
              const isExpanded = expandedItem === item.name
              return (
                <div key={item.name}>
                  <button
                    type='button'
                    onClick={() => handleRowClick(item.name)}
                    className='w-full px-8 py-6 text-left transition hover:bg-white/20'>
                    <div className='grid grid-cols-[2fr_1fr_auto] items-center gap-4 text-[#2f2a1f]'>
                      <div>
                        <p className='text-lg font-semibold'>
                          {item.name}
                        </p>
                      </div>
                      <p className='text-center text-sm font-medium text-[#2f2a1f]/80'>
                        {item.style}
                      </p>
                      <div className='flex items-center justify-end gap-3'>
                        <span className='text-base font-semibold text-[#2f2a1f]'>
                          {item.price}
                        </span>
                        <span
                          aria-hidden
                          className={`h-7 w-7 rounded-full border border-white/40 flex items-center justify-center text-sm transition ${
                            isExpanded
                              ? 'bg-[#fef6da] text-deep shadow-lg'
                              : 'bg-white/20 text-[#2f2a1f]/80'
                          }`}>
                          {isExpanded ? '−' : '+'}
                        </span>
                      </div>
                    </div>
                  </button>
                  {isExpanded && (
                    <div className='px-8 pb-6 text-[#2f2a1f]/90 text-sm leading-6 bg-white/30 rounded-b-[28px] border-t border-white/25'>
                      {item.description}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default InteractiveMenu

