import { Banner, Title, Description, ButtonContainer, FunctionButton, StartButton, MainContent, Img, ContentContainer, MainTitle, MainDescription } from './index.style';

const Content = () => (
  <>
    <Banner>
      <Title>Welcome to Our Service Hub</Title>
      <Description>Find the best services here</Description>
      <ButtonContainer>
        <FunctionButton type="primary">기능 소개</FunctionButton>
        <StartButton type="primary">시작하기</StartButton>
      </ButtonContainer>
    </Banner>
    <MainContent>
      <Img />
      <ContentContainer>
        <MainTitle>Feature 01</MainTitle>
        <MainDescription>See what our customers say</MainDescription>
      </ContentContainer>
    </MainContent>
  </>
);

export default Content;
