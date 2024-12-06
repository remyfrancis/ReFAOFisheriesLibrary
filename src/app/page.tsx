'use client'

import { BackgroundCarousel } from "@/components/background-carousel"
import { MainNav } from "@/components/main-nav"
import { PortalCard } from "@/components/portal-card"
import { SidebarInset } from "@/components/ui/sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

const portalLinks = [
  {
    title: "Capture Fisheries",
    href: "/capture-fisheries",
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Fisheries Management",
    href: "/fisheries-management",
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Inland & Coastal Aquaculture",
    href: "/aquaculture",
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Marine Ecosystems",
    href: "/marine-ecosystems",
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Posters, Brochures and Videos",
    href: "/media",
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Project Reports",
    href: "/reports",
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Safety at Sea/Land for Fishers",
    href: "/safety",
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Uncategorized",
    href: "/uncategorized",
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
]

export default function HomePage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen flex-col">
        <MainNav />
        <div className="flex flex-1 w-full">
          <AppSidebar />
          <SidebarInset className="w-full">
            <main className="w-full h-full relative">
              <BackgroundCarousel />
              <div className="mx-auto max-w-7xl relative p-4 md:p-6">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {portalLinks.map((link) => (
                    <PortalCard key={link.href} {...link} />
                  ))}
                </div>
              </div>
            </main>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  )
}


