import { AccountSidebar } from "@/src/modules/auth/components/AccountSidebar"
import { SidebarProvider, SidebarTrigger } from "@/src/modules/shared/components/ui/sidebar"

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AccountSidebar />
      <main className="relative flex-1 flex flex-col min-h-screen bg-background w-full">
        <header className="flex h-16 items-center gap-4 border-b px-4 md:hidden">
          <SidebarTrigger />
          <span className="font-semibold text-sm">Configuración</span>
        </header>
        <div className="flex-1 p-6 md:p-10 w-full">
          <div className="w-full space-y-8 mx-auto">
             {children}
          </div>
        </div>
      </main>
    </SidebarProvider>
  )
}