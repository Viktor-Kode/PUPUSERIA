'use client'

import Image from 'next/image'

const Cook = () => {
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
              About Us
            </p>
            <h2 className='lg:text-start text-center'>
              Crafted with Passion, Served with Pride
            </h2>
            <p className='text-deep/70 text-lg font-normal my-5 text-start'>
              At Freddys Tacos, each tortilla is pressed to order and every
              smoky bite nods to the mercados that inspired us. We char, braise,
              and slow-roast with intention—bringing the soul of Mexican street
              food into an intimate, modern cantina.
            </p>
            <p className='text-deep/70 text-lg font-normal mb-10 text-start'>
              Whether you're celebrating a special occasion or enjoying a casual
              evening out, our welcoming ambiance and flavorful creations
              promise something truly special for every guest.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cook
