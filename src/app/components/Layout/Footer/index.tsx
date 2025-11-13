'use client'

import React, { FC } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import Logo from '../Header/Logo'
import { FooterLinkData } from '@/data/siteContent'

const Footer: FC = () => {
  const footerLinks = FooterLinkData

  return (
    <footer className='pt-8'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 pb-10'>
          <div className='flex flex-col items-center'>
            <Logo sticky={true} />
            <p className='text-sm font-medium text-grey my-5 max-w-sm text-center'>
              A modern taco concept template built to showcase immersive dining
              experiences and chef-driven menus.
            </p>
            <div className='flex gap-4 items-center mt-6 justify-center'>
              <Link
                href='#'
                aria-label='Visit social profile'
                className='group bg-white hover:bg-primary rounded-full shadow-xl p-3 transition-colors'>
                <Icon
                  icon='fa6-brands:facebook-f'
                  width='16'
                  height='16'
                  className='group-hover:text-white text-black transition-colors'
                />
              </Link>
              <Link
                href='#'
                aria-label='Visit social profile'
                className='group bg-white hover:bg-primary rounded-full shadow-xl p-3 transition-colors'>
                <Icon
                  icon='fa6-brands:instagram'
                  width='16'
                  height='16'
                  className='group-hover:text-white text-black transition-colors'
                />
              </Link>
              <Link
                href='#'
                aria-label='Visit social profile'
                className='group bg-white hover:bg-primary rounded-full shadow-xl p-3 transition-colors'>
                <Icon
                  icon='fa6-brands:x-twitter'
                  width='16'
                  height='16'
                  className='group-hover:text-white text-black transition-colors'
                />
              </Link>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <h3 className='text-black text-xl font-semibold mb-6 text-center'>Contact Us</h3>
            <div className='flex flex-col gap-6 items-center'>
              <div className='flex items-center gap-3'>
                <Icon
                  icon='solar:point-on-map-perspective-bold'
                  className='text-primary text-2xl flex-shrink-0'
                />
                <p className='text-black text-base leading-relaxed text-center'>
                  Your Street Address, City, Country
                </p>
              </div>
              <Link href='tel:+10000000000' className='flex items-center gap-3 group'>
                <Icon
                  icon='solar:phone-bold'
                  className='text-primary text-2xl flex-shrink-0'
                />
                <p className='text-black/60 group-hover:text-black text-base transition-colors text-center'>
                  +1 (000) 000-0000
                </p>
              </Link>
              <Link href='mailto:hello@example.com' className='flex items-center gap-3 group'>
                <Icon
                  icon='solar:mailbox-bold'
                  className='text-primary text-2xl flex-shrink-0'
                />
                <p className='text-black/60 group-hover:text-black text-base transition-colors text-center'>
                  hello@example.com
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className='border-t border-grey/15 py-5 flex flex-col sm:flex-row justify-between sm:items-center gap-5'>
          <p className='text-sm text-deep/70'>
            © {new Date().getFullYear()} Freddys Tacos Template. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
