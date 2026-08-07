'use client'

import { TrendingDown, TrendingUp, Rocket, BarChart3, CheckCircle2, Award } from "lucide-react"
import { useTranslation } from "@/lib/i18n/useTranslation"

export function ROISection() {
  const { t } = useTranslation()

  const icons = [TrendingDown, TrendingUp, CheckCircle2, BarChart3]

  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.roi.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.roi.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.roi.metrics.map((metric, index) => {
            const Icon = icons[index]
            return (
              <div
                key={metric.label}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all group text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-1">{metric.value}</div>
                <div className="text-foreground font-semibold mb-1">{metric.label}</div>
                <div className="text-sm text-muted-foreground">{metric.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
