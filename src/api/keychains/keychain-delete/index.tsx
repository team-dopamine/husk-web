import api from 'api/axios';
import { AxiosError } from 'axios';

interface ErrorResponse {
  message?: string;
}

const patchKeyChainDelete = async (id: number): Promise<void> => {
  try {
    const response = await api.patch(
      `keychains/${id}`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    alert(response.data.message);
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = (error.response.data as ErrorResponse)?.message || '키체인 삭제에 실패했습니다';
      throw new Error(errorMessage);
    } else if (error instanceof AxiosError && error.request) {
      throw new Error('네트워크 문제 또는 서버가 응답하지 않습니다.');
    } else {
      throw new Error('알 수 없는 오류가 발생했습니다.');
    }
  }
};

export default patchKeyChainDelete;
