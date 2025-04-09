import api from 'api/axios';
import { AxiosError } from 'axios';
import { getStoredToken } from 'api/context/auth-util';

export interface SshConnection {
  id: number;
  name: string;
  host: string;
  port: string;
}

interface ErrorResponse {
  message: string;
}

const getSshConnections = async (): Promise<SshConnection[]> => {
  try {
    const token = getStoredToken();
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    const { data } = await api.get<SshConnection[]>('/connections', { headers });

    return data.map((item) => ({
      id: item.id,
      name: item.name,
      host: item.host,
      port: item.port,
    }));
  } catch (error: unknown) {
    const err = error as AxiosError<ErrorResponse>;

    if (err.response?.data?.message) {
      throw new Error(err.response.data.message);
    }

    if (err.request) {
      throw new Error('네트워크 문제 또는 서버가 응답하지 않습니다.');
    }

    throw new Error('알 수 없는 오류가 발생했습니다.');
  }
};

export default getSshConnections;
