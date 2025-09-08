import styled from 'styled-components';
import { Input } from 'antd';

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

export const TextAreaField = styled.textarea`
  width: 100%;
  padding: 8px;
  height: 300px;
  resize: none;
  font-size: 14px;
  line-height: 1.5;
  border: 1px solid lightgray;
  border-radius: 4px;
  -webkit-text-security: disc; /* 글자 가리기 핵심 */
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
  width: 500px;

  display: flex;
  flex-direction: column;
  gap: 30px;
  max-height: 80vh;
  overflow-y: auto;
`;

export const Label = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 6px;
`;

export const InputField = styled(InputStyle)`
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.div``;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
  width: 100%;
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
    fill: var(--main-color);
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const ErrorText = styled.div`
  margin-top: 3px;
  font-size: 12px;
  color: #ef4444;
  margin-bottom: -17px;
  margin-left: 13px;
`;
