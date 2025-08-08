import styled from 'styled-components';
import { Input } from 'antd';

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

export const PasswordWrapper = styled(WrapperStyle)`
  margin-bottom: 40px;
  flex-direction: column;
`;

export const InputField = styled(InputStyle)<{ isError: boolean }>`
  border: 1px solid ${(props) => (props.isError ? 'red' : 'gray')};

  &:focus {
    border: 1px solid ${(props) => (props.isError ? 'red' : 'gray')} !important;
  }
`;

export const Message = styled(Label)<{ isError: boolean }>`
  color: ${(props) => (props.isError ? 'red' : 'gray')};
  margin: 0;
  margin-bottom: -32px;
`;
