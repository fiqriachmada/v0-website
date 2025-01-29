import Link from "next/link"
import type React from "react"

interface NavLinkProps {
  href: string
  label: string
}

export const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <Link href={href} className="hover:text-primary">
      {label}
    </Link>
  )
}

