'use client'

import { Quote } from "lucide-react"
import { useTranslation } from "@/lib/i18n/useTranslation"

export function TestimonialsSection() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.testimonials.title}</h2>
          <p className="text-muted-foreground">{t.testimonials.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.testimonials.items.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6 relative">
              <Quote className="w-8 h-8 text-primary/30 absolute top-4 right-4" />
              <p className="text-foreground mb-4 italic leading-relaxed">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
