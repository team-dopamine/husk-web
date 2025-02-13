import { useContext } from 'react';
import { AuthContext } from 'api/context/auth-context';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth 불러오기 실패');
  }
  return context;
};
