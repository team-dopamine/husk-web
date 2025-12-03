import { Banner, Title, Description, ButtonContainer, FunctionButton, StartButton, MainContent, ContentContainer, MainTitle, MainDescription, ContentImage, TextContainer } from './index.style';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../api/context/use-auth';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import SSHGif from 'assets/SSH.gif';
import KEYCHAINGif from 'assets/KEYCHAIN.gif';

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
            {t('home.feature_button')}
          </FunctionButton>

          <StartButton type="primary" onClick={handleStartClick}>
            {t('home.start_button')}
          </StartButton>
        </ButtonContainer>
      </Banner>

      <MainContent>
        <ContentContainer>
          <ContentImage src={KEYCHAINGif} ref={scrollRef} />
          <TextContainer>
            <MainTitle>{t('home.keychain.title')}</MainTitle>
            <MainDescription>{t('home.keychain.description')}</MainDescription>
          </TextContainer>
        </ContentContainer>
        <ContentContainer>
          <ContentImage src={SSHGif} />
          <TextContainer>
            <MainTitle>{t('home.ssh.title')}</MainTitle>
            <MainDescription>{t('home.ssh.description')}</MainDescription>
          </TextContainer>
        </ContentContainer>
      </MainContent>
    </>
  );
};

export default Content;
