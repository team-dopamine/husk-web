import styled from 'styled-components';
import { Button } from 'antd';

interface NextButtonProps {
  disabled?: boolean;
}

const ButtonStyle = styled(Button)`
  width: 240px;
  height: 48px;
  border-radius: 8px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;

  ${({ disabled }) =>
    disabled &&
    `
    pointer-events: none;
  `}
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 60px;
`;

export const PreviousButton = styled(ButtonStyle)`
  color: black;
  border: 1px solid black;
  background-color: white;
  text-decoration: none;

  &:hover {
    background-color: gray !important;
    color: white !important;
    border: none;
  }
`;

export const NextButton = styled(ButtonStyle)<NextButtonProps>`
  background-color: ${({ disabled }) => (disabled ? '#d9d9d9' : 'black')};
  color: ${({ disabled }) => (disabled ? '#a6a6a6' : 'white')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  &:hover {
    background-color: gray !important;
    color: white !important;
    border: none;
  }
`;
