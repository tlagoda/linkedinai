import React from 'react';
import { User } from 'firebase/auth';

interface AuthContextProps {
  currentUser: User | null;
}

export const AuthContext = React.createContext<AuthContextProps>({ currentUser: null });
