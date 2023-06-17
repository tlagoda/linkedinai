"use client";

import React, { useState, useEffect, ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import { User, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import "../../firebase";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
