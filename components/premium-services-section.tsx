"use client"

import { Sparkles, TrendingUp, Building2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from "@/lib/i18n/useTranslation"

export function PremiumServicesSection() {
  const { t } = useTranslation()

  const premiumServices = [
    {
      icon: Sparkles,
      title: t.premiumServices.services[0].title,
      description: t.premiumServices.services[0].description,
      keyPoints: t.premiumServices.services[0].keyPoints,
      badge: t.premiumServices.services[0].badge,
    },
    {
      icon: TrendingUp,
      title: t.premiumServices.services[1].title,
      description: t.premiumServices.services[1].description,
      keyPoints: t.premiumServices.services[1].keyPoints,
      badge: t.premiumServices.services[1].badge,
    },
    {
      icon: Building2,
      title: t.premiumServices.services[2].title,
      description: t.premiumServices.services[2].description,
      keyPoints: t.premiumServices.services[2].keyPoints,
      badge: t.premiumServices.services[2].badge,
    },
  ]

  return (
    <section id="premium-services" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            {t.premiumServices.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.premiumServices.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.premiumServices.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {premiumServices.map((service) => (
            <Card
              key={service.title}
              className="bg-card border-2 border-border hover:border-primary/50 transition-all"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>

                {service.keyPoints && (
                  <ul className="space-y-2">
                    {service.keyPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5 font-bold">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-accent italic font-medium">{service.badge}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Differentiation Statement */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {t.premiumServices.differentiation.text}
          </p>
          <p className="text-primary font-semibold mt-2">{t.premiumServices.differentiation.tagline}</p>
        </div>
      </div>
    </section>
  )
}
