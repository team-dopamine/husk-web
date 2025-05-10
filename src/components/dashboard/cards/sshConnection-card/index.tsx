import React, { useState } from 'react';
import { Container, Label, Title, Content, ContentWrapper, MoreButton } from '@components/dashboard/cards/keychain-card/index.style';
import SshConnectionReadModal from '@components/dashboard/modals/sshConnection';

type Props = {
  id: number;
  title: string;
  label: string;
  onClick?: () => void;
  className?: string;
};

const SshConnectionCard: React.FC<Props> = ({ id, title, label, onClick, className = '' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Container
        className={className}
        onClick={() => {
          onClick?.();
        }}
      >
        <ContentWrapper>
          <Content>
            <Title>{label}</Title>
            <Label>{title}</Label>
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
      </Container>
      {/* TODO: 추후 api 연결 시 수정 */}
      <SshConnectionReadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentPage="ssh-connection"
        fields={[
          { label: 'Connection Name', placeholder: title },
          { label: 'Host:Port', placeholder: label },
          { label: 'ID', placeholder: id.toString() },
        ]}
      />
    </>
  );
};

export default SshConnectionCard;
