'use client'

import { Truck, Search, Star, MessageSquare, BarChart3, UserPlus } from "lucide-react"
import { useTranslation } from "@/lib/i18n/useTranslation"

export function TransportSection() {
  const { t } = useTranslation()

  const icons = [Search, Star, MessageSquare, BarChart3, UserPlus]

  return (
    <section id="transport" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            {t.transport.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <Truck className="w-8 h-8 text-primary inline-block mr-3 -mt-1" />
            {t.transport.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.transport.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.transport.cards.map((card, index) => {
            const Icon = icons[index]
            return (
              <div
                key={card.title}
                className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
