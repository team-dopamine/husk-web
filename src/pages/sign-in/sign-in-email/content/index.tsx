import { useState, useContext, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import postSignIn from 'api/sign-in';
import { AuthContext } from 'api/context/auth-context';
import { Container, ContentWrapper, Title, InputField, LoginButton, Label, ResetPasswordLink, ResetPasswordText } from '@pages/sign-in/sign-in-email/content/index.style';

const EMAIL_COOKIE = 'rememberEmail';
const COOKIE_MAX_DAYS = 30;

function setCookie(name: string, value: string, days: number) {
  const expires = new Date();
  expires.setDate(expires.getDate() + days);
  const isSecure = typeof window !== 'undefined' && window.location.protocol === 'https:';
  const cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};` + `expires=${expires.toUTCString()};path=/;SameSite=Lax;` + (isSecure ? 'Secure;' : '');
  document.cookie = cookie;
}

function getCookie(name: string): string | null {
  const target = `${encodeURIComponent(name)}=`;
  const parts = document.cookie.split(';');
  for (const part of parts) {
    const trimmed = part.trim();
    if (trimmed.startsWith(target)) {
      return decodeURIComponent(trimmed.substring(target.length));
    }
  }
  return null;
}

function deleteCookie(name: string) {
  document.cookie = `${encodeURIComponent(name)}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;SameSite=Lax;`;
}

const SigninContent: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberEmail, setRememberEmail] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error('AuthContext.Provider로 감싸야 합니다.');
  }

  const { login } = auth;

  const navigate = useNavigate();

  useEffect(() => {
    const saved = getCookie(EMAIL_COOKIE);
    if (saved) {
      setEmail(saved);
      setRememberEmail(true);
    }
  }, []);

  const toggleRemember = useCallback((checked: boolean, currentEmail: string) => {
    setRememberEmail(checked);
    if (checked) {
      setCookie(EMAIL_COOKIE, currentEmail ?? '', COOKIE_MAX_DAYS);
    } else {
      deleteCookie(EMAIL_COOKIE);
    }
  }, []);

  useEffect(() => {
    if (rememberEmail) {
      setCookie(EMAIL_COOKIE, email, COOKIE_MAX_DAYS);
    }
  }, [email, rememberEmail]);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await postSignIn({ email, password });

      if (response.jwtTokenDto.accessToken && response.jwtTokenDto.refreshToken) {
        const { accessToken, refreshToken } = response.jwtTokenDto;

        if (rememberEmail) {
          setCookie(EMAIL_COOKIE, email, COOKIE_MAX_DAYS);
        } else {
          deleteCookie(EMAIL_COOKIE);
        }

        login(accessToken, refreshToken);
        navigate('/');
      }
    } catch (error) {
      alert(error instanceof Error ? error.message : '로그인 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      void handleLogin();
    }
  };

  return (
    <Container>
      <ContentWrapper>
        <Title>Sign In</Title>
        <Label style={{ alignSelf: 'flex-start' }}>Email</Label>
        <InputField type="email" placeholder="Enter your email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} onKeyUp={handleKeyUp} required />

        <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
          <input id="rememberEmail" type="checkbox" checked={rememberEmail} onChange={(e) => toggleRemember(e.target.checked, email)} />
          <label htmlFor="rememberEmail">Remember Email</label>
        </div>

        <Label style={{ alignSelf: 'flex-start', marginTop: 12 }}>Password</Label>
        <InputField
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          onKeyUp={handleKeyUp}
          required
        />

        <LoginButton onClick={handleLogin} disabled={loading}>
          {loading ? 'Signing in...' : 'Sign In'}
        </LoginButton>

        <ResetPasswordText>
          Forgot Your Password? <ResetPasswordLink href="/password/reset">Reset password</ResetPasswordLink>
        </ResetPasswordText>
      </ContentWrapper>
    </Container>
  );
};

export default SigninContent;
