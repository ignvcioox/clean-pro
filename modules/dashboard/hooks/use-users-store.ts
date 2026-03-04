import baseURL from '@/config/axios.config';

import { useAppDispatch, useAppSelector } from '@/store/app-redux';
import {
  onDeleteUser,
  onLoadingUsers,
  onSetError,
  onSetUsers,
  clearErrorMessage,
} from '@/store/users/users-slice';
import { UsersResponse } from '@/modules/shared/interfaces/user.interface';

export const useUsersStore = () => {
  const dispatch = useAppDispatch();

  const { users, isLoading, pages, count, errorMessage } = useAppSelector(
    (state) => state.users,
  );

  const startLoadingUsers = async (limit = 5, offset = 0, term = '') => {
    dispatch(onLoadingUsers());
    try {
      const { data } = await baseURL.get<UsersResponse>('/users', {
        params: { limit, offset, term },
      });
      dispatch(onSetUsers(data));
    } catch (error) {
      console.log('Error loading users:', error);
    }
  };

  const startDeleteUser = async (id: string) => {
    dispatch(clearErrorMessage());
    try {
      await baseURL.delete(`/users/${id}`);
      dispatch(onDeleteUser(id));
    } catch (error: any) {
      const message = error.response?.data?.message;
      dispatch(onSetError(message));
      return false;
    }
  };

  const startClearErrorMessage = () => {
    dispatch(clearErrorMessage());
  };

  return {
    // Propiedades
    users,
    isLoading,
    pages,
    count,
    errorMessage,

    // Métodos
    startLoadingUsers,
    startDeleteUser,
    startClearErrorMessage,
  };
};
