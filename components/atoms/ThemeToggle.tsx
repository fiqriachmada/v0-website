"use client"

import { useAppStore } from "@/store/appStore"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useEffect } from "react"

export const ThemeToggle = () => {
  const { theme, setTheme } = useAppStore()

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? <Moon /> : <Sun />}
    </Button>
  )
}

