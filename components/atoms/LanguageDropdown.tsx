"use client";

import { useAppStore } from "@/store/appStore";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getTranslation } from "@/utils/translations";
import Image from "next/image";
import { Check } from "lucide-react";

const languages = [
  { value: "system", label: "System", flag: "/image/flag/globe.svg" },
  { value: "en", label: "English", flag: "/image/flag/gb.svg" },
  { value: "id", label: "Indonesia", flag: "/image/flag/id.svg" },
  { value: "zh", label: "中文", flag: "/image/flag/cn.svg" },
  { value: "es", label: "Español", flag: "/image/flag/es.svg" },
  { value: "ms", label: "Bahasa Melayu", flag: "/image/flag/my.svg" },
  { value: "ar", label: "العربية", flag: "/image/flag/sa.svg" },
];

export const LanguageDropdown = () => {
  const { language, setLanguage, systemLanguage } = useAppStore();

  const currentLanguage = languages.find(
    (lang) => lang.value === (language === "system" ? systemLanguage : language)
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="h-10 w-10 px-0">
          <Image
            src={currentLanguage?.flag || "/image/flag/globe.svg"}
            alt={currentLanguage?.label || "Select Language"}
            width={24}
            height={24}
          />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => {
          // Only show check if it's system option and system is selected
          // OR if it's a specific language and that language is directly selected
          const isActive =
            lang.value === "system"
              ? language === "system"
              : language === lang.value;

          return (
            <DropdownMenuItem
              key={lang.value}
              onClick={() =>
                setLanguage(
                  lang.value as
                    | "system"
                    | "en"
                    | "id"
                    | "zh"
                    | "es"
                    | "ms"
                    | "ar"
                )
              }
              className={isActive ? "bg-accent" : ""}>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <Image
                    src={lang.flag || "/placeholder.svg"}
                    alt={lang.label}
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <span>
                    {lang.value === "system"
                      ? getTranslation(
                          "system",
                          language === "system" ? systemLanguage : language
                        )
                      : lang.label}
                  </span>
                </div>
                {isActive && <Check className="ml-2 h-4 w-4" />}
              </div>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
