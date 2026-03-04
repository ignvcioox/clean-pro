'use client';
import { useEffect, useState } from 'react';
import { Button, Input } from '@/modules/shared/components/ui';
import { DataTable } from '@/modules/shared/components/ui/data-table';
import { columns } from './columns';
import { useUsersStore } from '@/modules/dashboard/hooks/use-users-store';
import { toast } from 'sonner';

export default function AdminsPage() {
  const {
    users,
    pages,
    isLoading,
    errorMessage,
    startLoadingUsers,
    startDeleteUser,
    startClearErrorMessage,
  } = useUsersStore();

  const [searchTerm, setSearchTerm] = useState('');
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 });

  useEffect(() => {
    const offset = pagination.pageIndex * pagination.pageSize;
    const timer = setTimeout(() => {
      startLoadingUsers(pagination.pageSize, offset, searchTerm);
    }, 500);
    return () => clearTimeout(timer);
  }, [pagination.pageIndex, pagination.pageSize, searchTerm]);

  const onSearchChange = (value: string) => {
    setSearchTerm(value);
    setPagination((prev) => ({ ...prev, pageIndex: 0 }));
  };

  const handleRemoveUser = async (id: string, name: string) => {
    const isDeleted = await startDeleteUser(id);
    if (!isDeleted) return;
    toast.success('El usuario ha sido eliminado');
  };

  useEffect(() => {
    if (!errorMessage) return;
    toast.error(errorMessage);
    const timer = setTimeout(startClearErrorMessage, 1500);
    return () => clearTimeout(timer);
  }, [errorMessage]);

  return (
    <div className="flex min-h-[80vh] w-full flex-col items-center justify-center px-8 py-10">
      <div className="flex w-full flex-col gap-4">
        <div className="flex w-full items-end justify-between gap-4">
          <div className="w-full max-w-sm">
            <h1 className="text-xl font-semibold text-primary">
              Gestión de administradores
            </h1>
            <Input
              placeholder="Buscar"
              value={searchTerm}
              onChange={(event) => onSearchChange(event.target.value)}
            />
          </div>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm">
            <span className="mr-1">+</span>
            Nuevo Administrador
          </Button>
        </div>

        <div className="w-full">
          <DataTable
            columns={columns}
            data={users}
            isLoading={isLoading}
            pageCount={pages}
            pagination={pagination}
            setPagination={setPagination}
          />
        </div>
      </div>
    </div>
  );
}
