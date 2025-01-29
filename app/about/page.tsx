"use client";

import { useAppStore } from "@/store/appStore";

import { getTranslation, Language } from "@/utils/translations";

export default function About() {
  const { language } = useAppStore();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">
        {getTranslation("aboutUs", language as Language)}
      </h1>
      <p>{getTranslation("aboutDescription", language as Language)}</p>
    </div>
  );
}
