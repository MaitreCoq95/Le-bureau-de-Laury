"use client"

import { useEffect, useRef, useState } from "react"
import { Users, Briefcase, Phone, Building2, Home, Megaphone, ShoppingBag, Fuel, X } from "lucide-react"
import { useTranslation } from "@/lib/i18n/useTranslation"

const timelineIcons = [Users, Briefcase, Phone, Building2, Home, Megaphone, ShoppingBag, Fuel]

const timelineSkills = [
  [
    { name: "Relation Client", value: 95 },
    { name: "Fidélisation", value: 90 },
    { name: "SAV & Litiges", value: 90 },
    { name: "Gestion Fournisseurs", value: 85 },
  ],
  [
    { name: "B2B Commercial", value: 90 },
    { name: "Facturation", value: 95 },
    { name: "Transport", value: 90 },
    { name: "Relances", value: 95 },
  ],
  [
    { name: "Fidélisation", value: 95 },
    { name: "CRM", value: 85 },
    { name: "Vente Directe", value: 85 },
    { name: "Réclamations", value: 90 },
  ],
  [
    { name: "Planification", value: 90 },
    { name: "Coordination", value: 85 },
    { name: "Appels", value: 90 },
    { name: "Organisation", value: 85 },
  ],
  [
    { name: "Accueil", value: 85 },
    { name: "Dossiers Clients", value: 80 },
    { name: "RDV", value: 85 },
    { name: "Qualification", value: 80 },
  ],
  [
    { name: "Prospection Terrain", value: 95 },
    { name: "Vente Directe", value: 90 },
    { name: "Prospection Tel.", value: 90 },
    { name: "Négociation", value: 85 },
  ],
  [
    { name: "Management", value: 85 },
    { name: "Commerce", value: 90 },
    { name: "Fidélisation", value: 90 },
    { name: "Litiges", value: 85 },
  ],
  [
    { name: "Management", value: 80 },
    { name: "Relation Client", value: 85 },
    { name: "Stocks", value: 80 },
    { name: "Encaissement", value: 85 },
  ],
]

const periods = [
  "2024 – Aujourd'hui",
  "2023 – 2024",
  "2021 – 2023",
  "2019 – 2021",
  "2019",
  "2017 – 2018",
  "2010 – 2014",
  "2007 – 2008",
]

function HoverCard({
  job,
  skills,
  period,
  icon: Icon,
  isVisible,
  onClose,
}: {
  job: { title: string; company: string; location: string; description: string; achievements: string[] }
  skills: { name: string; value: number }[]
  period: string
  icon: React.ComponentType<{ className?: string }>
  isVisible: boolean
  onClose: () => void
}) {
  if (!isVisible) return null

  return (
    <>
      <div className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40" onClick={onClose} />
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] max-w-md bg-card border border-primary/30 rounded-2xl p-6 shadow-2xl shadow-primary/20 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl pointer-events-none" />

        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <span className="text-primary text-sm font-medium">{period}</span>
              <h4 className="font-bold text-foreground">{job.title}</h4>
              <p className="text-sm text-muted-foreground">{job.company}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 mb-4">
            {skills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">{skill.name}</span>
                  <span className="text-primary font-medium">{skill.value}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-700"
                    style={{ width: `${skill.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3 text-sm">
            <div>
              <span className="text-primary font-semibold">Missions :</span>
              <ul className="text-muted-foreground mt-1 space-y-1">
                {job.achievements.map((m, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-3 border-t border-border">
              <span className="text-primary font-semibold">Description :</span>
              <p className="text-muted-foreground mt-1">{job.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export function TimelineSection() {
  const { t } = useTranslation()
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null)
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [])

  return (
    <section id="timeline" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.timeline.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.timeline.subtitle}
          </p>
          <p className="text-sm text-primary mt-2">Cliquez sur une expérience pour voir le détail des compétences</p>
        </div>

        {selectedIndex !== null && (
          <HoverCard
            job={t.timeline.jobs[selectedIndex]}
            skills={timelineSkills[selectedIndex]}
            period={periods[selectedIndex]}
            icon={timelineIcons[selectedIndex]}
            isVisible={true}
            onClose={() => setSelectedIndex(null)}
          />
        )}

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20" />

          <div className="space-y-12">
            {t.timeline.jobs.map((item, index) => {
              const Icon = timelineIcons[index]
              return (
                <div
                  key={periods[index] + item.title}
                  ref={(el) => {
                    itemRefs.current[index] = el
                  }}
                  data-index={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`relative flex flex-col md:flex-row gap-8 cursor-pointer ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } ${
                    visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  } transition-all duration-700`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`relative flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"} pl-12 md:pl-0`}
                  >
                    <div
                      className={`bg-card border border-border rounded-xl p-6 transition-all duration-300 ${
                        selectedIndex === index
                          ? "border-primary shadow-lg shadow-primary/20 scale-[1.02]"
                          : "hover:border-primary/50 hover:shadow-md hover:shadow-primary/10"
                      }`}
                    >
                      <span className="text-primary font-semibold text-sm">{periods[index]}</span>
                      <h3
                        className={`text-xl font-bold mt-1 transition-all duration-300 ${
                          selectedIndex === index ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">{item.company}</p>
                      <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{item.description}</p>

                      <div className="mt-4 pt-4 border-t border-border">
                        <div className="grid grid-cols-2 gap-2">
                          {timelineSkills[index].slice(0, 4).map((skill, i) => (
                            <div key={i} className="text-xs">
                              <div className="flex justify-between mb-1">
                                <span className="text-muted-foreground truncate">{skill.name}</span>
                                <span className="text-primary">{skill.value}%</span>
                              </div>
                              <div className="h-1 bg-muted rounded-full">
                                <div className="h-full bg-primary rounded-full" style={{ width: `${skill.value}%` }} />
                              </div>
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-primary/70 mt-2 text-center">Cliquez pour voir plus</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-4 border-background transition-all duration-300 ${
                      selectedIndex === index ? "scale-125 shadow-lg shadow-primary/50" : "hover:scale-110"
                    }`}
                  >
                    <Icon className="w-4 h-4 text-primary-foreground" />
                  </div>

                  <div className="hidden md:block flex-1" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
