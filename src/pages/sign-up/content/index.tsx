import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, ContentWrapper, Title, PreviousButton, NextButton, ButtonGroup } from './index.style';
import EmailVerify from '@components/sign-up/email-verify';

const Content = () => {
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
      navigate('/password');
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
        <ButtonGroup>
          <PreviousButton type="primary" href="/sign-in">
            Previous
          </PreviousButton>
          <NextButton type="button" onClick={handleNextClick} disabled={!isVerified}>
            Next
          </NextButton>
        </ButtonGroup>
      </ContentWrapper>
    </Container>
  );
};

export default Content;
