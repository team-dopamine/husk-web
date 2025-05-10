import api from 'api/axios';

import { isAxiosError } from 'axios';

interface ErrorResponse {
  message?: string;
}

const deleteSshConnection = async (id: number): Promise<void> => {
  try {
    const response = await api.delete(`connections/${id}`);

    const message = typeof response.data?.message === 'string' ? response.data.message : '삭제가 완료되었습니다.';
    alert(message);
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      if (error.response) {
        const errorMessage = (error.response.data as ErrorResponse)?.message || '삭제에 실패했습니다.';
        throw new Error(errorMessage);
      } else if (error.request) {
        throw new Error('네트워크 문제 또는 서버가 응답하지 않습니다.');
      }
    }
    throw new Error('알 수 없는 오류가 발생했습니다.');
  }
};

export default deleteSshConnection;
