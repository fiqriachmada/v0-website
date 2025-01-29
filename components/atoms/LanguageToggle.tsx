"use client"

import { useAppStore } from "@/store/appStore"
import { Button } from "@/components/ui/button"

export const LanguageToggle = () => {
  const { language, setLanguage } = useAppStore()

  return (
    <Button onClick={() => setLanguage(language === "en" ? "id" : "en")} variant="outline" size="sm">
      {language === "en" ? "ID" : "EN"}
    </Button>
  )
}

