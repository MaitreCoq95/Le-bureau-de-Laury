'use client'

import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n/useTranslation"

export function HeroSection() {
  const { t } = useTranslation()

  const badges = [
    "Excel Expert",
    "Power BI",
    "SAP",
    "Budgeting & Forecasting",
    "Cost Control",
    "Business Analysis",
    "Data Quality",
    "Financial Reporting"
  ]

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-primary font-medium">{t.hero.title}</p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              <span className="text-primary">{t.hero.name}</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              {t.hero.bio}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-foreground text-sm border border-border"
                >
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                  {badge}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href="#contact">
                  {t.hero.cta.primary}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative lg:pl-12">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-primary/5 rounded-2xl -z-10" />

              {/* Image container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-primary/30">
                <img
                  src="/nicolas-lemoine-profile.png"
                  alt="Nicolas Lemoine - Chief Performance & Finance Strategist"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">10+</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.hero.stats.experience}</p>
                    <p className="text-xs text-muted-foreground">Finance & Data</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.hero.stats.countries}</p>
                    <p className="text-xs text-muted-foreground">FR/BE/DE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
