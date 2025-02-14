import api from 'api/axios';
import { AxiosError } from 'axios';

interface ErrorResponse {
  message: string;
}

interface JwtTokenDto {
  grantType: string;
  accessToken: string;
  refreshToken: string;
}

interface GithubAuthResponse {
  headers: Record<string, unknown>;
  body: {
    message: string;
    jwtTokenDto: JwtTokenDto;
  };
  statusCode: string;
  statusCodeValue: number;
}

const getGithub = async (code: string | null): Promise<GithubAuthResponse> => {
  try {
    const response = await api.get<GithubAuthResponse>(`/auth/sign-in?type=github&code=${code}`);
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

export default getGithub;
