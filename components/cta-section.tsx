'use client'

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n/useTranslation"

export function CTASection() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/20 to-accent/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.cta.title}</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t.cta.subtitle}
        </p>
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6" asChild>
          <a href="#">
            {t.cta.button}
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </Button>
        <p className="text-sm text-muted-foreground mt-4">Gratuit, sans engagement, 100% concret.</p>
      </div>
    </section>
  )
}
