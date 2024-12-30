import { Banner, Title, Description, ButtonContainer, FunctionButton, StartButton, MainContent, ContentContainer, MainTitle, MainDescription, ContentImage, TextContainer } from './index.style';

const Content = () => (
  <>
    <Banner>
      <Title>HUSK: Help Use Shell Kindly</Title>
      <Description>HUSK는 웹 기반 터미널 서비스입니다. 사용자들은 터미널을 통해 다양한 기능을 사용할 수 있습니다.</Description>
      <ButtonContainer>
        <FunctionButton type="primary">기능 소개</FunctionButton>
        <StartButton type="primary">시작하기</StartButton>
      </ButtonContainer>
    </Banner>

    <MainContent>
      <ContentContainer>
        <ContentImage />
        <TextContainer>
          <MainTitle>SSH Connection</MainTitle>
          <MainDescription>SSH 연결을 통해 원격 서버에 접속할 수 있습니다.</MainDescription>
        </TextContainer>
      </ContentContainer>

      <ContentContainer>
        <ContentImage />
        <TextContainer>
          <MainTitle>Multiple Window</MainTitle>
          <MainDescription>여러 개의 터미널 창을 열어 작업을 병렬로 진행할 수 있습니다.</MainDescription>
        </TextContainer>
      </ContentContainer>

      <ContentContainer>
        <ContentImage />
        <TextContainer>
          <MainTitle>Chatbot Support</MainTitle>
          <MainDescription>챗봇을 통해 터미널 사용법을 학습하고, 명령어를 추천받을 수 있습니다.</MainDescription>
        </TextContainer>
      </ContentContainer>

      <ContentContainer>
        <ContentImage />
        <TextContainer>
          <MainTitle>PC File System</MainTitle>
          <MainDescription>사용자의 PC 파일 시스템을 터미널에서 사용할 수 있습니다.</MainDescription>
        </TextContainer>
      </ContentContainer>
    </MainContent>
  </>
);

export default Content;
