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
        <div className='grid grid-cols-1 sm:grid-cols-6 lg:gap-20 md:gap-24 sm:gap-12 gap-12 pb-10'>
          <div className='col-span-2'>
            <Logo />
            <p className='text-sm font-medium text-grey my-5 max-w-70%'>
              A modern taco concept template built to showcase immersive dining
              experiences and chef-driven menus.
            </p>
            <div className='flex gap-6 items-center'>
              <Link
                href='#'
                aria-label='Visit social profile'
                className='group bg-white hover:bg-primary rounded-full shadow-xl p-3'>
                <Icon
                  icon='fa6-brands:facebook-f'
                  width='16'
                  height='16'
                  className=' group-hover:text-white text-black'
                />
              </Link>
              <Link
                href='#'
                aria-label='Visit social profile'
                className='group bg-white hover:bg-primary rounded-full shadow-xl p-3'>
                <Icon
                  icon='fa6-brands:instagram'
                  width='16'
                  height='16'
                  className=' group-hover:text-white text-black'
                />
              </Link>
              <Link
                href='#'
                aria-label='Visit social profile'
                className='group bg-white hover:bg-primary rounded-full shadow-xl p-3'>
                <Icon
                  icon='fa6-brands:x-twitter'
                  width='16'
                  height='16'
                  className=' group-hover:text-white text-black'
                />
              </Link>
            </div>
          </div>
          <div className='col-span-2'>
            <div className='flex gap-20'>
              {footerLinks.map((product, i) => (
                <div key={i} className='group relative col-span-2'>
                  <p className='text-black text-xl font-semibold mb-9'>
                    {product.section}
                  </p>
                  <ul>
                    {product.links.map((item, i) => (
                      <li key={i} className='mb-3'>
                        <Link
                          href={item.href}
                          className='text-black/60 hover:text-black text-base font-normal mb-6'>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className='col-span-2 sm:col-span-6 md:col-span-2'>
            <div className='flex flex-col gap-5'>
              <div className='flex'>
                <Icon
                  icon='solar:point-on-map-perspective-bold'
                  className='text-primary text-3xl lg:text-2xl inline-block me-2'
                />
                <p className='text-black text-base'>
                  Your Street Address, City, Country
                </p>
              </div>
              <Link href='tel:+10000000000'>
                <div className='flex'>
                  <Icon
                    icon='solar:phone-bold'
                    className='text-primary text-3xl lg:text-2xl inline-block me-2'
                  />
                  <p className='text-black/60 hover:text-black text-base'>
                    +1 (000) 000-0000
                  </p>
                </div>
              </Link>
              <Link href='mailto:hello@example.com'>
                <div className='flex'>
                  <Icon
                    icon='solar:mailbox-bold'
                    className='text-primary text-3xl lg:text-2xl inline-block me-2'
                  />
                  <p className='text-black/60 hover:text-black text-base'>
                    hello@example.com
                  </p>
                </div>
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
