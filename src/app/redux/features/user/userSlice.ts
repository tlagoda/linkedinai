import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import { db } from "../../../../../firebase";
import app from "../../../../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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

export const initializeAuthListener = (): AppThunk => (dispatch) => {
  const auth = getAuth(app);
  
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const docRef: any = doc(db, "users", user.uid);
      const myDoc: any = await getDoc(docRef);

      if (myDoc.exists) {
        const userData = myDoc.data();
        const userProfileData = {
          hasAuthorizedLinkedIn: userData.hasAuthorizedLinkedIn,
          linkedInProfilePicUrl: userData.linkedInPP,
          uid: user.uid,
          email: userData.email,
        };
        dispatch(updateUser(userProfileData));
      }
    } else {
      dispatch(clearUser());
    }
  });
};

export const { setUser, updateUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
