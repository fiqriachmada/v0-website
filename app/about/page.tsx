"use client"

import { useAppStore } from "@/store/appStore"
import { getTranslation } from "@/utils/translations"

export default function About() {
  const { language } = useAppStore()

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">{getTranslation("aboutUs", language)}</h1>
      <p>{getTranslation("aboutDescription", language)}</p>
    </div>
  )
}

