import styled from 'styled-components';
import { Card } from 'antd';
import { MoreVertical } from 'lucide-react';

export const CardStyle = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 316px;
  height: 140px;
  padding-bottom: 16px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
`;

export const Container = styled(CardStyle)`
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.div`
  color: #000;
  font-size: 20px;
  font-weight: 400;
`;

export const Title = styled.span`
  color: #000;
  font-size: 25px;
  font-weight: 600;
`;

export const MoreButton = styled(MoreVertical)`
  position: relative;
  top: -25px; /* 아이콘을 조금 위로 이동 */
  left: 20px;
`;
