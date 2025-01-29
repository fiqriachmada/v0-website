"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { NavLink } from "@/components/atoms/NavLink"
import { Menu } from "lucide-react"
import { useAppStore } from "@/store/appStore"
import { getTranslation } from "@/utils/translations"

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { language, systemLanguage } = useAppStore()
  const effectiveLanguage = language === "system" ? systemLanguage : language

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
        <Menu />
      </Button>
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background p-4 border-b">
          <nav className="flex flex-col space-y-4">
            <NavLink href="/" label={getTranslation("home", effectiveLanguage)} />
            <NavLink href="/about" label={getTranslation("about", effectiveLanguage)} />
            <NavLink href="/works" label={getTranslation("works", effectiveLanguage)} />
            <NavLink href="/projects" label={getTranslation("projects", effectiveLanguage)} />
            <NavLink href="/blog" label={getTranslation("blog", effectiveLanguage)} />
            <NavLink href="/contact" label={getTranslation("contactUs", effectiveLanguage)} />
          </nav>
        </div>
      )}
    </div>
  )
}

