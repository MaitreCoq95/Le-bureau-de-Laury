"use client"

import { useState } from "react"
import { Menu, X, Mail, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n/useTranslation"
import { useTheme } from "next-themes"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()
  const { theme, setTheme } = useTheme()

  const navItems = [
    { label: t.header.nav.services, href: "#services" },
    { label: t.header.nav.premiumServices, href: "#premium-services" },
    { label: t.header.nav.experience, href: "#timeline" },
    { label: t.header.nav.method, href: "#method" },
    { label: t.header.nav.skills, href: "#skills" },
    { label: "Diagnostic", href: "#diagnostic" },
    { label: t.header.nav.contact, href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo texte */}
          <a
            href="#"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="text-xl font-bold text-primary tracking-wide">Le Bureau de</span>
            <span className="text-xl text-accent italic" style={{ fontFamily: 'Georgia, serif' }}>Laury</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="flex items-center justify-center w-9 h-9 rounded-md border border-border hover:border-primary hover:bg-primary/5 transition-all"
              aria-label="Toggle theme"
            >
              <Sun className="w-4 h-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute w-4 h-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </button>

            <a href="mailto:contact@lebureaudelaury.fr">
              <Mail className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <Button asChild>
              <a href="#contact">{t.header.cta}</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <div className="flex items-center gap-3 pt-4 border-t border-border">
              {/* Mobile Theme Toggle */}
              <button
                onClick={() => {
                  setTheme(theme === 'dark' ? 'light' : 'dark')
                }}
                className="flex items-center gap-2 px-3 py-2 rounded-md border border-border hover:border-primary hover:bg-primary/5 transition-all text-sm font-medium"
              >
                <Sun className="w-4 h-4 dark:hidden" />
                <Moon className="w-4 h-4 hidden dark:block" />
                <span className="dark:hidden">Mode sombre</span>
                <span className="hidden dark:block">Mode clair</span>
              </button>
            </div>

            <div className="flex items-center gap-4 pt-3">
              <a href="mailto:contact@lebureaudelaury.fr">
                <Mail className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>

            <Button asChild className="w-full">
              <a href="#contact" onClick={() => setIsOpen(false)}>{t.header.cta}</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
