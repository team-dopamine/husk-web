import { Button } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  border-top: 1px solid #e8e8e8;
`;

export const Divider = styled.div`
  width: 1px;
  height: 20px;
  background: #e8e8e8;
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
