"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  user: AuthenticatedUser | null;
}

export type AuthenticatedUser = {
  uid: string;
  email: string;
  displayName: string;
};

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = {
        uid: action.payload.uid,
        email: action.payload.email,
        displayName: action.payload.displayName,
      };
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
