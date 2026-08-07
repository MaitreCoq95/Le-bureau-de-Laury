"use client"

import { useState } from "react"
import { Menu, X, Linkedin, Mail, Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n/useTranslation"
import { useLanguageContext } from "@/lib/i18n/LanguageContext"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()
  const { language, toggleLanguage } = useLanguageContext()

  const navItems = [
    { label: t.header.nav.services, href: "#services" },
    { label: t.header.nav.premiumServices, href: "#premium-services" },
    { label: t.header.nav.experience, href: "#experience" },
    { label: t.header.nav.method, href: "#method" },
    { label: t.header.nav.skills, href: "#skills" },
    { label: t.header.nav.contact, href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Vyxo Logo */}
          <a 
            href="https://vyxoconsult.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/LOGO VYXO CONSULTING.png"
              alt="Vyxo Consulting"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
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

          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-border hover:border-primary hover:bg-primary/5 transition-all text-sm font-medium"
              aria-label="Toggle language"
            >
              <Languages className="w-4 h-4" />
              <span>{language.toUpperCase()}</span>
            </button>

            <a href="https://www.linkedin.com/in/nicolas-lemoine-32083417/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a href="mailto:nicolas.lemoine@vyxoconsult.com">
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
            
            {/* Mobile Language Switcher */}
            <button
              onClick={() => {
                toggleLanguage()
                setIsOpen(false)
              }}
              className="flex items-center gap-2 px-3 py-2 rounded-md border border-border hover:border-primary hover:bg-primary/5 transition-all text-sm font-medium w-full"
            >
              <Languages className="w-4 h-4" />
              <span>{language === 'fr' ? 'English' : 'Français'}</span>
            </button>

            <div className="flex items-center gap-4 pt-4 border-t border-border">
              <a href="https://www.linkedin.com/in/nicolas-lemoine-32083417/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a href="mailto:nicolas.lemoine@vyxoconsult.com">
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
