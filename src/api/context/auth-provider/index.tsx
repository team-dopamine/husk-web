import { ReactNode, useCallback, useEffect, useState } from 'react';
import { AuthContext } from 'api/context/auth-context';
import { getStoredToken, saveToken } from 'api/context/auth-util';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  useEffect(() => {
    const storedToken = getStoredToken();

    if (storedToken) setAccessToken(storedToken);
  }, []);

  const login = useCallback((token: string) => {
    setAccessToken(token);
    saveToken(token);
  }, []);

  return <AuthContext.Provider value={{ accessToken, isLoggedIn: !!accessToken, login }}>{children}</AuthContext.Provider>;
};
