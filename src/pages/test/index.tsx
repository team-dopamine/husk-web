import ButtonGroup from '@components/dashboard/button';
import Card from '@components/dashboard/card';
import Modal from '@components/dashboard/modal';
import { useState } from 'react';

const TestPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div style={{ margin: '300px' }}>
      <Card title="KeyPair1" label="TSP" />
      <ButtonGroup />
      <button onClick={() => setIsModalOpen(true)}>모달열기</button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        fields={[
          { label: 'Name', placeholder: 'Enter name' },
          { label: 'Private Key (Contents)', placeholder: 'Enter key' },
        ]}
      />
    </div>
  );
};

export default TestPage;
