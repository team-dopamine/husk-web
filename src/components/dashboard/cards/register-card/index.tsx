import React from 'react';
import { Container } from './index.style';
import { PlusOutlined } from '@ant-design/icons';

type CardProps = {
  title?: string;
  label?: string;
  onClick?: () => void;
  className?: string;
};

const RegisterCard: React.FC<CardProps> = ({ onClick, className = '' }) => {
  return (
    <Container className={className} onClick={onClick}>
      <PlusOutlined
        style={{
          fontSize: '60px',
          color: 'rgba(0, 0, 0, 0.1)',
        }}
      />
    </Container>
  );
};

export default RegisterCard;
