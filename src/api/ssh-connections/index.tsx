import api from 'api/axios';
import { AxiosError } from 'axios';
import { getStoredToken } from 'api/context/auth-util';

interface RequestData {
  id: number;
  name: string;
  host: string;
  port: string;
  accessToken: string;
}

interface ErrorResponse {
  message: string;
}

const getSshConnections = async (): Promise<RequestData[]> => {
  const accessToken = getStoredToken();
  try {
    const response = await api.get<RequestData[]>('connections', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log('🔍 response:', response);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      if (error.response) {
        const errorMessage = (error.response.data as ErrorResponse)?.message || '오류가 발생했습니다.';
        throw new Error(errorMessage);
      } else if (error.request) {
        throw new Error('네트워크 문제 또는 서버가 응답하지 않습니다.');
      }
    }
    throw new Error('알 수 없는 오류가 발생했습니다.');
  }
};

export default getSshConnections;
