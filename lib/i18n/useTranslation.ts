import { useLanguageContext } from './LanguageContext'
import { translations } from './translations'

export function useTranslation() {
  const { language } = useLanguageContext()
  const t = translations[language]

  return { t, language }
}
