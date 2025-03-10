import styled from 'styled-components';
import { Button } from 'antd';

export const Container = styled.div`
  display: flex;
  width: 272px;
  height: 40px;
  align-items: center;
  background-color: #222;
  border-radius: 20px;
  padding: 10px 20px;
`;

export const ButtonStyle = styled(Button)`
  background-color: #2c2c2c;
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  padding: 5px 10px;

  &:hover {
    opacity: 0.7;
  }
`;

export const ActionButton = styled.button`
  width: 272px;
  height: 40px;
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  padding: 5px 10px;
  outline: none;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 20px;
  background-color: white;
  margin: 0 10px;
`;
