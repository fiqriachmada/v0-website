"use client"

import { useAppStore } from "@/store/appStore"
import { useEffect, useState } from "react"
import { Moon, Sun, Laptop, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { getTranslation } from "@/utils/translations"

export function ThemeDropdown() {
  const { theme, setTheme, language } = useAppStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="h-10 w-10 px-0">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")} className={theme === "light" ? "bg-accent" : ""}>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <Sun className="mr-2 h-4 w-4" />
              <span>{getTranslation("light", language)}</span>
            </div>
            {theme === "light" && <Check className="ml-2 h-4 w-4" />}
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className={theme === "dark" ? "bg-accent" : ""}>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <Moon className="mr-2 h-4 w-4" />
              <span>{getTranslation("dark", language)}</span>
            </div>
            {theme === "dark" && <Check className="ml-2 h-4 w-4" />}
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className={theme === "system" ? "bg-accent" : ""}>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <Laptop className="mr-2 h-4 w-4" />
              <span>{getTranslation("system", language)}</span>
            </div>
            {theme === "system" && <Check className="ml-2 h-4 w-4" />}
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

