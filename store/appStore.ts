import { create } from "zustand"
import { persist } from "zustand/middleware"

type Theme = "light" | "dark" | "system"
type Language = "system" | "en" | "id" | "zh" | "es" | "ms" | "ar"

interface AppState {
  theme: Theme
  setTheme: (theme: Theme) => void
  language: Language
  setLanguage: (language: Language) => void
  systemTheme: "light" | "dark"
  setSystemTheme: (theme: "light" | "dark") => void
  systemLanguage: Exclude<Language, "system">
  setSystemLanguage: (language: Exclude<Language, "system">) => void
  name: string
  email: string
  message: string
  setName: (name: string) => void
  setEmail: (email: string) => void
  setMessage: (message: string) => void
  resetForm: () => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: "system",
      setTheme: (theme) => set({ theme }),
      language: "system",
      setLanguage: (language) => set({ language }),
      systemTheme: "light",
      setSystemTheme: (theme) => set({ systemTheme: theme }),
      systemLanguage: "en",
      setSystemLanguage: (language) => set({ systemLanguage: language }),
      name: "",
      email: "",
      message: "",
      setName: (name) => set({ name }),
      setEmail: (email) => set({ email }),
      setMessage: (message) => set({ message }),
      resetForm: () => set({ name: "", email: "", message: "" }),
    }),
    {
      name: "app-storage",
    },
  ),
)

