import api from 'api/axios';
import { getStoredToken } from 'api/context/auth-util';
import { AxiosError } from 'axios';

interface ErrorResponse {
  message?: string;
}

const postSshSession = async (id: number): Promise<void> => {
  const token = getStoredToken();
  if (!token) {
    throw new Error('로그인이 필요합니다.');
  }

  try {
    const response = await api.post(
      `connections/${id}/ssh-session`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    alert(response.data.message);
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

export default postSshSession;
