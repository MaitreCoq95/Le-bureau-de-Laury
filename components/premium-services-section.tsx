"use client"

import { Bot, TrendingUp, Shield, Sparkles } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from "@/lib/i18n/useTranslation"

export function PremiumServicesSection() {
  const { t } = useTranslation()

  const premiumServices = [
    {
      icon: Bot,
      title: t.premiumServices.services[0].title,
      description: t.premiumServices.services[0].description,
      keyPoints: t.premiumServices.services[0].keyPoints,
      badge: t.premiumServices.services[0].badge,
      color: "from-[#0A2540] to-[#1E4976]", // Blue gradient
      borderColor: "border-[#2E5C8A]",
      iconBg: "bg-[#FFB020]/20",
      iconColor: "text-[#FFB020]",
    },
    {
      icon: TrendingUp,
      title: t.premiumServices.services[1].title,
      description: t.premiumServices.services[1].description,
      techStack: t.premiumServices.services[1].techStack,
      deliverables: t.premiumServices.services[1].deliverables,
      badge: t.premiumServices.services[1].badge,
      color: "from-[#2D1B3D] to-[#4A2C5E]", // Purple gradient
      borderColor: "border-[#6B4C7A]",
      iconBg: "bg-[#FFB020]/20",
      iconColor: "text-[#FFB020]",
    },
    {
      icon: Shield,
      title: t.premiumServices.services[2].title,
      description: t.premiumServices.services[2].description,
      diagnosticContent: t.premiumServices.services[2].diagnosticContent,
      badge: t.premiumServices.services[2].badge,
      color: "from-[#0A3D2C] to-[#1A5C47]", // Green gradient
      borderColor: "border-[#2A7C5F]",
      iconBg: "bg-[#FFB020]/20",
      iconColor: "text-[#FFB020]",
    },
  ]

  return (
    <section id="premium-services" className="py-20 bg-[#0A1B2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {t.premiumServices.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.premiumServices.title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t.premiumServices.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {premiumServices.map((service, index) => (
            <Card 
              key={service.title} 
              className={`bg-gradient-to-br ${service.color} ${service.borderColor} border-2 hover:border-primary/50 transition-all`}
            >
              <CardHeader>
                <div className={`w-14 h-14 rounded-lg ${service.iconBg} flex items-center justify-center mb-4`}>
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>
                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                
                {service.keyPoints && (
                  <ul className="space-y-2">
                    {service.keyPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-primary mt-0.5">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                {service.techStack && (
                  <div>
                    <p className="text-xs font-medium text-primary mb-2">Tech Stack :</p>
                    <div className="flex flex-wrap gap-2">
                      {service.techStack.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-[#FFB020]/20 text-[#FFB020] rounded-md text-xs font-medium border border-[#FFB020]/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {service.deliverables && (
                  <div>
                    <p className="text-xs font-medium text-primary mb-2">Livrables :</p>
                    <ul className="space-y-1">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                          <span className="text-primary">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.diagnosticContent && (
                  <ul className="space-y-1">
                    {service.diagnosticContent.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                        <span className="text-primary">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-[#FFB020] italic font-medium">{service.badge}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Differentiation Statement */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 max-w-3xl mx-auto">
            {t.premiumServices.differentiation.text}
          </p>
          <p className="text-primary font-semibold mt-2">{t.premiumServices.differentiation.tagline}</p>
        </div>
      </div>
    </section>
  )
}
