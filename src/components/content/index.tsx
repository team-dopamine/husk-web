import { Banner, Title, Desc, BtnContainer, FunctBtn, StartBtn, MainContent, Img, ContentContainer, MainTitle, MainDesc } from './index.style';

const Content = () => (
  <>
    <Banner>
      <Title>Welcome to Our Service Hub</Title>
      <Desc>Find the best services here</Desc>
      <BtnContainer>
        <FunctBtn>기능 소개</FunctBtn>
        <StartBtn>시작하기</StartBtn>
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
