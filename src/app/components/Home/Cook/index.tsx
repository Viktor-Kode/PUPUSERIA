'use client'

import Image from 'next/image'

const Cook = () => {
  return (
    <section className='relative bg-secondary' id='aboutus'>
      <div className='container px-4'>
        <div className='absolute right-0 bottom-[-18%] xl:block hidden'>
          <Image
            src='/images/Cook/closeup.jpeg'
            alt='closeup of plated dish'
            width={463}
            height={622}
          />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5'>
          <div className='lg:col-span-6 flex lg:justify-start justify-center'>
            <Image
              src='/images/Cook/kitchen-primary.jpeg'
              alt='Chef preparing a dish in the kitchen'
              width={636}
              height={808}
            />
          </div>
          <div className='lg:col-span-6 flex flex-col justify-center items-center lg:items-start'>
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
              Whether you’re celebrating a special occasion or enjoying a casual
              evening out, our welcoming ambiance and flavorful creations
              promise something truly special for every guest.
            </p>
            <button className='text-xl font-medium rounded-full text-white py-3 px-8 duration-300 bg-primary w-fit border border-primary hover:bg-transparent hover:text-primary hover:cursor-pointer'>
              Learn more
            </button>
            <div className='mt-8 flex items-center gap-4 bg-white/70 backdrop-blur-sm rounded-3xl p-4 shadow-lg'>
              <Image
                src='/images/Cook/kitchen-secondary.jpeg'
                alt='Freddys Tacos team preparing desserts'
                width={120}
                height={80}
                className='rounded-2xl object-cover'
              />
              <p className='text-black/70 text-base font-medium'>
                Every service is led by chefs crafting immersive tasting menus in
                our open kitchen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cook
