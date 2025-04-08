import RegisterModal from '@components/dashboard/modals/register-modal';
import KeychainReadModal from '@components/dashboard/modals/keychain-read-modal';
import RegisterCard from '@components/dashboard/cards/register-card';
import KeychainCard from '@components/dashboard/cards/keychain-card';
import getKeychain from 'api/keychains/keychain-read';
import { useCallback, useEffect, useState } from 'react';
import { KeychainContainer } from './index.style';

interface KeychainResponse {
  id?: number;
  name: string;
  content: string;
}

const KeychainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReadModalOpen, setIsReadModalOpen] = useState(false);
  const [responseData, setResponseData] = useState<KeychainResponse[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const fetchKeychain = useCallback(async () => {
    try {
      const response = await getKeychain();
      const extendedResponse = response.map((item) => ({
        ...item,
        content: '',
      }));
      setResponseData(extendedResponse);
    } catch (error) {
      console.error('키체인 데이터를 불러오는 중 오류 발생:', error);
    }
  }, []);

  useEffect(() => {
    fetchKeychain();
  }, [fetchKeychain]);

  const selectedData = responseData.find((item) => item.id === selectedId);

  return (
    <KeychainContainer style={{ marginTop: '176px', marginLeft: '280px' }}>
      {responseData.map((item) => (
        <KeychainCard
          key={item.id}
          id={item.id}
          title={`Type PEM`}
          label={item.name}
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

      {selectedData && (
        <KeychainReadModal
          isOpen={isReadModalOpen}
          onClose={() => setIsReadModalOpen(false)}
          onSuccess={fetchKeychain}
          fields={[
            { label: 'Name', placeholder: selectedData.name, type: 'text' },
            {
              label: 'Private Key (Contents)',
              placeholder: selectedData.content,
              type: 'password',
            },
          ]}
          id={selectedData?.id}
        />
      )}
    </KeychainContainer>
  );
};

export default KeychainPage;
