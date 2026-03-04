'use client';

import { columns } from '@/app/dashboard/users/columns';
import { toast } from 'sonner';

import { useUsersStore } from '@/modules/dashboard/hooks/use-users-store';
import { useDataTable } from '@/modules/shared/hooks/use-custom-table';

import { DataTable, Input } from '@/modules/shared/components/ui';

export default function UsersPage() {
  const {
    users,
    pages,
    isLoading,
    errorMessage,
    startLoadingUsers,
    startDeleteUser,
    startClearErrorMessage,
  } = useUsersStore();

  const { data, pagination, searchTerm, onSearchChange, setPagination } =
    useDataTable({
      fetchAction: startLoadingUsers,
      data: users,
      pages,
      isLoading,
      errorMessage,
      clearErrorAction: startClearErrorMessage,
      initialPageSize: 5,
    });

  const handleRemoveUser = async (id: string, name: string) => {
    const isDeleted = await startDeleteUser(id);
    if (!isDeleted) return;
    toast.success(`El usuario ${name} ha sido eliminado`);
  };

  return (
    <div className="flex min-h-[80vh] w-full flex-col items-center justify-center px-8 py-10">
      <div className="flex w-full flex-col gap-4">
        <h1 className="text-xl font-semibold text-primary">
          Gestion de usuarios
        </h1>

        <Input
          placeholder="Buscar"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          className="w-fit"
        />

        <DataTable
          columns={columns}
          data={data}
          isLoading={data.length === 0 && isLoading}
          pageCount={pages}
          pagination={pagination}
          setPagination={setPagination}
          meta={{
            removeUser: handleRemoveUser,
          }}
        />
      </div>
    </div>
  );
}
