import api from 'api/axios';
import { AxiosError } from 'axios';

interface ErrorResponse {
  message: string;
}

const getGoogle = async (code: string | null): Promise<number> => {
  try {
    const response = await api.get(`/auth/sign-in?type=google&code=${code}`);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = (error.response.data as ErrorResponse)?.message || '오류가 발생했습니다.';
      throw new Error(errorMessage);
    } else if (error instanceof AxiosError && error.request) {
      throw new Error('네트워크 문제 또는 서버가 응답하지 않습니다.');
    } else {
      throw new Error('알 수 없는 오류가 발생했습니다.');
    }
  }
};

export default getGoogle;
