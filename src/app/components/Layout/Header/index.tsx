'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import HeaderLink from './Navigation/HeaderLink'
import MobileHeaderLink from './Navigation/MobileHeaderLink'
import { Icon } from '@iconify/react/dist/iconify.js'
import { HeaderData } from '@/data/siteContent'
import LanguageSwitcher from './LanguageSwitcher'
import { useI18n } from '@/i18n/client'

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)

  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const { t } = useI18n()

  const headerLink = HeaderData

  const handleScroll = () => {
    setSticky(window.scrollY >= 20)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navbarOpen])

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [navbarOpen])

  return (
    <header
      className={`fixed top-0 z-40 py-4 w-full transition-all duration-300 ${
        sticky 
          ? 'shadow-lg bg-white/95 backdrop-blur-sm' 
          : 'shadow-none bg-gradient-to-r from-[#7CFC00]/20 via-[#FB8C00]/10 to-[#1A73E8]/10'
      }`}>
      <div>
        <div className='container flex items-center justify-between gap-2'>
          <div className='min-w-0 flex-shrink'>
            <Logo sticky={sticky} />
          </div>
          <nav className='hidden lg:flex grow items-center gap-4 xl:gap-6 justify-center'>
            {headerLink.map((item, index) => (
              <HeaderLink key={index} item={item} sticky={sticky} />
            ))}
          </nav>
          <div className='flex items-center gap-2 lg:gap-3'>
            <LanguageSwitcher sticky={sticky} />
          
            {/* Updated phone link with blue color */}
            <Link
              href='tel:+11234567890'
              className={`text-lg font-medium hidden xl:block transition-colors duration-300 rounded-lg px-4 py-2 ${
                sticky 
                  ? 'text-[#1A73E8] hover:bg-[#1A73E8]/10' 
                  : 'text-[#1A73E8] hover:bg-[#1A73E8]/20'
              }`}
              aria-label={t('common.callUs')}>
              <Icon
                icon='solar:phone-bold'
                className={`text-2xl inline-block me-2 ${
                  sticky ? 'text-[#1A73E8]' : 'text-[#1A73E8]'
                }`}
              />
              {t('common.phone')}
            </Link>
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className='block lg:hidden p-2 rounded-lg hover:bg-white/20'
              aria-label={t('common.toggleMenu')}>
              <span className={`block w-6 h-0.5 transition-colors duration-300 ${
                sticky ? 'bg-black' : 'bg-[#1A73E8]'
              }`}></span>
              <span className={`block w-6 h-0.5 mt-1.5 transition-colors duration-300 ${
                sticky ? 'bg-black' : 'bg-[#FB8C00]'
              }`}></span>
              <span className={`block w-6 h-0.5 mt-1.5 transition-colors duration-300 ${
                sticky ? 'bg-black' : 'bg-[#7CFC00]'
              }`}></span>
            </button>
          </div>
        </div>
        {navbarOpen && (
          <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-40' />
        )}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 max-w-xs ${
            navbarOpen ? 'translate-x-0' : 'translate-x-full'
          } z-50`}>
          <div className='flex items-center justify-between gap-2 p-4'>
            <div>
              <Logo sticky={true} />
            </div>
            <button
              onClick={() => setNavbarOpen(false)}
              className="hover:cursor-pointer"
              aria-label={t('common.closeMenu')}>
              <Icon
                icon='material-symbols:close-rounded'
                width={24}
                height={24}
                className='text-black hover:text-[#FB8C00] text-24 inline-block me-2'
              />
            </button>
          </div>
          <div className='flex items-center justify-between px-4 mt-6'>
            <Link
              href='https://wa.me/11234567890'
              target='_blank'
              className='text-lg font-medium hover:text-[#7CFC00] block md:hidden bg-[#7CFC00] text-black px-4 py-2 rounded-lg hover:bg-[#6CE800] transition-colors'
              aria-label={t('common.orderWhatsApp')}>
              <Icon
                icon='mdi:whatsapp'
                className='text-2xl inline-block me-2'
              />
              {t('common.orderNow')}
            </Link>
            <LanguageSwitcher sticky={true} />
          </div>
          <nav className='flex flex-col items-start p-4'>
            {headerLink.map((item, index) => (
              <MobileHeaderLink 
                key={index} 
                item={item} 
                onLinkClick={() => setNavbarOpen(false)}
              />
            ))}
          </nav>
          {/* Added contact info in mobile menu */}
          <div className='p-4 border-t border-gray-200'>
            <h3 className='font-bold text-lg mb-2 text-[#1A73E8]'>Contáctanos</h3>
            <Link
              href='tel:+11234567890'
              className='flex items-center text-gray-700 hover:text-[#1A73E8] mb-2'>
              <Icon icon='solar:phone-bold' className='text-xl mr-2 text-[#1A73E8]' />
              <span>+1 (123) 456-7890</span>
            </Link>
            <p className='text-sm text-gray-600 mt-4'>
              <Icon icon='mdi:clock-outline' className='inline mr-2 text-[#FB8C00]' />
              Horario: 10am - 9pm
            </p>
            <p className='text-sm text-gray-600 mt-2'>
              <Icon icon='mdi:leaf' className='inline mr-2 text-[#7CFC00]' />
              Comida orgánica y saludable
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header