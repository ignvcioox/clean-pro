import { AccountSidebar } from '@/modules/auth/components/account-sidebar';
import { SidebarProvider } from '@/modules/shared/components/ui';

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AccountSidebar />
      <main className="bg-background relative w-full p-10">{children}</main>
    </SidebarProvider>
  );
}
