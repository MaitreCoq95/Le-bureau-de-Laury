'use client'

import { useTranslation } from "@/lib/i18n/useTranslation"

export function SkillsSection() {
  const { t } = useTranslation()

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.skills.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.skills.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.skills.categories.map((category) => (
            <div key={category.title} className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold text-primary mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-secondary rounded-full text-sm text-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
