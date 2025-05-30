import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
  margin-bottom: 35px;
  text-align: center;
  color: var(--main-color);
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  margin-left: 50%;
`;

export const OAuthButton = styled.button`
  border: none;
  background-color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const SignInButton = styled.button`
  width: 200px;
  height: 45px;
  border: 1.6px solid #8f918f;
  border-radius: 50px;
  background-color: #131314;
  color: #e3e3e3;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 0.7px;
`;

export const SignUpWrapper = styled.div`
  margin-top: 32px;
  text-align: left;
`;

export const SignUpText = styled.p`
  color: #666;
  font-size: 14px;
`;

export const SignUpLink = styled.a`
  color: var(--main-color);
  font-weight: 700;

  &:hover {
    text-decoration: none;
  }
`;
