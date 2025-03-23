import React from 'react';
import { Container, Label, Title, Content, ContentWrapper, MoreButton } from './index.style';

type CardProps = {
  title?: string;
  label?: string;
  onClick?: () => void;
  className?: string;
};

const KeychainCard: React.FC<CardProps> = ({ title, label, onClick, className = '' }) => {
  return (
    <Container className={className} onClick={onClick}>
      <ContentWrapper>
        <Content>
          {label && <Title>Type {label}</Title>}
          {title && <Label>{title}</Label>}
        </Content>
        <MoreButton size={33} color="#333" />
      </ContentWrapper>
    </Container>
  );
};

export default KeychainCard;
