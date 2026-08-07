import { z } from "zod"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

const generateSchema = z.object({
  jobDescription: z.string(),
  jobAnalysis: z.object({
    matchScore: z.number(),
    keyMatches: z.array(z.string()),
    missingSkills: z.array(z.string()),
    recommendations: z.array(z.string()),
  }),
})

export async function POST(req: Request) {
  try {
    const { jobDescription, jobAnalysis } = generateSchema.parse(await req.json())
    const apiKey = process.env.GAMMA_API_KEY

    if (!apiKey) {
      return new Response("Missing Gamma API Key", { status: 500 })
    }

    const prompt = `
      Génère un document de 2 pages (Format Présentation/Deck) pour Nicolas Lemoine, candidat au poste décrit ci-dessous.

      **Page 1 : Profil & Atouts pour le poste**
      - Titre : Nicolas Lemoine - Chief Performance & Finance Strategist
      - Résumé du profil : 10+ ans d'expérience, Expert Finance Multi-Pays (FR/BE/DE), Budgeting & Forecasting, Cost Control, Power BI, SAP.
      - Pourquoi ce profil matche avec l'offre (Score de match : ${jobAnalysis.matchScore}%) :
        - Points forts : ${jobAnalysis.keyMatches.join(", ")}.
      - Contact : nicolas.lemoine@vyxoconsult.com | 06.00.00.00.00 | linkedin.com/in/nicolas-lemoine-32083417/

      **Page 2 : Analyse & Proposition de Valeur**
      - Analyse de l'offre : ${jobDescription.substring(0, 200)}...
      - Solutions aux besoins (Basé sur les manques identifiés : ${jobAnalysis.missingSkills.join(", ")}) :
        - ${jobAnalysis.recommendations.join("\n        - ")}
      - Conclusion : "Prêt à transformer vos données financières en leviers de performance mesurable dès le premier mois."

      **Style :** Professionnel, Bleu Marine & Or (Finance/Corporate), Moderne.
    `

    const initialResponse = await fetch("https://public-api.gamma.app/v1.0/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": apiKey,
      },
      body: JSON.stringify({
        inputText: prompt,
        textMode: "generate",
        format: "presentation",
        numCards: 3,
        textOptions: {
          language: "fr",
          amount: "medium"
        }
      }),
    })

    if (!initialResponse.ok) {
      const error = await initialResponse.text()
      console.error("Gamma API Error (Initial):", error)
      return new Response(`Gamma API Error: ${error}`, { status: initialResponse.status })
    }

    const { id: generationId } = await initialResponse.json()
    
    // Poll for completion
    let attempts = 0
    const maxAttempts = 30 // 30 attempts * 1s = 30s max (Vercel limit)
    
    while (attempts < maxAttempts) {
      const statusResponse = await fetch(`https://public-api.gamma.app/v1.0/generations/${generationId}`, {
        headers: {
          "X-API-KEY": apiKey,
        },
      })

      if (!statusResponse.ok) {
        throw new Error("Failed to check generation status")
      }

      const statusData = await statusResponse.json()
      
      if (statusData.status === "COMPLETED" || statusData.status === "DONE") {
        return new Response(JSON.stringify({ link: statusData.url || statusData.hyperlink }), {
          headers: { "Content-Type": "application/json" },
        })
      }
      
      if (statusData.status === "FAILED" || statusData.status === "ERROR") {
        throw new Error("Gamma generation failed")
      }

      await new Promise(resolve => setTimeout(resolve, 1000))
      attempts++
    }

    return new Response("Generation timed out", { status: 504 })
  } catch (error) {
    console.error("Error generating CV:", error)
    return new Response("Internal Server Error", { status: 500 })
  }
}
