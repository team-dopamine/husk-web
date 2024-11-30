import { Banner, Title, Desc, ButtonContainer, FunctButton, StartButton, MainContent, Img, ContentContainer, MainTitle, MainDesc } from './index.style';

const Content = () => (
  <>
    <Banner>
      <Title>Welcome to Our Service Hub</Title>
      <Desc>Find the best services here</Desc>
      <ButtonContainer>
        <FunctButton>기능 소개</FunctButton>
        <StartButton>시작하기</StartButton>
      </ButtonContainer>
    </Banner>
    <MainContent>
      <Img />
      <ContentContainer>
        <MainTitle>Feature 01</MainTitle>
        <MainDesc>See what our customers say</MainDesc>
      </ContentContainer>
    </MainContent>
  </>
);

export default Content;
