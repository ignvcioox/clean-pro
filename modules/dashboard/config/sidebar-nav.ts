import {
  IconDashboard,
  IconListDetails,
  IconUsers,
  IconUserShield,
} from '@tabler/icons-react';

export const SIDEBAR_CONFIG = [
  {
    label: 'Menú Principal',
    items: [
      { title: 'Inicio', url: '/dashboard', icon: IconDashboard },
      { title: 'Productos', url: '/dashboard/products', icon: IconListDetails },
    ],
  },
  {
    label: 'Gestión de Usuarios',
    items: [
      { title: 'Usuarios', url: '/dashboard/users', icon: IconUsers },
      {
        title: 'Administradores',
        url: '/dashboard/admins',
        icon: IconUserShield,
      },
    ],
  },
];
