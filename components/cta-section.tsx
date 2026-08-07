'use client'

import { Phone, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n/useTranslation"

export function CTASection() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-20 bg-primary/5 border-y border-primary/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.cta.title}</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t.cta.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href="tel:+33600000000">
              <Phone className="mr-2 h-4 w-4" />
              {t.cta.button}
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border text-foreground hover:bg-secondary bg-transparent"
            asChild
          >
            <a href="mailto:nicolas.lemoine@vyxoconsult.com">
              <Eye className="w-4 h-4 mr-2" />
              Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
