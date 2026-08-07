'use client'

import { ArrowRight, X, Check } from "lucide-react"
import { useTranslation } from "@/lib/i18n/useTranslation"

export function BeforeAfterSection() {
  const { t } = useTranslation()

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.beforeAfter.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.beforeAfter.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-destructive flex items-center gap-2">
                <X className="w-5 h-5" />
                {t.beforeAfter.before}
              </h3>
              {t.beforeAfter.comparisons.map((item) => (
                <div
                  key={item.before}
                  className="flex items-center gap-3 p-4 bg-destructive/10 rounded-lg border border-destructive/20"
                >
                  <X className="w-4 h-4 text-destructive shrink-0" />
                  <span className="text-foreground">{item.before}</span>
                </div>
              ))}
            </div>

            {/* After */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                <Check className="w-5 h-5" />
                {t.beforeAfter.after}
              </h3>
              {t.beforeAfter.comparisons.map((item) => (
                <div
                  key={item.after}
                  className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg border border-primary/20"
                >
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-foreground">{item.after}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow in the middle for desktop */}
          <div className="hidden md:flex justify-center -mt-[280px] mb-[220px]">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
