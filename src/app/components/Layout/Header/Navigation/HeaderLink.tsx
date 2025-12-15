'use client'
import { useState } from 'react'
import Link from 'next/link'
import { HeaderItem } from '../../../../types/menu'
import { usePathname } from 'next/navigation'
import { useI18n } from '@/i18n/client'

const HeaderLink: React.FC<{ item: HeaderItem; sticky: boolean }> = ({ item, sticky }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const path = usePathname()
  const { t } = useI18n()
  
  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true)
    }
  }
  
  const handleMouseLeave = () => {
    setSubmenuOpen(false)
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (item.href.startsWith('/#')) {
      e.preventDefault()
      const targetId = item.href.substring(2)
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <div
      className='relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <Link
        href={item.href}
        onClick={handleClick}
        className={`text-lg flex font-medium duration-300 px-3 py-2 rounded-lg transition-all hover:shadow-sm ${
          path === item.href
            ? sticky 
              ? 'bg-[#7CFC00] text-black font-semibold' 
              : 'bg-white/20 text-white backdrop-blur-sm'
            : sticky 
              ? 'text-black/70 hover:text-[#1A73E8] hover:bg-[#1A73E8]/10' 
              : 'text-white hover:text-[#7CFC00] hover:bg-white/10'
        }`}>
        {t(item.label)}
        {item.submenu && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1.5em'
            height='1.5em'
            viewBox='0 0 24 24'
            className='ml-1'>
            <path
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              d='m7 10l5 5l5-5'
            />
          </svg>
        )}
      </Link>
      {submenuOpen && (
        <div
          className={`absolute py-2 left-0 mt-1 w-60 bg-white shadow-lg rounded-lg border border-[#7CFC00]/20`}
          data-aos='fade-up'
          data-aos-duration='500'>
          {item.submenu?.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className={`block px-4 py-3 transition-colors ${
                path === subItem.href
                  ? 'bg-[#1A73E8] text-white'
                  : 'text-black hover:bg-[#7CFC00]/20 hover:text-black'
              }`}>
              <div className='flex items-center'>
                {subItem.label === 'Vegetarian' && (
                  <span className='w-2 h-2 rounded-full bg-[#7CFC00] mr-2'></span>
                )}
                {subItem.label === 'Vegan' && (
                  <span className='w-2 h-2 rounded-full bg-[#7CFC00] mr-2'></span>
                )}
                {subItem.label === 'Gluten-Free' && (
                  <span className='w-2 h-2 rounded-full bg-[#FB8C00] mr-2'></span>
                )}
                {subItem.label === 'Spicy' && (
                  <span className='w-2 h-2 rounded-full bg-red-500 mr-2'></span>
                )}
                {subItem.label}
              </div>
            </Link>
          ))}
          {/* Added organic/special note at bottom of submenu */}
          {item.label === 'nav.menu' && (
            <div className='px-4 py-2 border-t border-gray-100 bg-[#7CFC00]/10'>
              <p className='text-xs text-gray-600'>
                <span className='text-[#7CFC00] font-bold'>✓</span> Opciones saludables disponibles
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default HeaderLink