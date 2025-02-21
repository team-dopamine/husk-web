export const getStoredToken = () => {
  try {
    return localStorage.getItem('accessToken');
  } catch (error) {
    console.error('로컬 스토리지에서 토큰 읽는 중', error);
    localStorage.removeItem('accessToken');
    return null;
  }
};

export const getStoredRefreshToken = () => {
  try {
    return localStorage.getItem('refreshToken');
  } catch (error) {
    console.error('로컬 스토리지에서 리프레시 토큰 읽는 중', error);
    localStorage.removeItem('refreshToken');
    return null;
  }
};
export const saveToken = (token: string) => {
  localStorage.setItem('accessToken', token);
};

export const saveRefreshToken = (refreshtoken: string) => {
  localStorage.setItem('refreshToken', refreshtoken);
};

export const removeToken = () => {
  try {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    console.log('로컬 스토리지에서 토큰 삭제 완료.');
  } catch (error) {
    console.error('로컬 스토리지에서 토큰 삭제 중 오류 발생:', error);
  }
};
