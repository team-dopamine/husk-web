import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, ContentWrapper, Title, PreviousButton, NextButton, ButtonGroup } from './index.style';
import EmailVerify from '@components/sign-up/email-verify';
import NavigationButtons from '@components/button';

const EmailContent = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (email: string, code: string) => {
    setEmail(email);
    setCode(code);
    setIsVerified(false);
  };
  const handleVerifySuccess = () => {
    setIsVerified(true);
  };
  const handleNextClick = () => {
    if (isVerified) {
      navigate('/password', { state: { email } });
    }
  };

  return (
    <Container>
      <ContentWrapper>
        <Title>Sign Up</Title>
        <EmailVerify
          onInputChange={(email, code) => {
            handleInputChange(email, code);
            if (email && code) {
              handleVerifySuccess();
            }
          }}
        />
        <NavigationButtons
          previousButton={{
            label: 'Previous',
            href: '/read-terms',
          }}
          nextButton={{
            label: 'Next',
            onClick: handleNextClick,
            disabled: !isVerified,
          }}
        />
      </ContentWrapper>
    </Container>
  );
};

export default EmailContent;
