import { useEffect, useState } from 'react';
import getSshConnections, { SshConnection } from 'api/ssh-connections/ssh-read';
import { SshConnectionContainer } from './index.style';
import KeychainCard from '@components/dashboard/cards/keychain-card';
import postSshSession from 'api/ssh-connections/ssh-session';
import { useNavigate } from 'react-router-dom';

const SshConnectionPage = () => {
  const [sshConnections, setSshConnections] = useState<SshConnection[]>([]);
  const navigate = useNavigate();

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

  const handleSshSession = async (id: number) => {
    try {
      await postSshSession(id);
      navigate('/terminal-page', { state: { connectionId: id } });
    } catch (error) {
      console.error('SSH 접속 요청 실패:', error);
    }
  };

  return (
    <SshConnectionContainer>
      {sshConnections.map(({ id, name, host, port }) => (
        <KeychainCard key={id} id={id} title={name} label={`${host}:${port}`} onClick={() => handleSshSession(id)} />
      ))}
    </SshConnectionContainer>
  );
};

export default SshConnectionPage;
