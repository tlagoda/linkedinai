import React from 'react';
import { User } from 'firebase/auth';

interface AuthContextProps {
  currentUser: User | null;
  logout: () => void; 
}

export const AuthContext = React.createContext<AuthContextProps>({ 
  currentUser: null,
  logout: () => {},
});

