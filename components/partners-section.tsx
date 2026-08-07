const partners = [
  { name: "EurotransPharma", logo: "ETP" },
  { name: "Walden Group", logo: "WG" },
  { name: "Partnair & Sea", logo: "P&S" },
  { name: "ARGOS GPS", logo: "ARGOS" },
]

export function PartnersSection() {
  return (
    <section className="py-12 border-y border-border bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center px-6 py-3 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <span className="text-foreground font-semibold">{partner.logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
