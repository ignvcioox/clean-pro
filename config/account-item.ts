import { IconShieldLock, IconShoppingBag, IconUser } from '@tabler/icons-react';

interface AccountItem {
  title: string;
  url  : string;
  icon : React.ElementType;
}

interface AccountGroup {
  label: string;
  items: AccountItem[];
}

export const ACCOUNT_ITEMS: AccountGroup[] = [
  {
    label: 'Configuración',
    items: [
      {
        title: 'Mi Perfil',
        url  : '/auth/account',
        icon : IconUser,
      },
      {
        title: 'Seguridad',
        url  : '/auth/account/security',
        icon : IconShieldLock,
      },
      {
        title: 'Mis Pedidos',
        url  : '/auth/account/orders',
        icon : IconShoppingBag,
      },
    ],
  },
];
