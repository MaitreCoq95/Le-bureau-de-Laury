'use client'

import { Search, Map, FileCheck, BarChart3, Award } from "lucide-react"
import { useTranslation } from "@/lib/i18n/useTranslation"

export function MethodSection() {
  const { t } = useTranslation()

  const icons = [Search, Map, FileCheck, BarChart3, Award]

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.method.steps.map((step, index) => {
            const Icon = icons[index]
            return (
              <div
                key={index}
                className="relative p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-primary mb-2">0{index + 1}</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
