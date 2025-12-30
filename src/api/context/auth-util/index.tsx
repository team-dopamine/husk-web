export const getStoredToken = () => {
  try {
    return sessionStorage.getItem('accessToken');
  } catch (error) {
    console.error('스토리지에서 토큰 읽는 중', error);
    sessionStorage.removeItem('accessToken');
    return null;
  }
};

export const getStoredRefreshToken = () => {
  try {
    return sessionStorage.getItem('refreshToken');
  } catch (error) {
    console.error('스토리지에서 리프레시 토큰 읽는 중', error);
    sessionStorage.removeItem('refreshToken');
    return null;
  }
};
export const saveToken = (token: string) => {
  sessionStorage.setItem('accessToken', token);
};

export const saveRefreshToken = (refreshtoken: string) => {
  sessionStorage.setItem('refreshToken', refreshtoken);
};

export const removeToken = () => {
  try {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');
  } catch (error) {
    console.error('스토리지에서 토큰 삭제 중 오류 발생:', error);
  }
};
