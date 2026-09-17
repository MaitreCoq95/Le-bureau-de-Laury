'use server'

import { z } from 'zod'

/**
 * Destination du lead. Un webhook (Zapier, Make, n8n, Brevo…) évite d'avoir à
 * stocker un secret de fournisseur mail dans le projet. Si Laury choisit un
 * outil précis plus tard, seul `deliverLead` est à remplacer.
 */
const WEBHOOK_URL = process.env.LEAD_WEBHOOK_URL
const DELIVERY_TIMEOUT_MS = 8000

const costLine = z.object({
  hours: z.number().min(0),
  cost: z.number().min(0),
})

const leadSchema = z.object({
  name: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(180),
  sector: z.string().trim().max(80),
  employees: z.string().trim().max(40),
  revenue: z.string().trim().max(40),
  hoursAdmin: z.number().min(0).max(200),
  hoursCommercial: z.number().min(0).max(200),
  hoursRelationClient: z.number().min(0).max(200),
  hourlyRate: z.number().min(0).max(1000),
  painPoints: z.array(z.string().max(60)).max(30),
  cost: z.object({
    weeklyHours: z.number().min(0),
    monthlyCost: z.number().min(0),
    yearlyCost: z.number().min(0),
    admin: costLine,
    commercial: costLine,
    relation: costLine,
  }),
  recommendedPack: z.enum(['complet', 'commercial', 'zeroChaos']),
})

export type LeadInput = z.infer<typeof leadSchema>
export type LeadResult = { ok: true } | { ok: false; error: string }

const FIELD_ERRORS = {
  name: 'Merci d\'indiquer votre prénom.',
  email: 'Cette adresse email ne semble pas valide.',
} as const

const GENERIC_ERROR =
  "L'envoi a échoué. Réessayez, ou écrivez directement à contact@lebureaudelaury.fr."

/** Transmet le lead au webhook configuré. Lève en cas d'échec. */
async function deliverLead(lead: LeadInput): Promise<void> {
  if (!WEBHOOK_URL) {
    throw new Error('LEAD_WEBHOOK_URL is not configured')
  }

  const response = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...lead, submittedAt: new Date().toISOString() }),
    signal: AbortSignal.timeout(DELIVERY_TIMEOUT_MS),
  })

  if (!response.ok) {
    throw new Error(`Webhook responded ${response.status}`)
  }
}

export async function submitLead(input: unknown): Promise<LeadResult> {
  const parsed = leadSchema.safeParse(input)
  if (!parsed.success) {
    const field = parsed.error.issues[0]?.path[0]
    if (field === 'name' || field === 'email') {
      return { ok: false, error: FIELD_ERRORS[field] }
    }
    console.error('[submitLead] invalid payload:', parsed.error.issues)
    return { ok: false, error: GENERIC_ERROR }
  }

  try {
    await deliverLead(parsed.data)
    return { ok: true }
  } catch (error) {
    // Le détail reste côté serveur : il peut contenir l'URL du webhook.
    console.error('[submitLead] delivery failed:', error)
    return { ok: false, error: GENERIC_ERROR }
  }
}
