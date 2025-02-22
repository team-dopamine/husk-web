import { createContext } from 'react';

interface AuthContextType {
  accessToken: string | null;
  refreshToken: string | null;
  isLoggedIn: boolean;
  login: (token: string, refreshToken: string) => void;
  logout: (token: string, refreshToken: string) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
