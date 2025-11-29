'use client'

import { createContext, useContext, useState, useEffect, ReactNode, useMemo, useCallback } from 'react'
import { Locale } from './config'

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string, params?: Record<string, any>) => string
  messages: Record<string, any>
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

// Preload messages for both locales
const messageCache: Record<Locale, Record<string, any> | null> = {
  en: null,
  es: null,
}

export function I18nProvider({ children, initialLocale = 'en' }: { children: ReactNode; initialLocale?: Locale }) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale as Locale)
  const [messages, setMessages] = useState<Record<string, any>>({})
  const [isLoading, setIsLoading] = useState(true)

  // Only sync with initialLocale on mount, not on every change
  useEffect(() => {
    setLocaleState(initialLocale as Locale)
  }, []) // Only run on mount

  // Preload both language messages on mount
  useEffect(() => {
    const loadMessages = async () => {
      // Load current locale first
      if (!messageCache[locale]) {
        try {
          const mod = await import(`../messages/${locale}.json`)
          messageCache[locale] = mod.default
          setMessages(mod.default)
        } catch (err) {
          console.error(`Failed to load messages for locale ${locale}:`, err)
        }
      } else {
        setMessages(messageCache[locale]!)
      }

      // Preload the other locale in the background
      const otherLocale: Locale = locale === 'en' ? 'es' : 'en'
      if (!messageCache[otherLocale]) {
        import(`../messages/${otherLocale}.json`)
          .then((mod) => {
            messageCache[otherLocale] = mod.default
          })
          .catch((err) => {
            console.error(`Failed to preload messages for locale ${otherLocale}:`, err)
          })
      }

      setIsLoading(false)
    }

    loadMessages()
  }, [locale])

  useEffect(() => {
    // Save locale preference to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', locale)
    }
  }, [locale])

  const setLocale = useCallback((newLocale: Locale) => {
    if (newLocale === locale) return
    
    setLocaleState(newLocale)
    
    // If messages are cached, use them immediately
    if (messageCache[newLocale]) {
      setMessages(messageCache[newLocale]!)
    }
  }, [locale])

  const t = useCallback((key: string, params?: Record<string, any>): string => {
    const keys = key.split('.')
    let value: any = messages

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key // Return key if translation not found
      }
    }

    if (typeof value !== 'string') {
      return key
    }

    // Replace parameters in the string
    if (params) {
      return value.replace(/\{(\w+)\}/g, (match, paramKey) => {
        return params[paramKey] !== undefined ? String(params[paramKey]) : match
      })
    }

    return value
  }, [messages])

  const contextValue = useMemo(() => ({
    locale,
    setLocale,
    t,
    messages,
  }), [locale, setLocale, t, messages])

  return (
    <I18nContext.Provider value={contextValue}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}

