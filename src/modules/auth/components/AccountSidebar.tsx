"use client"

import * as React from "react"
import { IconUser, IconShieldLock, IconShoppingBag } from '@tabler/icons-react'
import { NavUser } from '@/src/modules/dashboard/components/nav-user'
import {
   Sidebar,
   SidebarContent,
   SidebarFooter,
   SidebarHeader,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
   SidebarGroup,
   SidebarGroupLabel
} from "@/src/modules/shared/components/ui/sidebar"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const ACCOUNT_ITEMS = [
   { title: "Mi Perfil", url: "/auth/account", icon: IconUser },
   { title: "Seguridad", url: "/auth/account/security", icon: IconShieldLock },
   { title: "Mis Pedidos", url: "/auth/account/orders", icon: IconShoppingBag },
]

export function AccountSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
   const pathname = usePathname();

   return (
      <Sidebar collapsible="offcanvas" {...props} className="border-r border-zinc-200 dark:border-zinc-800">
         <SidebarHeader className="pt-6">
            <SidebarMenu>
               <SidebarMenuItem>
                  <SidebarMenuButton asChild className="hover:bg-transparent active:bg-transparent">
                     <Link href="/" className="flex justify-center items-center w-full">
                        <Image
                           src="/images/clean-pro.webp"
                           alt="Clean Pro Logo"
                           width={130}
                           height={65}
                           priority
                           className="dark:brightness-0 dark:invert"
                        />
                     </Link>
                  </SidebarMenuButton>
               </SidebarMenuItem>
            </SidebarMenu>
         </SidebarHeader>

         <SidebarContent className="mt-6 px-3">
            <SidebarGroup>
               <SidebarGroupLabel className="px-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  Configuración
               </SidebarGroupLabel>
               <SidebarMenu className="mt-2 space-y-1">
                  {ACCOUNT_ITEMS.map((item) => {
                     const isActive = pathname === item.url;

                     return (
                        <SidebarMenuItem key={item.title}>
                           <SidebarMenuButton
                              asChild
                              className={`
                                 relative flex items-center gap-3 px-3 py-2.5 transition-all duration-200 rounded-md
                                 ${isActive
                                    ? "text-zinc-900 dark:text-zinc-100 font-medium bg-zinc-100 dark:bg-zinc-800/50"
                                    : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                                 }
                              `}
                           >
                              <Link href={item.url}>
                                 <item.icon className={`size-5 transition-colors ${isActive ? "text-blue-600" : "text-zinc-400"}`} />
                                 <span className="text-sm">{item.title}</span>

                                 {/* Indicador lateral minimalista */}
                                 {isActive && (
                                    <span className="absolute left-0 w-[3px] h-4 bg-blue-600 rounded-full" />
                                 )}
                              </Link>
                           </SidebarMenuButton>
                        </SidebarMenuItem>
                     );
                  })}
               </SidebarMenu>
            </SidebarGroup>
         </SidebarContent>

         <SidebarFooter className="border-t border-zinc-100 dark:border-zinc-800 p-4">
            <NavUser />
         </SidebarFooter>
      </Sidebar>
   )
}