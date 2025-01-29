"use client"

import { NavLink } from "@/components/atoms/NavLink"
import { useAppStore } from "@/store/appStore"
import { getTranslation } from "@/utils/translations"

export const DesktopNav = () => {
  const { language, systemLanguage } = useAppStore()
  const effectiveLanguage = language === "system" ? systemLanguage : language

  return (
    <nav className="hidden md:flex space-x-4">
      <NavLink href="/" label={getTranslation("home", effectiveLanguage)} />
      <NavLink href="/about" label={getTranslation("about", effectiveLanguage)} />
      <NavLink href="/works" label={getTranslation("works", effectiveLanguage)} />
      <NavLink href="/projects" label={getTranslation("projects", effectiveLanguage)} />
      <NavLink href="/blog" label={getTranslation("blog", effectiveLanguage)} />
      <NavLink href="/contact" label={getTranslation("contactUs", effectiveLanguage)} />
    </nav>
  )
}

