import { MobileNav } from "@/components/molecules/MobileNav"
import { DesktopNav } from "@/components/molecules/DesktopNav"
import { LanguageDropdown } from "@/components/atoms/LanguageDropdown"
import { ThemeDropdown } from "@/components/atoms/ThemeDropdown"

export const Header = () => {
  return (
    <header className="bg-background text-foreground border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <MobileNav />
          <DesktopNav />
          <div className="flex items-center space-x-2">
            <LanguageDropdown />
            <ThemeDropdown />
          </div>
        </div>
      </div>
    </header>
  )
}

