import { Container, ContentWrapper, Title, PasswordWrapper, Message } from './index.style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationButtons from '@components/button';
import EmailVerify from '@components/sign-up/email-verify';

const Content = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [email, setEmail] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const isPasswordMismatch = password.trim() === '' || passwordVerify.trim() === '' || password !== passwordVerify;

  const handleNextClick = () => {
    if (isVerified) {
      navigate('/sign-in');
    }
  };

  const handleInputChange = (email: string, code: string) => {
    setEmail(email);
  };

  const previousButtonConfig = {
    label: 'Home',
    href: '/',
  };

  const nextButtonConfig = {
    label: 'Login',
    href: '/sign-in',
    onClick: handleNextClick,
    disabled: !isVerified,
  };

  const handleVerifySuccess = () => {
    setIsVerified(true);
  };

  return (
    <Container>
      <ContentWrapper>
        <Title>비밀번호 찾기</Title>
        <PasswordWrapper>
          <EmailVerify
            onInputChange={(email, code) => {
              handleInputChange(email, code);
              if (email) handleVerifySuccess();
            }}
          />
        </PasswordWrapper>
        <NavigationButtons previousButton={previousButtonConfig} nextButton={nextButtonConfig} />
      </ContentWrapper>
    </Container>
  );
};

export default Content;
