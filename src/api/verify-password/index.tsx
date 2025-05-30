import api from 'api/axios';
import { AxiosError } from 'axios';

interface RequestData {
  currentPassword?: string;
}

interface ErrorResponse {
  message?: string;
}

const postPasswordVerify = async (data: RequestData): Promise<void> => {
  try {
    const response = await api.post(
      'auth/password/verify',
      {
        currentPassword: data.currentPassword,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = (error.response.data as ErrorResponse)?.message || '비밀번호를 다시 입력하세요';
      throw new Error(errorMessage);
    } else if (error instanceof AxiosError && error.request) {
      throw new Error('네트워크 문제 또는 서버가 응답하지 않습니다.');
    } else {
      throw new Error('알 수 없는 오류가 발생했습니다.');
    }
  }
};

export default postPasswordVerify;
