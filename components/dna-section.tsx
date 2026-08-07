'use client'

import { Heart, Brain, Bot } from "lucide-react"

const traits = [
  {
    icon: Heart,
    title: "L'humain d'abord",
    description: "17 ans de terrain, face-à-face clients. La confiance se construit par le contact, pas par un algorithme.",
  },
  {
    icon: Brain,
    title: "Rigueur opérationnelle",
    description: "Process structurés, 5S documentaire, zéro dossier perdu. La méthode au service de l'efficacité.",
  },
  {
    icon: Bot,
    title: "L'IA en renfort",
    description: "Relances intelligentes, scoring leads, reporting auto-généré. L'IA fait le répétitif, Laury fait le relationnel.",
  },
]

export function DNASection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Mon ADN</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">L'IA fait le travail répétitif. Laury fait le travail relationnel.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {traits.map((trait) => (
            <div key={trait.title} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <trait.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{trait.title}</h3>
              <p className="text-muted-foreground">{trait.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
