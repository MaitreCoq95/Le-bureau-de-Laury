'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Language } from './translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
}

const STORAGE_KEY = 'language'

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

function isLanguage(value: string | null): value is Language {
  return value === 'fr' || value === 'en'
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr')

  // Lecture de la préférence persistée. Le rendu serveur ne connaît pas
  // localStorage : cette synchronisation ne peut avoir lieu qu'après montage.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      if (isLanguage(saved)) {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- hydratation depuis un store externe
        setLanguageState(saved)
      }
    } catch (error) {
      console.warn('[LanguageProvider] localStorage unavailable:', error)
    }
  }, [])

  // <html lang> doit suivre la langue affichée (SEO, lecteurs d'écran).
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch (error) {
      console.warn('[LanguageProvider] could not persist language:', error)
    }
  }

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr')
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguageContext() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageProvider')
  }
  return context
}
