import { Container, ContentWrapper, Title, PasswordWrapper, Message } from './index.style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationButtons from '@components/button';
import EmailVerify from '@components/sign-up/email-verify';

const Content = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleNextClick = () => {
    if (isVerified) {
      navigate('/sign-in');
    }
  };

  const handleInputChange = (email: string, code: string) => {
    setEmail(email);
  };

  return (
    <Container>
      <ContentWrapper>
        <Title>비밀번호 찾기</Title>
        <PasswordWrapper>
          <EmailVerify
            onInputChange={(email, code) => {
              handleInputChange(email, code);
            }}
          />
          <Message>해당 메일 주소로 임시 비밀번호가 전송됐습니다.</Message>
        </PasswordWrapper>
        <NavigationButtons
          previousButton={{
            label: 'Home',
            href: '/',
          }}
          nextButton={{
            label: 'Login',
            onClick: handleNextClick,
            disabled: !isVerified,
          }}
        />
      </ContentWrapper>
    </Container>
  );
};

export default Content;
