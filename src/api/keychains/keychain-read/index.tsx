import api from 'api/axios';
import { AxiosError } from 'axios';

interface KeychainResponse {
  id: number;
  name: string;
}

interface ErrorResponse {
  message?: string;
}

const getKeychain = async (): Promise<KeychainResponse[]> => {
  try {
    const response = await api.get<KeychainResponse[]>('keychains', {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      if (error.response) {
        const errorMessage = (error.response.data as ErrorResponse)?.message || '저장에 실패했습니다';
        throw new Error(errorMessage);
      } else if (error.request) {
        throw new Error('네트워크 문제 또는 서버가 응답하지 않습니다.');
      }
    }
    throw new Error('알 수 없는 오류가 발생했습니다.');
  }
};

export default getKeychain;
