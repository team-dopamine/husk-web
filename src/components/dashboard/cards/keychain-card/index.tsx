import React, { useState } from 'react';
import { Container, Label, Title, Content, ContentWrapper, MoreButton } from './index.style';
import KeychainReadModal from '@components/dashboard/modals/keychain-read-modal';

type CardProps = {
  title?: string;
  label?: string;
  onClick?: () => void;
  className?: string;
  id?: number;
};

const KeychainCard: React.FC<CardProps> = ({ title, label, className = ' ', id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Container className={className}>
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
              setIsModalOpen(true);
            }}
          />
        </ContentWrapper>
      </Container>{' '}
      <KeychainReadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        fields={[
          { label: 'Name', placeholder: title || '데이터 없음' },
          { label: 'Private Key (Contents)', placeholder: `*********` },
        ]}
        id={id}
      />
    </>
  );
};

export default KeychainCard;
