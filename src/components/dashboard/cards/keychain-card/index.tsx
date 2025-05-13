import React, { useEffect, useState } from 'react';
import { Container, Label, Title, Content, ContentWrapper, MoreButton } from './index.style';
import KeychainReadModal from '@components/dashboard/modals/keychain-read-modal';
import getKeychainDecrypt from 'api/keychains/keychain-decrypt';

type CardProps = {
  title?: string;
  label?: string;
  onClick?: () => void;
  className?: string;
  id?: number;
};

const KeychainCard: React.FC<CardProps> = ({ title, label, className = ' ', id, onClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [decryptedContent, setDecryptedContent] = useState('');

  useEffect(() => {
    const fetchDecryptedValue = async () => {
      try {
        const response = await getKeychainDecrypt(id);
        setDecryptedContent(response.content);
      } catch (error) {
        console.error('복호화 실패:', error);
      }
    };

    if (isModalOpen) {
      fetchDecryptedValue();
    }
  }, [isModalOpen, id]);

  const handleOpen = async () => {
    try {
      const response = await getKeychainDecrypt(id);
      setDecryptedContent(response.content);
      setIsModalOpen(true);
    } catch (err) {
      console.error('복호화 실패', err);
    }
  };
  return (
    <>
      <Container
        className={className}
        onClick={() => {
          console.log('✅ 카드 클릭됨');
          onClick?.();
        }}
      >
        <ContentWrapper>
          <Content>
            {label && <Title>{label}</Title>}
            {title && <Label>{title}</Label>}
          </Content>
          <MoreButton
            size={33}
            color="#333"
            onClick={(e) => {
              e.stopPropagation();
              handleOpen();
            }}
          />
        </ContentWrapper>
      </Container>{' '}
      <KeychainReadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        fields={[
          { label: 'Name', placeholder: label || '데이터 없음', type: 'text' },
          { label: 'Private Key (Contents)', placeholder: decryptedContent || '********', type: 'password' },
        ]}
        id={id}
      />
    </>
  );
};

export default KeychainCard;
