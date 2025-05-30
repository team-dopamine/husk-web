import styled from 'styled-components';
import { Button, Input } from 'antd';

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
  text-align: left;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 48px;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  display: flex;

  margin-bottom: 4px;
`;
export const LoginButton = styled(Button)`
  width: 100%;
  max-width: 492px;
  height: 48px;
  border-radius: 8px !important;
  display: flex;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;

  ${({ disabled }) =>
    disabled &&
    `
    pointer-events: none;
  `}

  color: white !important;
  background-color: var(--main-color) !important;
  text-decoration: none;

  &:hover {
    background-color: gray !important;
    color: white !important;
    border: none;
  }
`;

export const InputField = styled(Input)`
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

export const ResetPasswordText = styled.p`
  color: #666;
  font-size: 14px;
`;

export const ResetPasswordLink = styled.a`
  color: var(--main-color);
  font-weight: 700;

  &:hover {
    text-decoration: none;
  }
`;
