import { Pencil, Trash } from 'lucide-react';
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/src/modules/shared/components/ui/button';

export type User = {
   id: string;
   name: string;
   email: string;
   role: string;
   status: string;
   registrationDate: string;
   lastConnection: string;
}

export const columns: ColumnDef<User>[] = [
   {
      accessorKey: "id",
      header: "ID",
      cell: ({ row }) => <div>{row.getValue("id")}</div>,
   },
   {
      accessorKey: "name",
      header: "Nombre",
      cell: ({ row }) => <div>{row.getValue("name")}</div>,
   },
   {
      accessorKey: "email",
      header: "Correo electrónico",
      cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
   },
   {
      accessorKey: "role",
      header: "Rol",
      cell: ({ row }) => {
         const role = row.getValue("role") as string;
         const isAdmin = role === "Admin";
         return (
            <span
               style={{
                  background: isAdmin ? '#fee2e2' : '#e0e7ff',
                  color: isAdmin ? '#b91c1c' : '#3730a3',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  fontWeight: '500',
                  fontSize: '0.95em',
                  display: 'inline-block',
                  minWidth: '70px',
                  textAlign: 'center',
               }}
            >
               {role}
            </span>
         )
      }
   },
   {
      accessorKey: "status",
      header: "Estado",
      cell: ({ row }) => <div>{row.getValue("status")}</div>,
   },
   {
      accessorKey: "registrationDate",
      header: "Fecha de registro",
      cell: ({ row }) => <div>{row.getValue("registrationDate")}</div>,
   },
   {
      accessorKey: "lastConnection",
      header: "Última conexión",
      cell: ({ row }) => <div>{row.getValue("lastConnection")}</div>,
   },
   {
      id: "actions",
      header: "Acciones",
      cell: ({ row }) => {
         const user = row.original

         return (
            <div className="flex gap-2">
               <Button
                  size="sm"
                  variant="outline"
               >
                  <Pencil className="h-4 w-4 mr-1" />
               </Button>

               <Button
                  size="sm"
                  variant="destructive"
               >
                  <Trash className="h-4 w-4 mr-1" />
               </Button>
            </div>
         )
      },
   }
]