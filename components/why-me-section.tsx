'use client'

import { Globe, Users, Cpu, Rocket } from "lucide-react"
import { useTranslation } from "@/lib/i18n/useTranslation"

export function WhyMeSection() {
  const { t } = useTranslation()

  const icons = [Globe, Users, Cpu, Rocket]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.whyMe.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.whyMe.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whyMe.reasons.map((reason, index) => {
            const Icon = icons[index]
            return (
              <div
                key={reason.title}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
