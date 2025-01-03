import styled from 'styled-components';
import { Button, Input } from 'antd';

const ButtonStyle = styled(Button)`
  width: 80px;
  height: 36px;
  border-radius: 8px;
  color: black;
  background-color: white;
  border: 1px solid black;
  font-size: 11px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: gray !important;
    color: white !important;
    border: none;
  }
`;

const WrapperStyle = styled.div`
  display: flex;
  gap: 12px;
`;

const InputStyle = styled(Input)`
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

export const FormContainer = styled.div<{ showCodeVerify: boolean }>`
  width: 492px;
  height: 60px;
  gap: 4px;
  margin-bottom: ${(props) => (props.showCodeVerify ? '104px' : '5px')};
`;

export const Label = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  display: flex;
  text-align: left;
  margin-bottom: 4px;
`;

export const EmailFieldWrapper = styled(WrapperStyle)``;

export const EmailWrapper = styled(WrapperStyle)`
  margin-bottom: 25px;
  flex-direction: column;
`;

export const VerifyWrapper = styled(WrapperStyle)``;

export const InputField = styled(InputStyle)`
  width: 400px;
  height: 36px;
  border-radius: 8px;
`;

export const RequestCodeButton = styled(ButtonStyle)`
  &:disabled {
    cursor: not-allowed;
    background-color: lightgray;
    color: darkgray;
    border: none;
    &:hover {
      background-color: lightgray !important;
      color: darkgray !important;
    }
  }
`;

export const VerifyButton = styled(ButtonStyle)``;

export const Timer = styled.div`
  font-size: 14px;
  margin-top: 5px;
  text-align: right;
  color: gray;
`;

export const Message = styled(Label)`
  color: gray;
  margin: 0;
`;
