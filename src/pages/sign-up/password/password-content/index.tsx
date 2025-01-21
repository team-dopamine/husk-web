import { useState } from 'react';
import { Container, ContentWrapper, Title, PreviousButton, NextButton, ButtonGroup } from './index.style';
import PasswordSetting from '@components/sign-up/password-setting';
import postSignUp from 'api/sign-up';

const PasswordContent = () => {
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (password: string, passwordVerify: string) => {
    setPassword(password);
    setPasswordVerify(passwordVerify);
  };

  const isPasswordMismatch = password.trim() === '' || passwordVerify.trim() === '' || password !== passwordVerify;

  const handleNextClick = async () => {
    if (isPasswordMismatch) return;

    setIsSubmitting(true);
    try {
      await postSignUp({
        email: 'data',
        password,
      });
    } catch (error) {
      alert(error instanceof Error ? error.message : 'An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <ContentWrapper>
        <Title>Sign Up</Title>
        <PasswordSetting onInputChange={handleInputChange} />
        <ButtonGroup isPasswordMismatch={isPasswordMismatch}>
          <PreviousButton type="primary" href="/sign-up">
            Previous
          </PreviousButton>
          <NextButton type="button" onClick={handleNextClick} disabled={isPasswordMismatch || isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Next'}
          </NextButton>
        </ButtonGroup>
      </ContentWrapper>
    </Container>
  );
};

export default PasswordContent;
