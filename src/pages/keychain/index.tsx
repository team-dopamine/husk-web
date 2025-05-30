import RegisterModal from '@components/dashboard/modals/register-modal';
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
  const [responseData, setResponseData] = useState<KeychainResponse[]>([]);

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

  return (
    <KeychainContainer style={{ marginTop: '176px', marginLeft: '280px' }}>
      {responseData.map((item) => (
        <KeychainCard key={item.id} id={item.id} title={`Type PEM`} label={item.name} />
      ))}

      <RegisterCard onClick={() => setIsModalOpen(true)} />
      <RegisterModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          fetchKeychain();
        }}
        currentPage="keychain"
        fields={[
          { label: 'Name', placeholder: 'Enter name', type: 'text' },
          { label: 'Private Key (Contents)', placeholder: 'Register your key pair', type: 'textarea' },
        ]}
      />
    </KeychainContainer>
  );
};

export default KeychainPage;
