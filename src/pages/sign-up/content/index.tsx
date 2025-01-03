import React, { useState } from 'react';
import { Container, ContentWrapper, Title, PreviousButton, NextButton, ButtonGroup } from './index.style';
import EmailVerify from '@components/sign-up';

const Content = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');

  const handleInputChange = (email: string, code: string) => {
    setEmail(email);
    setCode(code);
  };

  const isNextButtonDisabled = email.trim() === '' || code.trim() === '';

  return (
    <Container>
      <ContentWrapper>
        <Title>Sign Up</Title>
        <EmailVerify onInputChange={handleInputChange} />
        <ButtonGroup>
          <PreviousButton type="primary" href="/sign-in">
            Previous
          </PreviousButton>
          {/* TODO: 이메일 유효성 검증 후 다음 버튼 활성화 */}
          <NextButton type="submit" disabled={isNextButtonDisabled}>
            Next
          </NextButton>
        </ButtonGroup>
      </ContentWrapper>
    </Container>
  );
};

export default Content;
