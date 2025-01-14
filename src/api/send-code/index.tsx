import api from 'api/axios';
import { AxiosError } from 'axios';

interface RentalRequestData {
  email: string;
  code: string;
}

interface ErrorResponse {
  code?: string;
  message?: string;
}

const postSendCode = async (data: RentalRequestData): Promise<void> => {
  console.log('data', data);

  try {
    const response = await api.post('auth/send-code', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
    alert(response.data.message);
  } catch (error: unknown) {
    console.error('전체 에러 객체:', error);

    if (error instanceof AxiosError && error.response) {
      const errorCode = (error.response.data as ErrorResponse)?.code;
      const errorMessage = (error.response.data as ErrorResponse)?.message;

      console.error('응답 상태 코드:', error.response.status);
      console.error('응답 에러 코드:', errorCode);
      console.error('응답 에러 메시지:', errorMessage);

      switch (errorCode) {
        case 'AE1':
          throw new Error('해당 요청에 대한 권한이 없습니다.');
        case 'NE2':
          throw new Error('잘못된 입력입니다. 필수 값을 확인해주세요.');
        default:
          throw new Error(`예상치 못한 오류 발생: ${errorMessage || '오류 메시지가 없습니다.'}`);
      }
    } else if (error instanceof AxiosError && error.request) {
      console.error('요청 객체:', error.request);
      throw new Error('네트워크 문제 또는 서버가 응답하지 않습니다.');
    } else if (error instanceof Error) {
      console.error('요청 설정 오류:', error.message);
      throw new Error('요청 설정 중 오류가 발생했습니다.');
    } else {
      throw new Error('알 수 없는 오류가 발생했습니다.');
    }
  }
};

export default postSendCode;
