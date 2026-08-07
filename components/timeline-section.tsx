"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Truck, Building2, TrendingUp, Plane, Factory, X, Lightbulb } from "lucide-react"

const timeline = [
  {
    period: "2017 – 2024",
    title: "Financial Controller France, Benelux, Germany",
    company: "Atradius",
    icon: TrendingUp,
    description:
      "Pilotage financier multi-pays : budgeting, forecasting, dashboards stratégiques COMEX/CODIR, cost control, variance analysis, data governance. Business Analyst sur projet digital paneuropéen > 50M€.",
    skills: [
      { name: "Budgeting & Forecasting", value: 95 },
      { name: "Cost Control", value: 90 },
      { name: "Variance Analysis", value: 95 },
      { name: "Dashboard Design", value: 90 },
      { name: "Data Governance", value: 85 },
    ],
    details: {
      missions: [
        "Préparation budgétaire et forecasting sur 3 zones géographiques",
        "Conception de dashboards stratégiques pour Comex/Codir",
        "Contrôle des coûts et optimisation des marges",
        "Mise en place de standards comptables & data governance",
        "Business Analyst sur projet digital > 50M€",
        "Chef de budget pour le programme digital Europe",
      ],
      outils: ["Power BI", "SAP", "Excel Expert", "Access", "Power Pivot"],
      resultats: "Standardisation financière 3 pays, pilotage budgétaire projet 50M€, réduction coûts opérationnels -8%",
    },
  },
  {
    period: "2017",
    title: "Bond Account Manager",
    company: "Atradius",
    icon: Shield,
    description: "Gestion de portefeuille IDF/NE, analyse de risques, reporting stratégique, relation clients corporate.",
    skills: [
      { name: "Analyse Risques", value: 85 },
      { name: "Gestion Portefeuille", value: 90 },
      { name: "Reporting Stratégique", value: 85 },
      { name: "Relation Client", value: 80 },
      { name: "Credit Management", value: 85 },
    ],
    details: {
      missions: [
        "Analyse de risques financiers",
        "Gestion de portefeuille clients IDF/NE",
        "Reporting stratégique mensuel",
      ],
      outils: ["Excel", "CRM", "Outils d'analyse risques"],
      resultats: "Optimisation du portefeuille, amélioration des processus de reporting",
    },
  },
  {
    period: "2014 – 2017",
    title: "Financial Analyst",
    company: "Barclays",
    icon: Building2,
    description: "Analyse financière, construction d'outils de pilotage, reporting mensuel, analyse coûts complets.",
    skills: [
      { name: "Analyse Financière", value: 90 },
      { name: "Modélisation Excel", value: 95 },
      { name: "Reporting Financier", value: 85 },
      { name: "Analyse Coûts", value: 85 },
      { name: "Tableaux de Bord", value: 90 },
    ],
    details: {
      missions: [
        "Construction d'outils financiers automatisés",
        "Analyse coûts complets",
        "Reporting mensuel direction",
        "Optimisation des processus financiers",
      ],
      outils: ["Excel VBA", "Access", "SAP", "Business Objects"],
      resultats: "Automatisation du reporting mensuel, gain de temps +40%, fiabilité accrue des données",
    },
  },
  {
    period: "2012 – 2014",
    title: "Contrôleur de Gestion",
    company: "LBMG Worklabs",
    icon: Factory,
    description: "Contrôle de gestion opérationnel, suivi budgétaire, analyse des écarts, tableaux de bord automatisés.",
    skills: [
      { name: "Contrôle de Gestion", value: 90 },
      { name: "Suivi Budgétaire", value: 90 },
      { name: "Analyse Écarts", value: 85 },
      { name: "Automatisation", value: 80 },
      { name: "KPIs Opérationnels", value: 85 },
    ],
    details: {
      missions: [
        "Suivi budgétaire mensuel",
        "Analyse des écarts et variance analysis",
        "Création de tableaux de bord automatisés",
        "Support décisionnel direction",
      ],
      outils: ["Excel", "Access", "ERP", "Tableaux de bord"],
      resultats: "Mise en place d'un système de pilotage complet, amélioration de la visibilité financière",
    },
  },
  {
    period: "2024 – Aujourd'hui",
    title: "Performance & Finance Strategist",
    company: "Vyxo Consulting - Partner",
    icon: Lightbulb,
    description:
      "Conseil en pilotage de la performance financière : structuration budgétaire, optimisation des coûts, mise en place d'outils de pilotage (Power BI, Excel), audit de la donnée financière, support COMEX/CODIR.",
    skills: [
      { name: "Consulting Finance", value: 95 },
      { name: "Structuration Budget", value: 95 },
      { name: "Optimisation Coûts", value: 90 },
      { name: "Digital Finance", value: 95 },
      { name: "Support COMEX", value: 90 },
    ],
    details: {
      missions: [
        "Pilotage de la performance financière",
        "Optimisation des coûts et rentabilité",
        "Mise en place d'outils de pilotage Power BI",
        "Audit et fiabilisation de la donnée financière",
        "Structuration budgétaire et forecasting",
        "Support décisionnel COMEX/CODIR",
      ],
      outils: ["Power BI", "Excel Expert", "Power Pivot", "SAP", "R Studio", "Qlikview"],
      resultats: "+12% fiabilité reporting, -8% coûts opérationnels, 3 pays harmonisés, 30+ dashboards déployés",
    },
  },
]

function RadarChart({ skills, isVisible }: { skills: { name: string; value: number }[]; isVisible: boolean }) {
  const size = 220 // Increased size to accommodate labels
  const center = size / 2
  const radius = 60 // Slightly smaller radius for label space
  const angleStep = (2 * Math.PI) / skills.length

  const points = skills.map((skill, i) => {
    const angle = i * angleStep - Math.PI / 2
    const r = (skill.value / 100) * radius
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
      labelX: center + (radius + 30) * Math.cos(angle),
      labelY: center + (radius + 30) * Math.sin(angle),
      name: skill.name,
      value: skill.value,
      angle: angle,
    }
  })

  const pathData = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z"

  // Grid circles
  const gridCircles = [0.25, 0.5, 0.75, 1].map((scale) => (
    <polygon
      key={scale}
      points={skills
        .map((_, i) => {
          const angle = i * angleStep - Math.PI / 2
          const r = scale * radius
          return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`
        })
        .join(" ")}
      fill="none"
      stroke="#6b7280"
      strokeOpacity={0.2}
    />
  ))

  // Grid lines
  const gridLines = skills.map((_, i) => {
    const angle = i * angleStep - Math.PI / 2
    return (
      <line
        key={i}
        x1={center}
        y1={center}
        x2={center + radius * Math.cos(angle)}
        y2={center + radius * Math.sin(angle)}
        stroke="#6b7280"
        strokeOpacity={0.2}
      />
    )
  })

  const primaryColor = "#d4a853"

  const getTextAnchor = (angle: number) => {
    const degrees = (angle * 180) / Math.PI
    if (degrees > -45 && degrees < 45) return "start"
    if (degrees > 135 || degrees < -135) return "end"
    return "middle"
  }

  return (
    <svg width={size} height={size} className="mx-auto">
      {gridCircles}
      {gridLines}
      {/* Data polygon - filled area */}
      <path
        d={pathData}
        fill={primaryColor}
        fillOpacity={isVisible ? 0.3 : 0}
        stroke={primaryColor}
        strokeWidth={2}
        strokeOpacity={isVisible ? 1 : 0}
        className="transition-all duration-700"
      />
      {/* Data points */}
      {points.map((point, i) => (
        <circle
          key={i}
          cx={point.x}
          cy={point.y}
          r={5}
          fill={primaryColor}
          opacity={isVisible ? 1 : 0}
          className="transition-all duration-500"
          style={{ transitionDelay: `${i * 100}ms` }}
        />
      ))}
      {points.map((point, i) => (
        <text
          key={`label-${i}`}
          x={point.labelX}
          y={point.labelY}
          textAnchor={getTextAnchor(point.angle)}
          dominantBaseline="middle"
          fill="#9ca3af"
          fontSize={9}
          fontWeight={500}
          opacity={isVisible ? 1 : 0}
          className="transition-opacity duration-500"
          style={{ transitionDelay: `${i * 100 + 300}ms` }}
        >
          {point.name.length > 12 ? point.name.substring(0, 12) + "..." : point.name}
        </text>
      ))}
    </svg>
  )
}

function HoverCard({
  item,
  isVisible,
  onClose,
}: {
  item: (typeof timeline)[0]
  isVisible: boolean
  onClose: () => void
}) {
  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40" onClick={onClose} />

      {/* Centered Modal Card */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] max-w-md bg-card border border-primary/30 rounded-2xl p-6 shadow-2xl shadow-primary/20 animate-in fade-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl pointer-events-none" />

        <div className="relative">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <span className="text-primary text-sm font-medium">{item.period}</span>
              <h4 className="font-bold text-foreground">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.company}</p>
            </div>
          </div>

          {/* Radar Chart */}
          <div className="mb-4">
            <RadarChart skills={item.skills} isVisible={isVisible} />
          </div>

          {/* Skills with progress bars */}
          <div className="grid grid-cols-1 gap-2 mb-4">
            {item.skills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">{skill.name}</span>
                  <span className="text-primary font-medium">{skill.value}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-700"
                    style={{ width: isVisible ? `${skill.value}%` : "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Details */}
          <div className="space-y-3 text-sm">
            <div>
              <span className="text-primary font-semibold">Missions :</span>
              <ul className="text-muted-foreground mt-1 space-y-1">
                {item.details.missions.map((m, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-primary font-semibold">Outils :</span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {item.details.outils.map((o, i) => (
                  <span key={i} className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
                    {o}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-3 border-t border-border">
              <span className="text-primary font-semibold">Résultats :</span>
              <p className="text-muted-foreground mt-1">{item.details.resultats}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export function TimelineSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Mon Parcours</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Plus de 10 ans d'expérience en Finance, Contrôle de Gestion et Pilotage de la Performance
          </p>
          <p className="text-sm text-primary mt-2">Cliquez sur une expérience pour voir le détail des compétences</p>
        </div>

        {selectedIndex !== null && (
          <HoverCard item={timeline[selectedIndex]} isVisible={true} onClose={() => setSelectedIndex(null)} />
        )}

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={item.period + item.title}
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
                {/* Content */}
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
                    <span className="text-primary font-semibold text-sm">{item.period}</span>
                    <h3
                      className={`text-xl font-bold mt-1 transition-all duration-300 ${
                        selectedIndex === index ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">{item.company}</p>
                    <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{item.description}</p>

                    {/* Mobile preview */}
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="grid grid-cols-2 gap-2">
                        {item.skills.slice(0, 4).map((skill, i) => (
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

                {/* Icon */}
                <div
                  className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-4 border-background transition-all duration-300 ${
                    selectedIndex === index ? "scale-125 shadow-lg shadow-primary/50" : "hover:scale-110"
                  }`}
                >
                  <item.icon className="w-4 h-4 text-primary-foreground" />
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
