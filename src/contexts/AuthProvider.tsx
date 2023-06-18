"use client";

import React, { useState, useEffect, ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import { User, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

interface AuthProviderProps {
  children: ReactNode;
}

const getUserData = async (userId: string) => {
  const usersCollectionRef = collection(db, "users");
  const usersQuery = query(usersCollectionRef, where("userId", "==", userId));
  const querySnapshot = await getDocs(usersQuery);

  if (!querySnapshot.empty) {
    const userDoc = querySnapshot.docs[0];
    return userDoc.data();
  } else {
    return null;
  }
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [hasConnectedLinkedIn, setHasConnectedLinkedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      setLoading(false);
      if (user) {
        const userData = await getUserData(user.uid);
        if (userData && userData.linkedinEmail) {
          setHasConnectedLinkedIn(true);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      setCurrentUser(null);
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        logout,
        hasConnectedLinkedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
