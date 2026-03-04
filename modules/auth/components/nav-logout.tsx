import {
  Button,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/modules/shared/components/ui';
import { useAuthStore } from '@/modules/auth/hooks/use-auth-store';
import { IconLogout } from '@tabler/icons-react';

export function NavLogout() {
  const { startLogout } = useAuthStore();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Button
          variant="ghost"
          className="text-muted-foreground hover:text-destructive w-full justify-start gap-2 px-2"
          onClick={startLogout}
        >
          <IconLogout className="size-5" />
          <span>Cerrar sesión</span>
        </Button>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
