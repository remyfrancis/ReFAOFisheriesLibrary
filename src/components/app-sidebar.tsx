import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Home, BookOpen, FileText, Ship, Fish, Video, AlertTriangle, ChevronDown, LogIn, FileInput, Building2 } from "lucide-react"
import { useState } from "react"

const captureFisheriesSubmenu = [
  { title: "Capture Fisheries", href: "/capture-fisheries" },
  { title: "Ceteaceans", href: "/capture-fisheries/ceteaceans" },
  { title: "Coastal Pelagics", href: "/capture-fisheries/coastal-pelagics" },
  { title: "Conch", href: "/capture-fisheries/conch" },
  { title: "Deep Slope and Banks", href: "/capture-fisheries/deep-slope-banks" },
  { title: "FAD Fishery", href: "/capture-fisheries/fad-fishery" },
  { title: "Flying Fish", href: "/capture-fisheries/flying-fish" },
  { title: "Lobster", href: "/capture-fisheries/lobster" },
  { title: "Marine Turtles", href: "/capture-fisheries/marine-turtles" },
  { title: "Sea Urchin", href: "/capture-fisheries/sea-urchin" },
  { title: "Shallow Shelf and Reef", href: "/capture-fisheries/shallow-shelf-reef" },
]

const fisheriesManagementSubmenu = [
  { title: "Fisheries Management", href: "/fisheries-management" },
  { title: "Aquaculture Management Plan", href: "/fisheries-management/aquaculture-management" },
  { title: "Climate Change", href: "/fisheries-management/climate-change" },
  { title: "Coastal Zone Management", href: "/fisheries-management/coastal-zone" },
  { title: "FAD Management Plan", href: "/fisheries-management/fad-management" },
  { title: "Fisheries Policy", href: "/fisheries-management/policy" },
  { title: "Fisheries Regulation", href: "/fisheries-management/regulation" },
  { title: "Licensing of Boats", href: "/fisheries-management/boat-licensing" },
  { title: "Marine Protected Areas", href: "/fisheries-management/protected-areas" },
  { title: "Marine Turtles", href: "/fisheries-management/marine-turtles" },
  { title: "Registration of Fishers", href: "/fisheries-management/fisher-registration" },
  { title: "Sustainable Financing", href: "/fisheries-management/sustainable-financing" },
]

const aquacultureSubmenu = [
  { title: "Inland & Coastal Aquaculture", href: "/aquaculture" },
  { title: "Aquaculture", href: "/aquaculture/general" },
  { title: "Freshwater Shrimp", href: "/aquaculture/freshwater-shrimp" },
  { title: "Seamoss Culture", href: "/aquaculture/seamoss" },
  { title: "Tilapia", href: "/aquaculture/tilapia" },
]

const marineEcosystemsSubmenu = [
  { title: "Marine Ecosystems", href: "/marine-ecosystems" },
  { title: "Beaches", href: "/marine-ecosystems/beaches" },
  { title: "Coral Reefs", href: "/marine-ecosystems/coral-reefs" },
  { title: "Mangroves", href: "/marine-ecosystems/mangroves" },
  { title: "Marine Litter", href: "/marine-ecosystems/marine-litter" },
  { title: "Seagrasses", href: "/marine-ecosystems/seagrasses" },
]

const safetySubmenu = [
  { title: "Safety at Sea/Land For Fishers", href: "/safety" },
  { title: "Emergency Response Plans", href: "/safety/emergency-response" },
  { title: "Safety Gear", href: "/safety/gear" },
  { title: "Vulnerability Assessments", href: "/safety/vulnerability" },
]

const menuItems = [
  {
    title: "Home",
    href: "/",
    icon: Home
  },
  {
    title: "Log In",
    href: "/login",
    icon: LogIn
  },
  {
    title: "Data Submission Form",
    href: "/data-submission",
    icon: FileInput
  },
  {
    title: "Ministry of Sustainable Development",
    href: "/ministry",
    icon: Building2
  },
  {
    title: "Capture Fisheries",
    href: "/capture-fisheries",
    icon: Fish,
    submenu: captureFisheriesSubmenu
  },
  {
    title: "Fisheries Management",
    href: "/fisheries-management",
    icon: BookOpen,
    submenu: fisheriesManagementSubmenu
  },
  {
    title: "Inland & Coastal Aquaculture",
    href: "/aquaculture",
    icon: Fish,
    submenu: aquacultureSubmenu
  },
  {
    title: "Marine Ecosystems",
    href: "/marine-ecosystems",
    icon: Ship,
    submenu: marineEcosystemsSubmenu
  },
  {
    title: "Posters, Brochures and Videos",
    href: "/media",
    icon: Video
  },
  {
    title: "Project Reports",
    href: "/reports",
    icon: FileText
  },
  {
    title: "Safety at Sea/Land for Fishers",
    href: "/safety",
    icon: AlertTriangle,
    submenu: safetySubmenu
  }
]

export function AppSidebar() {
  const [openMenus, setOpenMenus] = useState<string[]>([])

  const toggleSubmenu = (menuTitle: string) => {
    setOpenMenus(current => 
      current.includes(menuTitle)
        ? current.filter(title => title !== menuTitle)
        : [...current, menuTitle]
    )
  }

  return (
    <Sidebar className="bg-[#0B323B]">
      <SidebarHeader className="border-b border-border p-4">
        <h2 className="font-semibold">REFOAL Library</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  {item.submenu ? (
                    <>
                      <SidebarMenuButton
                        onClick={() => toggleSubmenu(item.title)}
                        className="w-full justify-between"
                      >
                        <div className="flex items-center">
                          <item.icon className="mr-2" />
                          <span>{item.title}</span>
                        </div>
                        <ChevronDown 
                          className={`h-4 w-4 transition-transform duration-300 ease-in-out ${
                            openMenus.includes(item.title) ? 'rotate-180' : ''
                          }`}
                        />
                      </SidebarMenuButton>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          openMenus.includes(item.title) ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <SidebarMenuSub>
                          {item.submenu.map((subItem) => (
                            <SidebarMenuSubItem 
                              key={subItem.href}
                              className="transition-all duration-300 ease-in-out"
                            >
                              <SidebarMenuSubButton asChild>
                                <a href={subItem.href}>{subItem.title}</a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </div>
                    </>
                  ) : (
                    <SidebarMenuButton asChild>
                      <a href={item.href}>
                        <item.icon className="mr-2" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
