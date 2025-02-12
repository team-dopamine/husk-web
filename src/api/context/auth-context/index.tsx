import { createContext } from 'react';

interface AuthContextType {
  accessToken: string | null;
  isLoggedIn: boolean;
  login: (token: string) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
