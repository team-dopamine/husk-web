import { useGoogleLogin } from '@react-oauth/google';
import { ButtonGroup, Container, ContentWrapper, OAuthButton, SignUpLink, SignUpText, SignUpWrapper, Title } from './index.style';

const Content = () => {
  const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    ux_mode: 'redirect',
    redirect_uri: process.env.REACT_APP_REDIRECT_URI || '',
  });

  return (
    <Container>
      <ContentWrapper>
        <Title>Sign In</Title>
        <ButtonGroup>
          <OAuthButton onClick={() => googleLogin()}>Continue with Google</OAuthButton>
          <OAuthButton>Continue with GitHub</OAuthButton>
          <OAuthButton>Continue with Email</OAuthButton>
        </ButtonGroup>
        <SignUpWrapper>
          <SignUpText>
            계정이 없으신가요? <SignUpLink href="/read-terms">Sign up</SignUpLink>
          </SignUpText>
        </SignUpWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Content;
