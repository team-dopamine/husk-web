import styled from 'styled-components';
import { Input, Button } from 'antd';

export const PasswordInputField = styled(Input)`
  width: 100%;
  max-width: 492px;
  height: 36px;
  border-radius: 6px;
  padding: 8px 12px 8px 12px;
  margin-bottom: 5px;

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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: auto;
  padding: 20px;
`;

export const SubmitButton = styled(Button)`
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

export const ErrorText = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  display: flex;
  text-align: left;
  margin-bottom: 5px;
  color: red;
`;
