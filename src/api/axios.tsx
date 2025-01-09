import axios, { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';

interface ApiErrorResponse {
  message?: string;
}

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
});

// 요청 인터셉터 설정
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    console.log('요청 인터셉터 실행');
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => Promise.reject(error)
);

api.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  (error: AxiosError<ApiErrorResponse>): Promise<AxiosError> => {
    // 응답 에러 처리
    const errorMessage = error.response?.data?.message;
    if (error.response?.status === 401 && errorMessage === '토큰이 만료되었습니다') {
      console.warn('인증 실패. 로그아웃 처리.');
      alert('세션이 만료되었습니다. 다시 로그인해주세요.');
      window.location.href = '/sign-in';
    }
    return Promise.reject(error);
  }
);

export default api;
