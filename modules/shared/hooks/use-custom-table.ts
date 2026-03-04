import { useCallback, useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

interface UseDataTableProps<T> {
  fetchAction: (limit: number, offset: number, term: string) => Promise<void>;
  data: T[];
  pages: number;
  isLoading: boolean;
  errorMessage?: string | null;
  clearErrorAction: () => void;
  initialPageSize?: number;
}

export const useDataTable = <T>({
  fetchAction,
  data,
  pages,
  isLoading,
  errorMessage,
  clearErrorAction,
  initialPageSize = 5,
}: UseDataTableProps<T>) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: initialPageSize,
  });

  const fetchActionRef = useRef(fetchAction);

  useEffect(() => {
    fetchActionRef.current = fetchAction;
  }, [fetchAction]);

  const loadData = useCallback(() => {
    const offset = pagination.pageIndex * pagination.pageSize;
    fetchActionRef.current(pagination.pageSize, offset, searchTerm);
  }, [pagination.pageIndex, pagination.pageSize, searchTerm]);

  useEffect(() => {
    const timer = setTimeout(loadData, 500);
    return () => clearTimeout(timer);
  }, [loadData]);

  useEffect(() => {
    if (!errorMessage) return;
    toast.error(errorMessage);
    const timer = setTimeout(clearErrorAction, 2000);
    return () => clearTimeout(timer);
  }, [errorMessage, clearErrorAction]);

  const onSearchChange = (value: string) => {
    setSearchTerm(value);
    setPagination((prev) => ({ ...prev, pageIndex: 0 }));
  };

  return {
    // Estado
    data,
    pages,
    isLoading,
    searchTerm,
    pagination,

    // Metodos
    setPagination,
    onSearchChange,
    refresh: loadData,
  };
};
