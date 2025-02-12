export const getStoredToken = () => {
  try {
    return localStorage.getItem('accessToken');
  } catch (error) {
    console.error('로컬 스토리지에서 토큰 읽는 중', error);
    localStorage.removeItem('accessToken');
    return null;
  }
};
export const saveToken = (token: string) => {
  localStorage.setItem('accessToken', token);
};
