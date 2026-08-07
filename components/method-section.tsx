'use client'

import { Phone, FileText, Rocket } from "lucide-react"
import { useTranslation } from "@/lib/i18n/useTranslation"

export function MethodSection() {
  const { t } = useTranslation()

  const icons = [Phone, FileText, Rocket]

  return (
    <section id="method" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {t.method.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.method.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.method.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.method.steps.map((step, index) => {
            const Icon = icons[index]
            return (
              <div
                key={index}
                className="relative p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all group text-center"
              >
                <div className="text-5xl font-bold text-primary/20 mb-4">0{index + 1}</div>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
