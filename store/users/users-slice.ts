import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  User,
  UsersResponse,
} from '@/modules/shared/interfaces/user.interface';

interface UserState {
  users: User[];
  isLoading: boolean;
  count: number;
  pages: number;
  errorMessage?: string;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  count: 0,
  pages: 0,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    onLoadingUsers: (state) => {
      state.isLoading = true;
    },
    onSetUsers: (state, { payload }: PayloadAction<UsersResponse>) => {
      state.isLoading = false;
      state.users = payload.users;
      state.count = payload.meta.count;
      state.pages = payload.meta.pages;
    },
    onDeleteUser: (state, { payload }: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== payload);
      state.count -= 1;
    },
    onSetError: (state, { payload }: PayloadAction<string>) => {
      state.errorMessage = payload;
      state.isLoading = false;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});

export const {
  onLoadingUsers,
  onSetUsers,
  onDeleteUser,
  onSetError,
  clearErrorMessage,
} = usersSlice.actions;
