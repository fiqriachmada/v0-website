"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useAppStore } from "@/store/appStore"
import { getTranslation } from "@/utils/translations"
import { useEffect } from "react"
import { languages } from "@/utils/languages"

export default function Home() {
  const { language, theme, systemTheme, setSystemTheme, systemLanguage, setSystemLanguage } = useAppStore()

  useEffect(() => {
    // Detect system theme
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light")
    }
    setSystemTheme(mediaQuery.matches ? "dark" : "light")
    mediaQuery.addEventListener("change", handleChange)

    // Detect system language
    const detectedLanguage = navigator.language.split("-")[0] as "en" | "id" | "zh" | "es" | "ms" | "ar"
    setSystemLanguage(detectedLanguage)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [setSystemTheme, setSystemLanguage])

  const effectiveLanguage = language === "system" ? systemLanguage : language

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">
        {getTranslation("welcome", effectiveLanguage)}
      </h1>
      <p className="mb-4">
        {getTranslation("homeDescription", effectiveLanguage)}
      </p>
      <p className="mb-4">
        {getTranslation("currentTheme", effectiveLanguage)}:{" "}
        {getTranslation(
          theme as "light" | "dark" | "system",
          effectiveLanguage
        )}
      </p>
      <p className="mb-4">
        {getTranslation("systemTheme", effectiveLanguage)}:{" "}
        {getTranslation(systemTheme as "light" | "dark", effectiveLanguage)}
      </p>
      {/* Tambahkan bagian ini */}
      <p className="mb-4">
        {getTranslation("currentLanguage", effectiveLanguage)}:{" "}
        {languages.find((lang) => lang.value === effectiveLanguage)?.label ||
          effectiveLanguage}
      </p>
      <p className="mb-4">
        {getTranslation("systemLanguage", effectiveLanguage)}:{" "}
        {languages.find((lang) => lang.value === systemLanguage)?.label ||
          systemLanguage}
      </p>
      <Button asChild>
        <Link href="/contact">
          {getTranslation("contactUs", effectiveLanguage)}
        </Link>
      </Button>
    </div>
  );
}

