import React, { useState } from 'react';
import { Container, Label, Title, Content, ContentWrapper, MoreButton } from '@components/dashboard/cards/keychain-card/index.style';
import SshConnectionReadModal from '@components/dashboard/modals/sshConnection';
import getSshConnectionDetail, { SshConnectionDetail } from 'api/ssh-connections/ssh-detail-read';

type Props = {
  id: number;
  title: string;
  label: string;
  onClick?: () => void;
  className?: string;
};

const SshConnectionCard: React.FC<Props> = ({ id, title, label, onClick, className = '' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [connectionValue, setConnectionValue] = useState<SshConnectionDetail[]>([]);
  const [inputValues, setInputValues] = useState<string[]>([]);

  const handleOpen = async (id: number) => {
    try {
      const response = await getSshConnectionDetail(id);

      setConnectionValue([response]);
      setInputValues([response.name, response.host, response.port, response.username, response.keyChainName]);
      setIsModalOpen(true);
    } catch (error) {
      console.error('SSH 접속 요청 실패:', error);
    }
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
              handleOpen(id);
            }}
          />
        </ContentWrapper>
      </Container>

      <SshConnectionReadModal
        id={id}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        fields={[
          { label: 'Connection Name', placeholder: inputValues[0] ?? '' },
          { label: 'Host IP', placeholder: inputValues[1] ?? '' },
          { label: 'Port', placeholder: inputValues[2] ?? '' },
          { label: 'Username', placeholder: inputValues[3] ?? '' },
          { label: 'Key Pair Name', placeholder: inputValues[4] ?? '' },
        ]}
      />
    </>
  );
};

export default SshConnectionCard;
