'use client'

import { Heart, Brain, Bot } from "lucide-react"
import { useTranslation } from "@/lib/i18n/useTranslation"

const traitIcons = [Heart, Brain, Bot]

export function DNASection() {
  const { t } = useTranslation()

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.dna.title}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{t.dna.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.dna.traits.map((trait, index) => {
            const Icon = traitIcons[index] ?? Heart
            return (
              <div key={trait.title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{trait.title}</h3>
                <p className="text-muted-foreground">{trait.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
