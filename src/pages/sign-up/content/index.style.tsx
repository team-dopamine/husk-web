import styled from 'styled-components';
import { Button } from 'antd';

const ButtonStyle = styled(Button)`
  width: 240px;
  height: 48px;
  border-radius: 8px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 300px);
  flex: 1;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 48px;
  text-align: center;
`;
export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 60px;
`;
export const PreviousButton = styled(ButtonStyle)`
  color: black;
  text-decoration: none;
  border: 1px solid black;
  background-color: white;

  &:hover {
    background-color: gray !important;
    color: white !important;
    border: none;
  }
`;

export const NextButton = styled.button<{ disabled: boolean }>`
  width: 240px;
  height: 48px;
  border-radius: 8px;
  border: ${({ disabled }) => (disabled ? '1px #d9d9d9' : '1px solid black')};
  background-color: ${({ disabled }) => (disabled ? '#d9d9d9' : 'black')};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`;
