"use client";

import { useAppStore } from "@/store/appStore";
import { getTranslation, Language } from "@/utils/translations";

export default function Blog() {
  const { language } = useAppStore();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">
        {getTranslation("latestPosts", language as Language)}
      </h1>
      <p>{getTranslation("blogDescription", language as Language)}</p>
    </div>
  );
}
