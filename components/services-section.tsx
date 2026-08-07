'use client'

import { Briefcase, TrendingUp, DollarSign, Bot, Database, Zap } from "lucide-react"
import { useTranslation } from "@/lib/i18n/useTranslation"

export function ServicesSection() {
  const { t } = useTranslation()

  const icons = [Briefcase, TrendingUp, DollarSign, Bot, Database, Zap]

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.services.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.services.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.list.map((service, index) => {
            const Icon = icons[index]
            return (
              <div
                key={service.title}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-primary font-medium">Deliverables:</span>
                    <p className="text-muted-foreground">{service.deliverables}</p>
                  </div>
                  <div>
                    <span className="text-primary font-medium">Metrics:</span>
                    <p className="text-muted-foreground">{service.metrics}</p>
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
