import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getSshConnections, { SshConnection } from 'api/ssh-connections/ssh-read';
import postSshSession from 'api/ssh-connections/ssh-session';
import RegisterCard from '@components/dashboard/cards/register-card';
import RegisterModal from '@components/dashboard/modals/register-modal';
import { SshConnectionContainer } from './index.style';
import SshConnectionCard from '@components/dashboard/cards/sshConnection-card';

const SshConnectionPage = () => {
  const [sshConnections, setSshConnections] = useState<SshConnection[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      navigate('/terminal', { state: { connectionId: id } });
    } catch (error) {
      console.error('SSH 접속 요청 실패:', error);
    }
  };

  return (
    <SshConnectionContainer>
      {sshConnections.map(({ id, name, host, port }) => (
        <SshConnectionCard key={id} id={id} title={name} label={`${host}:${port}`} onClick={() => handleSshSession(id)} />
      ))}
      <RegisterCard onClick={() => setIsModalOpen(true)} />
      <RegisterModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        currentPage={'connections'}
        fields={[
          { label: 'Connection Name', placeholder: 'Name' },
          { label: 'Host IP', placeholder: 'Value' },
          { label: 'Port', placeholder: 'Value' },
          { label: 'Username', placeholder: 'Value' },
          { label: 'KeyChain Name', placeholder: 'Value' },
        ]}
      />
    </SshConnectionContainer>
  );
};

export default SshConnectionPage;
