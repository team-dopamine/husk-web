import Card from '@components/dashboard/card';
import Modal from '@components/dashboard/modal';
import KeychainReadModal from '@components/dashboard/keychain-read-modal';
import getKeychain from 'api/keychains/keychain-read';
import { useEffect, useState } from 'react';

interface KeychainResponse {
  id?: number;
  name: string;
}

const TestPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReadModalOpen, setIsReadModalOpen] = useState(false);
  const [responseData, setResponseData] = useState<KeychainResponse[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    const fetchKeychain = async () => {
      try {
        const response = await getKeychain();
        setResponseData(response);
      } catch (error) {
        console.error('키체인 데이터를 불러오는 중 오류 발생:', error);
      }
    };
    fetchKeychain();
  }, []);

  const selectedData = responseData.find((item) => item.id === selectedId);

  return (
    <div style={{ margin: '300px' }}>
      {responseData.map((item, index) => (
        <Card key={item.id} title={`KeyPair${index + 1}`} label={`TSP`} />
      ))}

      <button onClick={() => setIsModalOpen(true)}>모달열기</button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        fields={[
          { label: 'Name', placeholder: 'Enter name' },
          { label: 'Private Key (Contents)', placeholder: 'Enter key' },
        ]}
      />

      {responseData.map((item, index) => (
        <button
          key={item.id}
          onClick={() => {
            setSelectedId(item.id ?? null);
            setIsReadModalOpen(true);
          }}
        >
          {`KeyPair${index + 1} 조회`}
        </button>
      ))}

      <KeychainReadModal
        isOpen={isReadModalOpen}
        onClose={() => setIsReadModalOpen(false)}
        fields={[
          { label: 'Name', placeholder: selectedData?.name || '데이터 없음' },
          { label: 'Private Key (Contents)', placeholder: `*********` },
        ]}
        id={selectedId ?? undefined}
      />
    </div>
  );
};

export default TestPage;
