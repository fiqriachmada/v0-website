"use client"

import "./globals.css"
import { Inter } from "next/font/google"
import { Header } from "@/components/organisms/Header"
import { useAppStore } from "@/store/appStore"
import { useEffect } from "react"
import { getTranslation } from "@/utils/translations"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { theme, language, setSystemTheme, setSystemLanguage } = useAppStore()

  useEffect(() => {
    // Detect and set system theme
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleThemeChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light")
    }
    setSystemTheme(mediaQuery.matches ? "dark" : "light")
    mediaQuery.addEventListener("change", handleThemeChange)

    // Detect and set system language
    const detectedLanguage = navigator.language.split("-")[0] as "en" | "id" | "zh" | "es" | "ms" | "ar"
    setSystemLanguage(detectedLanguage)

    // Apply theme
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme === "system" ? (mediaQuery.matches ? "dark" : "light") : theme)

    return () => mediaQuery.removeEventListener("change", handleThemeChange)
  }, [theme, setSystemTheme, setSystemLanguage])

  const effectiveLanguage = language === "system" ? useAppStore.getState().systemLanguage : language

  // Apply text direction
  useEffect(() => {
    document.body.dir = effectiveLanguage === "ar" ? "rtl" : "ltr"
  }, [effectiveLanguage])

  return (
    <html lang={effectiveLanguage} dir={effectiveLanguage === "ar" ? "rtl" : "ltr"}>
      <head>
        <title>{getTranslation("welcome", effectiveLanguage)}</title>
        <meta name="description" content={getTranslation("homeDescription", effectiveLanguage)} />
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>
        <Header />
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  )
}

