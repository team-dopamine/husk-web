import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import postSignIn from 'api/sign-in';
import { AuthContext } from 'api/context/auth-context';
import { Container, ContentWrapper, Title, InputField, LoginButton, Label, ResetPasswordLink, ResetPasswordText } from '@pages/sign-in/sign-in-email/content/index.style';

const SigninContent: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { accessToken, login, isLoggedIn } = useContext(AuthContext)!;
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await postSignIn({ email, password });

      if (response.jwtTokenDto.accessToken && response.jwtTokenDto.refreshToken) {
        const { accessToken, refreshToken } = response.jwtTokenDto;

        login(accessToken, refreshToken);
        navigate('/');
      }
    } catch (error) {
      alert(error instanceof Error ? error.message : '로그인 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container>
        <ContentWrapper>
          <Title>Sign In</Title>
          <Label style={{ alignSelf: 'flex-start' }}>Email</Label>
          <InputField type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <Label style={{ alignSelf: 'flex-start' }}>Password</Label>
          <InputField type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <LoginButton onClick={handleLogin} disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </LoginButton>
          <ResetPasswordText>
            비밀번호를 잃으셨나요? <ResetPasswordLink href="/password/reset">Reset password</ResetPasswordLink>
          </ResetPasswordText>
        </ContentWrapper>
      </Container>
    </>
  );
};

export default SigninContent;
