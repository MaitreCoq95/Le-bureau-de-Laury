"use client"

import { useState, useMemo, useTransition } from "react"
import {
  ClipboardCheck,
  ArrowRight,
  ArrowLeft,
  TrendingUp,
  Clock,
  Euro,
  Sparkles,
  Building2,
  Wrench,
  ShoppingBag,
  Truck,
  Briefcase,
  Users,
  FileText,
  Phone,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Bot,
  Send,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { submitLead } from "@/app/actions/submit-lead"
import { Card, CardContent } from "@/components/ui/card"

/* ────────────────────────────────────────
   Types
   ──────────────────────────────────────── */

interface FormData {
  // Step 1 — Profil
  sector: string
  employees: string
  revenue: string
  // Step 2 — Temps perdu
  hoursAdmin: number
  hoursCommercial: number
  hoursRelationClient: number
  hourlyRate: number
  // Step 3 — Pain points
  painPoints: string[]
  // Step 4 — Résultats
  email: string
  name: string
}

const defaultForm: FormData = {
  sector: "",
  employees: "",
  revenue: "",
  hoursAdmin: 0,
  hoursCommercial: 0,
  hoursRelationClient: 0,
  hourlyRate: 35,
  painPoints: [],
  email: "",
  name: "",
}

/* ────────────────────────────────────────
   Constants
   ──────────────────────────────────────── */

const sectors = [
  { id: "artisan", label: "Artisan / BTP", icon: Wrench },
  { id: "commerce", label: "Commerce / Retail", icon: ShoppingBag },
  { id: "transport", label: "Transport / Logistique", icon: Truck },
  { id: "services", label: "Services / Consulting", icon: Briefcase },
  { id: "autre", label: "Autre secteur", icon: Building2 },
]

const employeeRanges = [
  { id: "solo", label: "Solo / Indépendant" },
  { id: "2-5", label: "2 à 5 personnes" },
  { id: "6-10", label: "6 à 10 personnes" },
  { id: "10+", label: "Plus de 10" },
]

const revenueRanges = [
  { id: "<50k", label: "Moins de 50 k€" },
  { id: "50-150k", label: "50 – 150 k€" },
  { id: "150-500k", label: "150 – 500 k€" },
  { id: "500k+", label: "Plus de 500 k€" },
]

const painPointsList = [
  {
    id: "devis",
    label: "Mes devis/factures traînent",
    icon: FileText,
    category: "admin",
  },
  {
    id: "relances",
    label: "Je ne relance pas les impayés",
    icon: Euro,
    category: "admin",
  },
  {
    id: "crm",
    label: "Pas de CRM, tout est dans ma tête",
    icon: Users,
    category: "commercial",
  },
  {
    id: "prospection",
    label: "Je n'ai pas le temps de prospecter",
    icon: Phone,
    category: "commercial",
  },
  {
    id: "fidélisation",
    label: "Je perds des clients sans comprendre pourquoi",
    icon: AlertTriangle,
    category: "relation",
  },
  {
    id: "planning",
    label: "Mon planning est ingérable",
    icon: Clock,
    category: "admin",
  },
  {
    id: "sav",
    label: "Les litiges/SAV me prennent la tête",
    icon: AlertTriangle,
    category: "relation",
  },
  {
    id: "reporting",
    label: "Je n'ai aucune visibilité sur mes chiffres",
    icon: BarChart3,
    category: "commercial",
  },
]

/* ────────────────────────────────────────
   ROI Calculation Logic
   ──────────────────────────────────────── */

function calculateROI(form: FormData) {
  const totalHoursLost =
    form.hoursAdmin + form.hoursCommercial + form.hoursRelationClient
  const costPerMonth = totalHoursLost * 4.33 * form.hourlyRate // monthly

  // Time saved with Laury (conservative estimates)
  const adminSavingsPercent = 0.6 // -60% temps admin
  const commercialSavingsPercent = 0.4 // -40% temps commercial
  const relationSavingsPercent = 0.35 // -35% temps relation client

  const hoursSavedAdmin = form.hoursAdmin * adminSavingsPercent
  const hoursSavedCommercial = form.hoursCommercial * commercialSavingsPercent
  const hoursSavedRelation =
    form.hoursRelationClient * relationSavingsPercent

  const totalHoursSaved =
    hoursSavedAdmin + hoursSavedCommercial + hoursSavedRelation
  const monthlySavings = totalHoursSaved * 4.33 * form.hourlyRate
  const yearlySavings = monthlySavings * 12

  // Additional revenue from better commercial ops
  const additionalRevenue =
    form.hoursCommercial > 0
      ? form.hourlyRate * form.hoursCommercial * 4.33 * 0.2 * 12 // 20% more conversion
      : 0

  // Payment recovery from better follow-up
  const recoveredPayments =
    form.painPoints.includes("relances")
      ? (revenueToNumber(form.revenue) * 0.08) // 8% of revenue typically unpaid
      : 0

  return {
    totalHoursLost,
    costPerMonth: Math.round(costPerMonth),
    totalHoursSaved: Math.round(totalHoursSaved * 10) / 10,
    monthlySavings: Math.round(monthlySavings),
    yearlySavings: Math.round(yearlySavings),
    additionalRevenue: Math.round(additionalRevenue),
    recoveredPayments: Math.round(recoveredPayments),
    totalROI: Math.round(yearlySavings + additionalRevenue + recoveredPayments),
    hoursSavedAdmin: Math.round(hoursSavedAdmin * 10) / 10,
    hoursSavedCommercial: Math.round(hoursSavedCommercial * 10) / 10,
    hoursSavedRelation: Math.round(hoursSavedRelation * 10) / 10,
  }
}

function revenueToNumber(rev: string): number {
  switch (rev) {
    case "<50k": return 35000
    case "50-150k": return 100000
    case "150-500k": return 300000
    case "500k+": return 600000
    default: return 50000
  }
}

function recommendPack(form: FormData) {
  const adminPains = form.painPoints.filter(
    (p) =>
      painPointsList.find((pp) => pp.id === p)?.category === "admin"
  ).length
  const commercialPains = form.painPoints.filter(
    (p) =>
      painPointsList.find((pp) => pp.id === p)?.category === "commercial"
  ).length
  const relationPains = form.painPoints.filter(
    (p) =>
      painPointsList.find((pp) => pp.id === p)?.category === "relation"
  ).length

  const totalHours =
    form.hoursAdmin + form.hoursCommercial + form.hoursRelationClient

  // Bureau Externalisé Complet — heavy needs across all areas
  if (
    totalHours >= 15 ||
    (adminPains >= 2 && commercialPains >= 1 && relationPains >= 1)
  ) {
    return {
      pack: "Bureau Externalisé Complet",
      reason:
        "Votre situation nécessite un accompagnement global. Admin, commercial et relation client : tout est pris en charge.",
      icon: Building2,
      color: "accent",
      services: [
        "Gestion administrative complète",
        "Suivi commercial de A à Z avec IA",
        "Relation client : accueil, SAV, fidélisation",
        "Dashboard de pilotage personnalisé",
      ],
    }
  }

  // Machine Commerciale — commercial focus
  if (
    commercialPains >= 2 ||
    form.hoursCommercial >= 5 ||
    (form.painPoints.includes("prospection") &&
      form.painPoints.includes("crm"))
  ) {
    return {
      pack: "Machine Commerciale",
      reason:
        "Vous avez un vrai potentiel commercial à exploiter. CRM intelligent, prospection ciblée et relances automatisées pour faire rentrer du chiffre.",
      icon: TrendingUp,
      color: "primary",
      services: [
        "CRM enrichi par IA : scoring leads",
        "Relances intelligentes personnalisées",
        "Prospection ciblée + scripts",
        "Reporting mensuel auto-généré",
      ],
    }
  }

  // Bureau Zéro Chaos — admin/getting started
  return {
    pack: "Bureau Zéro Chaos",
    reason:
      "Commençons par poser des bases solides. Organisation, process et CRM — le socle indispensable avant de scaler.",
    icon: Sparkles,
    color: "primary",
    services: [
      "Diagnostic express de votre maturité admin",
      "Mise en place CRM adapté",
      "Process standardisés devis → facture → relance",
      "Organisation 5S de vos documents",
    ],
  }
}

/* ────────────────────────────────────────
   Component
   ──────────────────────────────────────── */

export function DiagnosticSection() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<FormData>(defaultForm)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isSending, startSending] = useTransition()

  const totalSteps = 4

  const roi = useMemo(() => calculateROI(form), [form])
  const recommendation = useMemo(() => recommendPack(form), [form])

  const canSubmit =
    form.name.trim() !== "" && form.email.trim() !== "" && !isSending

  const handleSubmit = () => {
    if (!canSubmit) return
    setSubmitError(null)

    startSending(async () => {
      const result = await submitLead({
        name: form.name,
        email: form.email,
        sector: form.sector,
        employees: form.employees,
        revenue: form.revenue,
        hoursAdmin: form.hoursAdmin,
        hoursCommercial: form.hoursCommercial,
        hoursRelationClient: form.hoursRelationClient,
        hourlyRate: form.hourlyRate,
        painPoints: form.painPoints,
        roi,
        recommendedPack: recommendation.pack,
      })

      if (result.ok) {
        setSubmitted(true)
        return
      }
      setSubmitError(result.error)
    })
  }

  const canProceed = () => {
    switch (step) {
      case 0:
        return form.sector !== "" && form.employees !== "" && form.revenue !== ""
      case 1:
        return (
          form.hoursAdmin + form.hoursCommercial + form.hoursRelationClient > 0
        )
      case 2:
        return form.painPoints.length > 0
      case 3:
        return true
      default:
        return false
    }
  }

  const togglePainPoint = (id: string) => {
    setForm((prev) => ({
      ...prev,
      painPoints: prev.painPoints.includes(id)
        ? prev.painPoints.filter((p) => p !== id)
        : [...prev.painPoints, id],
    }))
  }

  return (
    <section
      id="diagnostic"
      className="py-20 bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <ClipboardCheck className="w-4 h-4" />
            Diagnostic gratuit
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quel est le coût caché de votre administratif ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            3 minutes pour découvrir combien vous perdez chaque mois — et
            comment Laury peut transformer ce temps perdu en croissance.
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-2">
            {["Votre profil", "Temps perdu", "Vos douleurs", "Vos résultats"].map(
              (label, i) => (
                <button
                  key={label}
                  onClick={() => {
                    if (i < step) setStep(i)
                  }}
                  className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                    i <= step
                      ? "text-primary"
                      : "text-muted-foreground/50"
                  } ${i < step ? "cursor-pointer hover:text-primary/80" : "cursor-default"}`}
                >
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all ${
                      i < step
                        ? "bg-primary text-primary-foreground border-primary"
                        : i === step
                          ? "border-primary text-primary bg-primary/10"
                          : "border-muted text-muted-foreground/50"
                    }`}
                  >
                    {i < step ? "✓" : i + 1}
                  </span>
                  <span className="hidden sm:inline">{label}</span>
                </button>
              )
            )}
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Step content */}
        <Card className="border-2 border-border bg-card shadow-lg">
          <CardContent className="p-6 md:p-8">
            {/* ─── Step 1: Profil ─── */}
            {step === 0 && (
              <div className="space-y-8 animate-fade-in-up">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Votre activité
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Pour adapter nos recommandations à votre réalité terrain.
                  </p>

                  {/* Secteur */}
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Quel est votre secteur ?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                    {sectors.map((s) => (
                      <button
                        key={s.id}
                        onClick={() =>
                          setForm((prev) => ({ ...prev, sector: s.id }))
                        }
                        className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left ${
                          form.sector === s.id
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-border hover:border-primary/30 text-foreground"
                        }`}
                      >
                        <s.icon className="w-5 h-5 shrink-0" />
                        <span className="text-sm font-medium">{s.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* Effectif */}
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Combien êtes-vous ?
                  </label>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {employeeRanges.map((e) => (
                      <button
                        key={e.id}
                        onClick={() =>
                          setForm((prev) => ({ ...prev, employees: e.id }))
                        }
                        className={`p-3 rounded-xl border-2 transition-all text-sm font-medium ${
                          form.employees === e.id
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-border hover:border-primary/30 text-foreground"
                        }`}
                      >
                        {e.label}
                      </button>
                    ))}
                  </div>

                  {/* CA */}
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Chiffre d&apos;affaires annuel
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {revenueRanges.map((r) => (
                      <button
                        key={r.id}
                        onClick={() =>
                          setForm((prev) => ({ ...prev, revenue: r.id }))
                        }
                        className={`p-3 rounded-xl border-2 transition-all text-sm font-medium ${
                          form.revenue === r.id
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-border hover:border-primary/30 text-foreground"
                        }`}
                      >
                        {r.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ─── Step 2: Temps perdu ─── */}
            {step === 1 && (
              <div className="space-y-8 animate-fade-in-up">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Combien d&apos;heures par semaine perdez-vous ?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Estimez le temps passé sur des tâches qui ne sont pas votre
                    cœur de métier.
                  </p>

                  {/* Sliders */}
                  {[
                    {
                      key: "hoursAdmin" as const,
                      label: "Administratif",
                      desc: "Devis, factures, relances, classement, dossiers…",
                      icon: FileText,
                      max: 20,
                    },
                    {
                      key: "hoursCommercial" as const,
                      label: "Commercial",
                      desc: "Prospection, suivi leads, relances clients, CRM…",
                      icon: TrendingUp,
                      max: 15,
                    },
                    {
                      key: "hoursRelationClient" as const,
                      label: "Relation client & SAV",
                      desc: "Appels, réclamations, planning, fidélisation…",
                      icon: Users,
                      max: 15,
                    },
                  ].map((slider) => (
                    <div
                      key={slider.key}
                      className="mb-8 last:mb-0"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <slider.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-foreground">
                              {slider.label}
                            </span>
                            <span className="text-lg font-bold text-primary">
                              {form[slider.key]}h
                              <span className="text-xs font-normal text-muted-foreground">
                                /sem
                              </span>
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {slider.desc}
                          </p>
                        </div>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={slider.max}
                        step={1}
                        value={form[slider.key]}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            [slider.key]: Number(e.target.value),
                          }))
                        }
                        className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer accent-primary
                          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
                          [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer
                          [&::-webkit-slider-thumb]:shadow-md"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>0h</span>
                        <span>{slider.max}h</span>
                      </div>
                    </div>
                  ))}

                  {/* Taux horaire */}
                  <div className="mt-6 p-4 rounded-xl bg-secondary/50 border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Euro className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium text-foreground">
                          Votre taux horaire estimé
                        </span>
                      </div>
                      <span className="text-lg font-bold text-accent">
                        {form.hourlyRate}€/h
                      </span>
                    </div>
                    <input
                      type="range"
                      min={15}
                      max={100}
                      step={5}
                      value={form.hourlyRate}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          hourlyRate: Number(e.target.value),
                        }))
                      }
                      className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer accent-accent
                        [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
                        [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:cursor-pointer
                        [&::-webkit-slider-thumb]:shadow-md"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Combien vaut une heure de votre temps sur votre vrai
                      métier ?
                    </p>
                  </div>

                  {/* Live cost preview */}
                  {roi.totalHoursLost > 0 && (
                    <div className="mt-6 p-4 rounded-xl bg-accent/5 border border-accent/20">
                      <div className="flex items-center gap-2 text-accent font-semibold">
                        <AlertTriangle className="w-4 h-4" />
                        Vous perdez environ{" "}
                        {roi.costPerMonth.toLocaleString("fr-FR")} €/mois
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Soit{" "}
                        {(roi.costPerMonth * 12).toLocaleString("fr-FR")}{" "}
                        €/an sur des tâches que Laury peut prendre en charge.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ─── Step 3: Pain points ─── */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in-up">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Qu&apos;est-ce qui vous pèse le plus ?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Sélectionnez tout ce qui vous parle — c&apos;est ce qui nous
                    permettra de recommander la bonne formule.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {painPointsList.map((pain) => {
                      const selected = form.painPoints.includes(pain.id)
                      return (
                        <button
                          key={pain.id}
                          onClick={() => togglePainPoint(pain.id)}
                          className={`flex items-start gap-3 p-4 rounded-xl border-2 transition-all text-left ${
                            selected
                              ? "border-accent bg-accent/5"
                              : "border-border hover:border-accent/30"
                          }`}
                        >
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                              selected ? "bg-accent/15" : "bg-muted"
                            }`}
                          >
                            <pain.icon
                              className={`w-5 h-5 ${
                                selected
                                  ? "text-accent"
                                  : "text-muted-foreground"
                              }`}
                            />
                          </div>
                          <div className="flex-1">
                            <span
                              className={`text-sm font-medium ${
                                selected
                                  ? "text-foreground"
                                  : "text-foreground"
                              }`}
                            >
                              {pain.label}
                            </span>
                          </div>
                          {selected && (
                            <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* ─── Step 4: Results ─── */}
            {step === 3 && (
              <div className="space-y-8 animate-fade-in-up">
                {/* ROI Summary */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Votre diagnostic personnalisé
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Voici ce que Laury peut vous faire gagner, estimé sur la
                    base de vos réponses.
                  </p>

                  {/* Big ROI number */}
                  <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 mb-6">
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      ROI annuel estimé
                    </p>
                    <p className="text-4xl md:text-5xl font-bold text-primary">
                      {roi.totalROI.toLocaleString("fr-FR")} €
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      de valeur récupérée par an
                    </p>
                  </div>

                  {/* ROI Breakdown */}
                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-card border border-border text-center">
                      <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">
                        {roi.totalHoursSaved}h
                      </p>
                      <p className="text-xs text-muted-foreground">
                        récupérées / semaine
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-card border border-border text-center">
                      <Euro className="w-6 h-6 text-accent mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">
                        {roi.monthlySavings.toLocaleString("fr-FR")} €
                      </p>
                      <p className="text-xs text-muted-foreground">
                        économisés / mois
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-card border border-border text-center">
                      <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">
                        {(roi.additionalRevenue + roi.recoveredPayments).toLocaleString("fr-FR")} €
                      </p>
                      <p className="text-xs text-muted-foreground">
                        CA additionnel / an
                      </p>
                    </div>
                  </div>

                  {/* Breakdown detail */}
                  <div className="p-4 rounded-xl bg-secondary/50 border border-border mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-primary" />
                      Détail des gains estimés
                    </h4>
                    <div className="space-y-2">
                      {roi.hoursSavedAdmin > 0 && (
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">
                            ⏱ Temps admin récupéré
                          </span>
                          <span className="font-medium text-foreground">
                            {roi.hoursSavedAdmin}h/sem → {Math.round(roi.hoursSavedAdmin * 4.33 * form.hourlyRate).toLocaleString("fr-FR")} €/mois
                          </span>
                        </div>
                      )}
                      {roi.hoursSavedCommercial > 0 && (
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">
                            📈 Temps commercial récupéré
                          </span>
                          <span className="font-medium text-foreground">
                            {roi.hoursSavedCommercial}h/sem → {Math.round(roi.hoursSavedCommercial * 4.33 * form.hourlyRate).toLocaleString("fr-FR")} €/mois
                          </span>
                        </div>
                      )}
                      {roi.hoursSavedRelation > 0 && (
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">
                            🤝 Temps relation client récupéré
                          </span>
                          <span className="font-medium text-foreground">
                            {roi.hoursSavedRelation}h/sem → {Math.round(roi.hoursSavedRelation * 4.33 * form.hourlyRate).toLocaleString("fr-FR")} €/mois
                          </span>
                        </div>
                      )}
                      {roi.additionalRevenue > 0 && (
                        <div className="flex items-center justify-between text-sm border-t border-border pt-2">
                          <span className="text-muted-foreground">
                            💰 CA additionnel (meilleure conversion)
                          </span>
                          <span className="font-medium text-accent">
                            +{roi.additionalRevenue.toLocaleString("fr-FR")} €/an
                          </span>
                        </div>
                      )}
                      {roi.recoveredPayments > 0 && (
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">
                            🔄 Impayés récupérés (relances structurées)
                          </span>
                          <span className="font-medium text-accent">
                            +{roi.recoveredPayments.toLocaleString("fr-FR")} €/an
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Recommended Pack */}
                <div className="p-6 rounded-2xl border-2 border-primary/30 bg-primary/5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                      <recommendation.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Zap className="w-4 h-4 text-accent" />
                        <span className="text-xs font-medium text-accent uppercase tracking-wide">
                          Pack recommandé pour vous
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-2">
                        {recommendation.pack}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        {recommendation.reason}
                      </p>
                      <ul className="space-y-2">
                        {recommendation.services.map((s, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-foreground"
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* IA mention */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border">
                  <Bot className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-foreground font-medium">
                      IA + humain = la méthode Laury
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Ces estimations sont basées sur les résultats moyens
                      observés chez des profils similaires au vôtre. L&apos;IA
                      automatise le répétitif, Laury gère le relationnel.
                    </p>
                  </div>
                </div>

                {/* CTA */}
                {!submitted ? (
                  <div className="p-6 rounded-2xl bg-card border-2 border-border">
                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      Recevez votre diagnostic complet
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Laury vous recontacte sous 24h pour un appel découverte
                      gratuit.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3 mb-4">
                      <input
                        type="text"
                        placeholder="Votre prénom"
                        value={form.name}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                      />
                      <input
                        type="email"
                        placeholder="Votre email"
                        value={form.email}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                    <Button
                      size="lg"
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                      onClick={handleSubmit}
                      disabled={!canSubmit}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {isSending
                        ? "Envoi en cours…"
                        : "Recevoir mon diagnostic + réserver un appel"}
                    </Button>
                    {submitError && (
                      <p
                        role="alert"
                        className="text-sm text-destructive text-center mt-3"
                      >
                        {submitError}
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground text-center mt-3">
                      Pas de spam. Laury vous contacte personnellement.
                    </p>
                  </div>
                ) : (
                  <div className="p-6 rounded-2xl bg-primary/5 border-2 border-primary/30 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      Merci {form.name || ""} ! 🎉
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Votre diagnostic a été envoyé. Laury vous recontacte sous
                      24h pour un appel découverte gratuit et personnalisé.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              {step > 0 ? (
                <Button
                  variant="outline"
                  onClick={() => setStep((s) => s - 1)}
                  className="gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Retour
                </Button>
              ) : (
                <div />
              )}

              {step < totalSteps - 1 && (
                <Button
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!canProceed()}
                  className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Continuer
                  <ArrowRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
