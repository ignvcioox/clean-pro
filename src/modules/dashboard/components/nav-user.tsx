'use client';

import {
   IconDotsVertical,
   IconUserCircle,
   IconLogout,
} from '@tabler/icons-react';

import {
   Avatar,
   AvatarFallback,
   AvatarImage,
} from '@/src/modules/shared/components/ui/avatar';

import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuGroup,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from '@/src/modules/shared/components/ui/dropdown-menu';

import {
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
   useSidebar,
} from '@/src/modules/shared/components/ui/sidebar';

export function NavUser() {

   const { isMobile } = useSidebar()

   return (
      <SidebarMenu>
         <SidebarMenuItem>
            <DropdownMenu>
               <DropdownMenuTrigger asChild>
                  <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                     <Avatar className="h-8 w-8 rounded-lg grayscale">
                        <AvatarImage src={'http'} alt='logo' />
                        <AvatarFallback className="rounded-lg">BL</AvatarFallback>
                     </Avatar>
                     <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-medium">Benjamín López</span>
                        <span className="text-muted-foreground truncate text-xs">
                           benjaminigna72@gmail.com
                        </span>
                     </div>
                     <IconDotsVertical className="ml-auto size-4" />
                  </SidebarMenuButton>
               </DropdownMenuTrigger>
               <DropdownMenuContent
                  className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                  side={isMobile ? "bottom" : "right"}
                  align="end"
                  sideOffset={4}
               >
                  <DropdownMenuLabel className="p-0 font-normal">
                     <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                        <Avatar className="h-8 w-8 rounded-lg">
                           <AvatarImage src={'http'} alt='logo' />
                           <AvatarFallback className="rounded-lg">BL</AvatarFallback>
                        </Avatar>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                           <span className="truncate font-medium">Benjamín López</span>
                           <span className="text-muted-foreground truncate text-xs">
                              benjaminigna72@gmail.com
                           </span>
                        </div>
                     </div>
                  </DropdownMenuLabel>

                  <DropdownMenuSeparator />

                  <DropdownMenuGroup>
                     <DropdownMenuItem>
                        <IconUserCircle />
                        Cuenta
                     </DropdownMenuItem>
                     <DropdownMenuItem>
                        Mis Pedidos
                     </DropdownMenuItem>
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem>
                     <IconLogout />
                     Cerrar sesión
                  </DropdownMenuItem>

               </DropdownMenuContent>
            </DropdownMenu>
         </SidebarMenuItem>
      </SidebarMenu>
   )
}
