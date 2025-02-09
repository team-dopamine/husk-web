import { useNavigate } from 'react-router-dom';
import { ButtonGroup, Container, ContentWrapper, OAuthButton, SignUpLink, SignUpText, SignUpWrapper, Title } from './index.style';

const Content = () => {
  const navigate = useNavigate();

  const handleOAuthSignIn = (provider: string) => {
    if (provider === 'email') {
      navigate('/auth-sign-in');
    }
  };

  return (
    <Container>
      <ContentWrapper>
        <Title>Sign In</Title>
        <ButtonGroup>
          <OAuthButton onClick={() => handleOAuthSignIn('google')}>Continue with Google</OAuthButton>
          <OAuthButton onClick={() => handleOAuthSignIn('github')}>Continue with GitHub</OAuthButton>
          <OAuthButton onClick={() => handleOAuthSignIn('email')}>Continue with Email</OAuthButton>
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
