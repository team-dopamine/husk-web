import axios, { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';

interface CustomHeaders {
  'Authorization-Access'?: string;
}

interface ApiErrorResponse {
  message?: string; // 'message' 속성을 정의 (선택적 속성)
}

const api = axios.create({
  baseURL: 'http://54.180.29.79:8080/',
  withCredentials: true, // CORS 요청 시 인증 정보(쿠키 등)를 포함
});

// 요청 인터셉터 설정
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    // 요청을 보내기 전에 실행
    const token: string | null = localStorage.getItem('accessToken');
    console.log('가져온 토큰 : ', token);

    if (token && config.headers) {
      (config.headers as CustomHeaders)['Authorization-Access'] = `Bearer ${token}`;
    }

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
      console.warn('토큰 만료. 로그아웃 처리.');
      localStorage.removeItem('accessToken');
      alert('세션이 만료되었습니다. 다시 로그인해주세요.');
      window.location.href = '/sign-in';
    }
    return Promise.reject(error);
  }
);

export default api;
