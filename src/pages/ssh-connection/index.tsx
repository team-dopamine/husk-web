import getSshConnections from 'api/ssh-connections';
import { useCallback, useEffect, useState } from 'react';
import { SshConnectionContainer } from './index.style';
import KeychainCard from '@components/dashboard/cards/keychain-card';

interface SshResponse {
  id: number;
  name: string;
  host: string;
  port: string;
}

const SshConnectionPage = () => {
  const [sshData, setSshData] = useState<SshResponse[]>([]);
  const fetchSshConnections = useCallback(async () => {
    try {
      const response = await getSshConnections();
      setSshData(response);
    } catch (error) {
      console.error('SSH 연결 목록을 불러오는 중 오류 발생: ', error);
    }
  }, []);

  useEffect(() => {
    fetchSshConnections();
  }, [fetchSshConnections]);

  return (
    <SshConnectionContainer style={{ marginTop: '176px', marginLeft: '280px' }}>
      {sshData.map((item) => (
        <KeychainCard key={item.id} id={item.id} title={item.name} label={`${item.host}:${item.port}`} />
      ))}
    </SshConnectionContainer>
  );
};

export default SshConnectionPage;
