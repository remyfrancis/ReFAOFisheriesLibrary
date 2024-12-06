import { Menu } from 'lucide-react'
import Link from "next/link"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function MainNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-light-cyan bg-light-cyan backdrop-blur supports-[backdrop-filter]:bg-light-cyan/60">
      <div className="container flex h-14 items-center">
        <SidebarTrigger className="mr-2" />
        <nav className="flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-white/80"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

