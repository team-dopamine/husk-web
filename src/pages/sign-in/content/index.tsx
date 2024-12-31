import { ButtonGroup, Container, ContentWrapper, OAuthButton, SignUpLink, SignUpText, SignUpWrapper, Title } from './index.style';

const Content = () => {
  return (
    <Container>
      <ContentWrapper>
        <Title>Sign In</Title>
        <ButtonGroup>
          <OAuthButton>Continue with Google</OAuthButton>
          <OAuthButton>Continue with GitHub</OAuthButton>
          <OAuthButton>Continue with Email</OAuthButton>
        </ButtonGroup>
        <SignUpWrapper>
          <SignUpText>
            계정이 없으신가요? <SignUpLink href="/sign-up">Sign up</SignUpLink>
          </SignUpText>
        </SignUpWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Content;
