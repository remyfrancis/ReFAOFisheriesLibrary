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
    <div className="flex h-14 items-center gap-4 bg-[#006400] px-4 text-white">
      <SidebarTrigger>
        <Menu className="h-6 w-6" />
      </SidebarTrigger>
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
  )
}

