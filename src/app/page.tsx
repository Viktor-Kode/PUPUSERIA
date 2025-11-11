import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Cook from '@/app/components/Home/Cook'
import InteractiveMenu from '@/app/components/Home/Menu'
import { Metadata } from 'next'
import ContactForm from './components/Contact/Form'
export const metadata: Metadata = {
  title: 'Freddys Tacos',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Cook />
      <InteractiveMenu />
      <ContactForm />
    </main>
  )
}
