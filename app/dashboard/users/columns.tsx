import { ColumnDef } from '@tanstack/react-table';
import { BadgeCheck, Trash2 } from 'lucide-react';

import { Badge, Button } from '@/modules/shared/components/ui';
import { User } from '@/modules/shared/interfaces/user.interface';

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: ({ row }) => <div>{row.original.id.slice(0, 8)}</div>,
  },
  {
    accessorKey: 'fullName',
    header: 'Nombre',
  },
  {
    accessorKey: 'email',
    header: 'Correo electrónico',
    cell: ({ row }) => <div className="lowercase">{row.getValue('email')}</div>,
  },
  {
    accessorKey: 'roles',
    header: 'Rol',
    cell: ({ row }) => {
      const roles = row.getValue('roles');
      const role = Array.isArray(roles) ? roles[0] : roles || 'user';
      return (
        <Badge variant="outline" className="bg-blue-500 text-white">
          <BadgeCheck data-icon="inline-start" />
          {role}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'isActive',
    header: 'Estado',
    cell: ({ row }) => (
      <div>{row.getValue('isActive') ? 'Activo' : 'Inactivo'}</div>
    ),
  },
  {
    accessorKey: 'createdAt',
    header: 'Fecha de registro',
    cell: ({ row }) => {
      const dateValue = row.getValue('createdAt');
      return dateValue
        ? new Date(dateValue as string).toLocaleDateString('es-ES', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          })
        : 'Sin fecha';
    },
  },
  {
    id: 'actions',
    header: 'Acciones',
    cell: ({ row, table }) => {
      const user = row.original;
      const meta = table.options.meta as {
        removeUser: (id: string, name: string) => void;
      };
      return (
        <Button
          variant="ghost"
          size="icon"
          className="text-red-500 transition-colors hover:bg-red-50 hover:text-red-700"
          onClick={() => meta.removeUser(user.id, user.fullName)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      );
    },
  },
];
