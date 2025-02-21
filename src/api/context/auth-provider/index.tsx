import { ReactNode, useCallback, useEffect, useState } from 'react';
import { AuthContext } from 'api/context/auth-context';
import { getStoredRefreshToken, getStoredToken, removeToken, saveRefreshToken, saveToken } from 'api/context/auth-util';
import postSignOut from 'api/sign-out';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = getStoredToken();
    const storedRefreshToken = getStoredRefreshToken();

    if (storedToken) setAccessToken(storedToken);
    if (storedRefreshToken) setRefreshToken(storedRefreshToken);
  }, []);

  const login = useCallback((token: string, refreshToken: string) => {
    setAccessToken(token);
    setRefreshToken(refreshToken);
    saveToken(token);
    saveRefreshToken(refreshToken);
  }, []);

  const logout = useCallback(async () => {
    if (!accessToken || !refreshToken) {
      console.error('로그아웃 실패: 토큰이 없습니다.');
      return;
    }

    try {
      await postSignOut({ accessToken, refreshToken });

      setAccessToken(null);
      setRefreshToken(null);
      removeToken();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }, [accessToken, refreshToken]);

  return <AuthContext.Provider value={{ accessToken, refreshToken, isLoggedIn: !!accessToken, login, logout }}>{children}</AuthContext.Provider>;
};
