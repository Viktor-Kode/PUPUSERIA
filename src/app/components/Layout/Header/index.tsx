'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import HeaderLink from './Navigation/HeaderLink'
import MobileHeaderLink from './Navigation/MobileHeaderLink'
import { Icon } from '@iconify/react/dist/iconify.js'
import { HeaderData } from '@/data/siteContent'

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)

  const mobileMenuRef = useRef<HTMLDivElement>(null)

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
        sticky ? 'shadow-lg bg-white' : 'shadow-none'
      }`}>
      <div>
        <div className='container flex items-center justify-between'>
          <div>
            <Logo sticky={sticky} />
          </div>
          <nav className='hidden lg:flex grow items-center gap-4 xl:gap-6  justify-center'>
            {headerLink.map((item, index) => (
              <HeaderLink key={index} item={item} sticky={sticky} />
            ))}
          </nav>
          <div className='flex items-center gap-2 lg:gap-3'>
            <Link
              href='tel:+10000000000'
              className={`text-lg font-medium hidden xl:block transition-colors duration-300 ${
                sticky ? 'text-black hover:text-primary' : 'text-white hover:text-white/80'
              }`}
              aria-label='Call our reservations team at +1 (000) 000-0000'>
              <Icon
                icon='solar:phone-bold'
                className={`text-3xl lg:text-2xl inline-block me-2 transition-colors duration-300 ${
                  sticky ? 'text-primary' : 'text-white'
                }`}
              />
              +1 (000) 000-0000
            </Link>
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className='block lg:hidden p-2 rounded-lg'
              aria-label='Toggle mobile menu'>
              <span className={`block w-6 h-0.5 transition-colors duration-300 ${sticky ? 'bg-black' : 'bg-white'}`}></span>
              <span className={`block w-6 h-0.5 mt-1.5 transition-colors duration-300 ${sticky ? 'bg-black' : 'bg-white'}`}></span>
              <span className={`block w-6 h-0.5 mt-1.5 transition-colors duration-300 ${sticky ? 'bg-black' : 'bg-white'}`}></span>
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
            {/*  */}
            <button
              onClick={() => setNavbarOpen(false)}
              className="hover:cursor-pointer"
              aria-label='Close menu Modal'>
              <Icon
                icon='material-symbols:close-rounded'
                width={24}
                height={24}
                className='text-black hover:text-primary text-24 inline-block me-2'
              />
            </button>
          </div>
          <Link
            href='tel:+10000000000'
            className='text-lg font-medium hover:text-primary block md:hidden mt-6 p-4'
            aria-label='Call our reservations team at +1 (000) 000-0000'>
            <Icon
              icon='solar:phone-bold'
              className='text-primary text-3xl lg:text-2xl inline-block me-2'
            />
            +1 (000) 000-0000
          </Link>
          <nav className='flex flex-col items-start p-4'>
            {headerLink.map((item, index) => (
              <MobileHeaderLink 
                key={index} 
                item={item} 
                onLinkClick={() => setNavbarOpen(false)}
              />
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
