import { Button } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

export const Link = styled(Button)`
  border-radius: 0;
  padding: 0;
  height: auto;
  border: none;
  background: transparent;
  position: relative;

  &:hover,
  &:focus {
    background: transparent;
    border: none;
  }
`;
