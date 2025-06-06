import styled from 'styled-components';
import { Card } from 'antd';
import { MoreVertical } from 'lucide-react';

export const Container = styled(Card)`
  width: 335px;
  height: 140px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding-bottom: 16px;
  background: #fff;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
  cursor: pointer;
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
  color: var(--main-color);
  font-size: 20px;
  font-weight: 400;
`;

export const Title = styled.span`
  color: var(--main-color);
  font-size: 25px;
  font-weight: 600;
`;

export const MoreButton = styled(MoreVertical)`
  position: relative;
  top: -25px;
  left: 20px;
  &:hover {
    transform: scale(1.07);
  }
`;
