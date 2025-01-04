import { useState } from 'react';
import { Container, ContentWrapper, Title, PreviousButton, NextButton, ButtonGroup } from './index.style';
import PasswordSetting from '@components/sign-up/password-setting';

const PasswordContent = () => {
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('');

  const handleInputChange = (password: string, passwordVerify: string) => {
    setPassword(password);
    setPasswordVerify(passwordVerify);
  };

  const isPasswordMismatch = password.trim() === '' || passwordVerify.trim() === '' || password !== passwordVerify;

  return (
    <Container>
      <ContentWrapper>
        <Title>Sign Up</Title>
        <PasswordSetting onInputChange={handleInputChange} />
        <ButtonGroup isPasswordMismatch={isPasswordMismatch}>
          <PreviousButton type="primary" href="/sign-up">
            Previous
          </PreviousButton>
          <NextButton type="submit" disabled={isPasswordMismatch}>
            Next
          </NextButton>
        </ButtonGroup>
      </ContentWrapper>
    </Container>
  );
};

export default PasswordContent;
