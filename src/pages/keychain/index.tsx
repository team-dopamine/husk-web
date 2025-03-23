import Card from '@components/dashboard/cards/keychain-card';
import RegisterModal from '@components/dashboard/modals/register-modal';
import KeychainReadModal from '@components/dashboard/modals/keychain-read-modal';
import RegisterCard from '@components/dashboard/cards/register-card';
import getKeychain from 'api/keychains/keychain-read';
import { useCallback, useEffect, useState } from 'react';
import { KeychainContainer } from './index.style';

interface KeychainResponse {
  id?: number;
  name: string;
}

const KeychainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReadModalOpen, setIsReadModalOpen] = useState(false);
  const [responseData, setResponseData] = useState<KeychainResponse[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const fetchKeychain = useCallback(async () => {
    try {
      const response = await getKeychain();
      setResponseData(response);
    } catch (error) {
      console.error('키체인 데이터를 불러오는 중 오류 발생:', error);
    }
  }, []);

  useEffect(() => {
    fetchKeychain();
  }, responseData);

  const selectedData = responseData.find((item) => item.id === selectedId);

  return (
    <KeychainContainer style={{ marginTop: '176px', marginLeft: '280px' }}>
      {responseData.map((item, index) => (
        <Card
          key={item.id}
          title={`${item.name}`}
          label={`TSP`}
          onClick={() => {
            setSelectedId(item.id ?? null);
            setIsReadModalOpen(true);
          }}
        />
      ))}

      <RegisterCard onClick={() => setIsModalOpen(true)} />

      <RegisterModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          fetchKeychain();
        }}
        fields={[
          { label: 'Name', placeholder: 'Enter name' },
          { label: 'Private Key (Contents)', placeholder: 'Enter key' },
        ]}
      />

      <KeychainReadModal
        isOpen={isReadModalOpen}
        onClose={() => setIsReadModalOpen(false)}
        fields={[
          { label: 'Name', placeholder: selectedData?.name || '데이터 없음' },
          { label: 'Private Key (Contents)', placeholder: `*********` },
        ]}
        id={selectedId ?? undefined}
      />
    </KeychainContainer>
  );
};

export default KeychainPage;
