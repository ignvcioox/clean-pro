'use client';

import { useState, useEffect} from 'react';
import { User, columns } from '@/app/dashboard/users/columns';
import { DataTable } from '@/app/dashboard/users/data-table';

async function getData(): Promise<User[]> {
   return [
      {
         id: "728ed52f",
         name: "Fazt",
         email: "fazt@google.com",
         role: "Admin",
         status: "Activo",
         registrationDate: "2023-01-01",
         lastConnection: "2023-01-10",
      },
      {
         id: "1a2b3c4d",
         name: "Jane Doe",
         email: "jane@google.com",
         role: "Usuario",
         status: "Inactivo",
         registrationDate: "2023-02-15",
         lastConnection: "2023-03-01",
      },
   ]
}

export default function UsersPage() {

   const [data, setData] = useState<User[]>([])

   useEffect(() => {
      getData().then(setData)
   }, [])

   return (
      <div className="flex items-center justify-center min-h-[70vh] w-full px-4">
         <div className="w-full">
            <DataTable columns={columns} data={data} />
         </div>
      </div>
   );
};