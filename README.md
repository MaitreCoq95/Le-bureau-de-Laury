# Le Bureau de Laury

Site vitrine de **Le Bureau de Laury** — assistanat administratif et commercial
à distance pour les artisans, les TPE et les indépendants.

Une page unique, en français, qui présente les prestations, le parcours de
Laury Martin et un diagnostic en ligne permettant à un visiteur de chiffrer le
temps qu'il passe hors de son métier, puis de laisser ses coordonnées.

## Stack

- Next.js 16 (App Router, Turbopack) et React 19
- TypeScript en mode strict
- Tailwind CSS 4
- Déploiement Vercel

## Démarrer

```bash
npm install
npm run dev
```

Le site est servi sur http://localhost:3000.

| Commande | Effet |
| --- | --- |
| `npm run dev` | serveur de développement |
| `npm run build` | build de production (les erreurs TypeScript bloquent) |
| `npm run start` | sert le build de production |
| `npm run lint` | ESLint (configuration `next/core-web-vitals` + `next/typescript`) |

## Configuration

Copier `.env.example` vers `.env.local` et renseigner :

| Variable | Rôle |
| --- | --- |
| `LEAD_WEBHOOK_URL` | URL qui reçoit les demandes de diagnostic, en POST JSON |

**Sans cette variable, le formulaire de diagnostic refuse l'envoi** et affiche
un message d'erreur au visiteur avec l'adresse de contact en repli. C'est
volontaire : mieux vaut une erreur visible qu'un lead perdu en silence. La
variable doit donc être définie dans Vercel avant toute mise en ligne.

Le webhook peut être n'importe quel service acceptant du JSON (Zapier, Make,
n8n, Brevo…). Charge utile envoyée :

```json
{
  "name": "Prénom",
  "email": "adresse@exemple.fr",
  "sector": "artisan",
  "employees": "2-5",
  "revenue": "50-150k",
  "hoursAdmin": 6,
  "hoursCommercial": 3,
  "hoursRelationClient": 2,
  "hourlyRate": 35,
  "painPoints": ["devis", "devisEnAttente"],
  "cost": { "weeklyHours": 11, "monthlyCost": 1667, "yearlyCost": 20004 },
  "recommendedPack": "zeroChaos",
  "submittedAt": "2026-09-14T18:19:34.675Z"
}
```

Pour passer à un envoi par email plutôt que par webhook, seule la fonction
`deliverLead` de `app/actions/submit-lead.ts` est à remplacer.

## Organisation du code

```
app/
  actions/submit-lead.ts   Server Action : validation zod + envoi du lead
  layout.tsx               polices, thème, métadonnées
  page.tsx                 assemblage des sections
components/                une section de la page par fichier
  ui/                      button, card, textarea (shadcn/ui)
lib/i18n/translations.ts   tous les textes du site, en un seul endroit
```

**Les textes affichés vivent dans `lib/i18n/translations.ts`**, pas dans les
composants. Pour corriger une formulation, c'est le seul fichier à ouvrir.
Deux exceptions connues : le diagnostic (`components/diagnostic-section.tsx`)
et la section vidéo portent encore leurs textes en dur.

## Points d'attention

- **Chiffres et promesses.** Le site n'affiche aucun résultat moyen ni
  pourcentage de gain. Le diagnostic ne calcule que ce que le visiteur déclare
  lui-même (ses heures × son tarif horaire), et l'explique à l'écran. Ne pas
  réintroduire de chiffre de performance tant qu'il ne repose pas sur des
  clients réels.
- **Origine v0.** Le projet a été généré avec [v0.app](https://v0.app). Si la
  synchronisation v0 → GitHub est encore active, une génération depuis v0 peut
  écraser les modifications faites à la main sur `main`.
- **`public/landing.html`** est une version statique de la page, servie
  publiquement et non reliée au reste du site. Elle n'est pas mise à jour avec
  le code : à supprimer ou à maintenir sciemment.
