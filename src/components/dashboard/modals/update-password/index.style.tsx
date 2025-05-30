import styled from 'styled-components';
import { Input, Button } from 'antd';

export const InputStyle = styled(Input)`
  width: 492px;
  height: 36px;
  border-radius: 6px;
  padding: 8px 12px 8px 12px;

  &:focus,
  &:hover {
    border: 1px solid gray !important;
  }
  &:disabled {
    border: 1px solid lightgray;
    &:hover {
      border: 1px solid lightgray !important;
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  position: relative;
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 360px;

  display: flex;
  flex-direction: column;
  gap: 30px;
  max-height: 80vh;
  overflow-y: auto;
`;

export const Label = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

export const InputField = styled(InputStyle)`
  width: 100%;
  margin-bottom: 5px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 30px;
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 16px;
  width: 35px;
  height: 35px;
  background: none;
  border: none;
  cursor: pointer;
  margin-bottom: 40px;

  svg {
    width: 100%;
    height: 100%;
    fill: black;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const SubmitButton = styled(Button)`
  background-color: #222;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: none;

  &:hover,
  &:focus {
    background-color: #111 !important;
    color: white !important;
    border: none !important;
  }

  &:active {
    background-color: #444 !important;
    color: gray !important;
    border: none !important;
  }

  ${({ disabled }) =>
    disabled &&
    `
    pointer-events: none;
    opacity: 0.5;
  `}
`;

export const ErrorText = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  display: flex;
  text-align: left;
  margin-bottom: 5px;
  color: red;
`;
