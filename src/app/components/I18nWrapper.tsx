'use client'

import { useEffect, useState } from 'react'
import { I18nProvider, useI18n } from '@/i18n/client'
import { Locale, defaultLocale } from '@/i18n/config'

function LocaleUpdater() {
  const { locale } = useI18n()

  useEffect(() => {
    // Update HTML lang attribute when locale changes
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale
    }
  }, [locale])

  return null
}

export default function I18nWrapper({ children }: { children: React.ReactNode }) {
  const [initialLocale, setInitialLocale] = useState<Locale>(defaultLocale)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('locale') as Locale
      if (savedLocale && (savedLocale === 'en' || savedLocale === 'es')) {
        setInitialLocale(savedLocale)
      }
      setMounted(true)
    } else {
      setMounted(true)
    }
  }, [])

  // Always render the provider with initial locale
  // The provider will handle all locale updates internally
  return (
    <I18nProvider initialLocale={initialLocale}>
      <LocaleUpdater />
      {children}
    </I18nProvider>
  )
}

