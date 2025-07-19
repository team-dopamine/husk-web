import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { ButtonGroup, Container, ContentWrapper, OAuthButton, SignUpLink, SignUpText, SignInButton, SignUpWrapper, Title } from './index.style';
import githubSignIn from 'assets/github-mark-white.png';
import googleSignInRd from 'assets/google_mark-si.png';
const GITHUB_CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;
const GITHUB_REDIRECT_URI = process.env.REACT_APP_GITHUB_REDIRECT_URI;
const Content = () => {
  const navigate = useNavigate();

  const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    ux_mode: 'redirect',
    redirect_uri: process.env.REACT_APP_REDIRECT_URI || '',
  });

  const githubLogin = () => {
    if (!GITHUB_CLIENT_ID || !GITHUB_REDIRECT_URI) {
      console.error('GitHub OAuth 설정이 올바르지 않습니다. .env 파일을 확인하세요.');
      return;
    }
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${GITHUB_REDIRECT_URI}&scope=user:email`;
    window.location.href = githubAuthUrl;
  };
  const handleOAuthSignIn = (provider: string) => {
    if (provider === 'email') {
      navigate('/auth/sign-in');
    } else if (provider === 'google') {
      googleLogin();
    } else if (provider === 'github') {
      githubLogin();
    }
  };

  return (
    <Container>
      <ContentWrapper>
        <Title>Sign In</Title>
        <ButtonGroup>
          <SignInButton onClick={() => handleOAuthSignIn('github')}>
            <img src={githubSignIn} alt="Github Logo" style={{ width: '27px', height: '27px', marginRight: '12px', verticalAlign: 'middle' }} />
            Sign in with Github
          </SignInButton>
          <img src={googleSignInRd} onClick={() => handleOAuthSignIn('google')} alt="Google Logo" style={{ width: '50%', height: '40%', cursor: 'pointer' }} />
          <SignInButton onClick={() => handleOAuthSignIn('email')}>Sign in with Email</SignInButton>
        </ButtonGroup>
        <SignUpWrapper>
          <SignUpText>
            Don't have an account? <SignUpLink href="/terms">Sign up</SignUpLink>
          </SignUpText>
        </SignUpWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Content;
