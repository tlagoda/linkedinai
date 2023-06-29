// userSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  uid: string;
  email: string;
  hasAuthorizedLinkedIn: boolean;
  linkedInProfilePicUrl: string;
}

const initialState: UserState = {
  uid: "",
  email: "",
  hasAuthorizedLinkedIn: false,
  linkedInProfilePicUrl: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    updateUser: (state, action: PayloadAction<Partial<UserState>>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    clearUser: () => initialState,
  },
});

export const { setUser, updateUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
