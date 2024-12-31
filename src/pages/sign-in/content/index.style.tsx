import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 160px);
  padding: 40px 20px;
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
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

export const OAuthButton = styled.button`
  width: 100%;
  height: 48px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  background-color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f8f8f8;
    border-color: #d1d1d1;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const SignUpWrapper = styled.div`
  margin-top: 32px;
  text-align: center;
`;

export const SignUpText = styled.p`
  color: #666;
  font-size: 14px;
`;

export const SignUpLink = styled.a`
  color: #0066ff;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;
