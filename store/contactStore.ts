import { create } from "zustand"
import { persist } from "zustand/middleware"

interface ContactState {
  name: string
  email: string
  message: string
  setName: (name: string) => void
  setEmail: (email: string) => void
  setMessage: (message: string) => void
  resetForm: () => void
}

export const useContactStore = create<ContactState>()(
  persist(
    (set) => ({
      name: "",
      email: "",
      message: "",
      setName: (name) => set({ name }),
      setEmail: (email) => set({ email }),
      setMessage: (message) => set({ message }),
      resetForm: () => set({ name: "", email: "", message: "" }),
    }),
    {
      name: "contact-form-storage",
    },
  ),
)

