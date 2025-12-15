import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Cook from '@/app/components/Home/Cook'
import InteractiveMenu from '@/app/components/Home/Menu'
import SimpleGallery from '@/app/components/Home/SimpleGallery'
import { Metadata } from 'next'
import ContactForm from './components/Contact/Form'
export const metadata: Metadata = {
  title: 'Pupusería Mi Bendición',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Cook />
      <InteractiveMenu />
      <SimpleGallery />
      <ContactForm />
    </main>
  )
}
