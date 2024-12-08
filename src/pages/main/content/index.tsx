import { Banner, Title, Desc, BtnContainer, FunctionButton, StartButton, MainContent, Img, ContentContainer, MainTitle, MainDesc } from './index.style';

const Content = () => (
  <>
    <Banner>
      <Title>Welcome to Our Service Hub</Title>
      <Desc>Find the best services here</Desc>
      <BtnContainer>
        <FunctionButton type="primary">기능 소개</FunctionButton>
        <StartButton type="primary">시작하기</StartButton>
      </BtnContainer>
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
