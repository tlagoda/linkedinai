// userSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import { db } from "../../../../../firebase";
import app from "../../../../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

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

export const fetchUserProfile = (): AppThunk => async (dispatch) => {
  try {
    const auth = getAuth(app);
    const user = auth.currentUser;
    if (user) {
      const docRef: any = doc(db, "users", user.uid);
      const myDoc: any = await getDoc(docRef);

      if (myDoc.exists) {
        const userData = myDoc.data();
        const userProfileData = {
          hasAuthorizedLinkedIn: userData.hasAuthorizedLinkedIn,
          linkedInProfilePictureUrl: userData.linkedInPP,
          uid: user.uid,
          email: userData.email,
        };
        dispatch(updateUser(userProfileData));
      }
    }
  } catch (error) {
    console.error("Error fetching user profile:", error);
  }
};

export const { setUser, updateUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
