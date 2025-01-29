"use client"

import { useAppStore } from "@/store/appStore"
import { getTranslation } from "@/utils/translations"

export default function Works() {
  const { language } = useAppStore()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{getTranslation("ourWorks", language)}</h1>
      <p>{getTranslation("worksDescription", language)}</p>
    </div>
  )
}

