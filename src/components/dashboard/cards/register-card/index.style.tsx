import styled from 'styled-components';
import { Card } from 'antd';

export const CardStyle = styled(Card).attrs({
  styles: { body: { padding: 0 } },
})`
  display: flex;
  flex-direction: column;
  width: 335px;
  height: 140px;
  border-radius: 6px;
  border: 1px dashed rgba(0, 0, 0, 0.1);
  background: #fff;
  justify-content: center;
  align-items: center;
`;

export const Container = styled(CardStyle)`
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;
