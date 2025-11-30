import { Banner, Title, Description, ButtonContainer, FunctionButton, StartButton, MainContent, ContentContainer, MainTitle, MainDescription, ContentImage, TextContainer } from './index.style';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../api/context/use-auth';
import { useRef } from 'react';
import SSHGif from 'assets/SSH.gif';
import KEYCHAINGif from 'assets/KEYCHAIN.gif';
import { useTranslation } from 'react-i18next';

const Content = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const scrollRef = useRef<HTMLImageElement>(null);

  const handleScrollClick = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleStartClick = () => {
    if (isLoggedIn) {
      navigate('/dashboard');
    } else {
      navigate('/sign-in');
    }
  };

  return (
    <>
      <Banner>
        <Title>HUSK: Help Use Shell Kindly</Title>
        <Description>{t('home.description')}</Description>
        <ButtonContainer>
          <FunctionButton type="primary" onClick={handleScrollClick}>
            기능 소개
          </FunctionButton>
          <StartButton type="primary" onClick={handleStartClick}>
            시작하기
          </StartButton>
        </ButtonContainer>
      </Banner>

      <MainContent>
        <ContentContainer>
          <ContentImage src={KEYCHAINGif} ref={scrollRef} />
          <TextContainer>
            <MainTitle>KeyChain</MainTitle>
            <MainDescription>SSH 키를 안전하게 저장하고 관리할 수 있습니다. 한눈에 키 목록을 확인하고 손쉽게 추가 또는 수정할 수 있습니다.</MainDescription>
          </TextContainer>
        </ContentContainer>
        <ContentContainer>
          <ContentImage src={SSHGif} />
          <TextContainer>
            <MainTitle>SSH Connection</MainTitle>
            <MainDescription>SSH 연결을 통해 원격 서버에 접속할 수 있습니다.</MainDescription>
          </TextContainer>
        </ContentContainer>
      </MainContent>
    </>
  );
};

export default Content;
