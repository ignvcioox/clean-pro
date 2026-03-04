import { AppSidebar } from '@/modules/dashboard/components/app-sidebard';
import { SiteHeader } from '@/modules/dashboard/components/site-header';
import { SidebarInset, SidebarProvider } from '@/modules/shared/components/ui/sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': 'calc(var(--spacing) * 72)',
          '--header-height': 'calc(var(--spacing) * 12)',
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
