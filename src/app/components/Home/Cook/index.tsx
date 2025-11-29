'use client'

import Image from 'next/image'
import { useI18n } from '@/i18n/client'

const Cook = () => {
  const { t } = useI18n()

  return (
    <section className='relative bg-secondary' id='aboutus'>
      <div className='container px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5'>
          <div className='lg:col-span-6 flex lg:justify-start justify-center'>
            <Image
              src='/images/Cook/kitchen-primary.jpeg'
              alt='Chef preparing a dish in the kitchen'
              width={636}
              height={808}
            />
          </div>
          <div className='lg:col-span-6 flex flex-col justify-start items-center lg:items-start relative z-10'>
            <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase lg:text-start text-center'>
              {t('about.title')}
            </p>
            <h2 className='lg:text-start text-center'>
              {t('about.heading')}
            </h2>
            <p className='text-deep/70 text-lg font-normal my-5 text-start'>
              {t('about.paragraph1')}
            </p>
            <p className='text-deep/70 text-lg font-normal mb-10 text-start'>
              {t('about.paragraph2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cook
