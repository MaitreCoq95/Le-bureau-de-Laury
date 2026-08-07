import { openai } from "@ai-sdk/openai";
import { streamObject } from "ai";
import { z } from "zod";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { jobDescription } = await req.json();

  const schema = z.object({
    score_global: z
      .number()
      .min(0)
      .max(100)
      .describe("Score de compatibilité global en %"),
    scores_par_axes: z.object({
      finance_controle_gestion: z.number().min(0).max(100),
      budgeting_forecasting: z.number().min(0).max(100),
      cost_control_optimisation: z.number().min(0).max(100),
      pilotage_multi_pays: z.number().min(0).max(100),
      digitalisation_bi_data: z.number().min(0).max(100),
    }),
    points_forts: z
      .array(z.string())
      .describe("Liste de phrases courtes sur les points forts"),
    points_a_discuter: z
      .array(z.string())
      .describe(
        "Liste de phrases courtes sur les points à nuancer ou à clarifier"
      ),
    analyse_detaillee: z
      .string()
      .describe(
        "Paragraphe ou deux expliquant en quoi le profil correspond (ou non) au besoin, à la 3e personne"
      ),
    pitch_court: z
      .string()
      .describe(
        "2 à 3 phrases que le candidat pourrait envoyer à l'entreprise"
      ),
  });

  const result = await streamObject({
    model: openai("gpt-4o"),
    schema,
    system: `Tu es un assistant spécialisé en matching de profils Finance / Contrôle de Gestion / Performance Management.
Ta mission : comparer le profil de Nicolas Lemoine à une offre d'emploi ou un besoin d'entreprise, et produire :

Un score de compatibilité global en %

Des scores par compétences clés

Une analyse détaillée lisible par un recruteur

Un court pitch expliquant pourquoi Nicolas est pertinent pour ce poste.

Tu dois être précis, honnête et professionnel, sans survendre mais en mettant en avant les points forts.
Tu dois TOUJOURS répondre en JSON valide.

PROFIL DE NICOLAS LEMOINE (RÉSUMÉ) :

Performance & Finance Strategist – Vyxo Consulting (2024 – auj.)

Conseil en pilotage de la performance financière, structuration budgétaire, optimisation des coûts, mise en place d'outils de pilotage (Power BI, Excel), audit de la donnée financière, support COMEX/CODIR.

Financial Controller France, Benelux, Germany – Atradius (2017 – 2024)

Pilotage financier multi-pays : budgeting, forecasting, dashboards stratégiques COMEX/CODIR, cost control, variance analysis, data governance. Business Analyst sur projet digital paneuropéen > 50M€. Chef de budget programme digital Europe.

Bond Account Manager – Atradius (2017)

Gestion de portefeuille IDF/NE, analyse de risques, reporting stratégique, relation clients corporate.

Financial Analyst – Barclays (2014 – 2017)

Analyse financière, construction d'outils de pilotage, reporting mensuel, analyse coûts complets. Automatisation du reporting mensuel.

Contrôleur de Gestion – LBMG Worklabs (2012 – 2014)

Contrôle de gestion opérationnel, suivi budgétaire, analyse des écarts, tableaux de bord automatisés, support décisionnel direction.

Compétences clés : Budgeting & Forecasting, Variance Analysis, Cost Control, Data Governance, Financial Modeling, Business Analysis, Excel Expert, Power BI, Power Pivot, SAP, Business Objects, Qlikview, R Studio, Access, pilotage multi-pays, communication COMEX/CODIR, leadership analytique, optimisation des processus, dashboards avancés.

Résultats : +12% fiabilité reporting, -8% coûts opérationnels, 3 pays harmonisés (FR/BE/DE), pilotage budgétaire 50M€, 30+ dashboards déployés, +15% précision forecast.

Adapte toujours ton analyse à L'OFFRE fournie en input.`,
    prompt: `Voici une offre d'emploi / un besoin d'entreprise.
Analyse la compatibilité entre ce besoin et le profil de Nicolas Lemoine décrit dans tes instructions système.

Offre :
${jobDescription}`,
  });

  return result.toTextStreamResponse();
}
