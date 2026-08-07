'use client'

import { Linkedin, Mail, Phone } from "lucide-react"
import { useTranslation } from "@/lib/i18n/useTranslation"
import Image from "next/image"

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/LOGO VYXO CONSULTING.png"
                alt="Vyxo Consulting"
                width={100}
                height={33}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-muted-foreground text-sm">
              {t.footer.tagline}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t.footer.navigation.title}</h4>
            <div className="space-y-2">
              {t.footer.navigation.links.map((link) => (
                <a key={link.href} href={link.href} className="block text-muted-foreground hover:text-primary text-sm">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t.footer.contact.title}</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${t.footer.contact.email}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm"
              >
                <Mail className="w-4 h-4" />
                {t.footer.contact.email}
              </a>
              <a
                href={`tel:${t.footer.contact.phone}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm"
              >
                <Phone className="w-4 h-4" />
                {t.footer.contact.phone}
              </a>
              <a
                href="https://www.linkedin.com/in/nicolas-lemoine-32083417/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm"
              >
                <Linkedin className="w-4 h-4" />
                {t.footer.contact.linkedin}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  )
}
