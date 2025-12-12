'use client'
import Image from 'next/image'
import { GalleryImagesData } from '@/data/siteContent'

const SimpleGallery = () => {
  return (
    <section id='gallery' className='scroll-mt-20'>
      <div className='container'>
        <div className='text-center mb-12'>
          <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>
            Gallery
          </p>
          <h2 className='mb-4'>Our Food Gallery</h2>
          <p className='text-deep/70 max-w-2xl mx-auto'>
            Discover our culinary creations through our gallery
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {GalleryImagesData.map((item, index) => (
            <div
              key={index}
              className='relative overflow-hidden rounded-3xl aspect-square group'>
              <Image
                src={item.src}
                alt={item.name}
                fill
                className='object-cover transition-transform duration-300 group-hover:scale-110'
                sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SimpleGallery

