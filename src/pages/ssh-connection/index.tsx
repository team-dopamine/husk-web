import { useEffect, useState } from 'react';
import getSshConnections, { SshConnection } from 'api/ssh-connections/ssh-read';
import { SshConnectionContainer } from './index.style';
import KeychainCard from '@components/dashboard/cards/keychain-card';

const SshConnectionPage = () => {
  const [sshConnections, setSshConnections] = useState<SshConnection[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSshConnections();
        setSshConnections(data);
      } catch (error) {
        console.error('SSH 연결 목록을 불러오는 중 오류 발생:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <SshConnectionContainer>
      {sshConnections.map(({ id, name, host, port }) => (
        <KeychainCard key={id} id={id} title={name} label={`${host}:${port}`} />
      ))}
    </SshConnectionContainer>
  );
};

export default SshConnectionPage;
