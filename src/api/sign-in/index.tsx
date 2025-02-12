import api from 'api/axios';
import { AxiosError } from 'axios';

interface SignInData {
  email: string;
  password: string;
}

interface SignInResponse {
  message?: string;
  accessToken?: string;
  jwtTokenDto?: any;
}

interface ErrorResponse {
  message?: string;
}

const postSignIn = async (data: SignInData): Promise<SignInResponse> => {
  try {
    const response = await api.post<SignInResponse>(
      'auth/sign-in',
      {
        email: data.email,
        password: data.password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = (error.response.data as ErrorResponse)?.message || '로그인 중 오류가 발생했습니다.';
      throw new Error(errorMessage);
    } else if (error instanceof AxiosError && error.request) {
      throw new Error('네트워크 문제 또는 서버가 응답하지 않습니다.');
    } else {
      throw new Error('알 수 없는 오류가 발생했습니다.');
    }
  }
};

export default postSignIn;
