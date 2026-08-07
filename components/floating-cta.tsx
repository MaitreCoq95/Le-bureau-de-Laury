"use client"

import { useEffect, useState } from "react"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n/useTranslation"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button size="lg" className="rounded-full shadow-lg animate-bounce-slow" asChild>
        <a href="tel:+33600000000">
          <Phone className="mr-2 h-4 w-4" />
          {t.floatingCta.text}
        </a>
      </Button>
    </div>
  )
}
