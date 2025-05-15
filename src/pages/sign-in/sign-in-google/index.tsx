import { useSearchParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from 'api/context/auth-context';
import getGoogle from 'api/sign-in/google';

const Google = () => {
  const [searchParams] = useSearchParams();
  const [googleStatus, setGoogleStatus] = useState<number | null>(null);
  const { login } = useContext(AuthContext)!;
  const navigate = useNavigate();

  const code = searchParams.get('code');

  useEffect(() => {
    const fetchGoogleAuth = async () => {
      try {
        const response = await getGoogle(code);
        const status = response.statusCodeValue;
        setGoogleStatus(status);
        if (status === 200) {
          const { accessToken, refreshToken } = response.body.jwtTokenDto;
          if (accessToken && refreshToken) {
            login(accessToken, refreshToken);
            navigate('/');
          }
        } else if (status == 400) {
          navigate('/signin');
        }
      } catch (err) {
        console.error('Google 로그인 오류:', err);
      }
    };

    fetchGoogleAuth();
  }, [code, navigate]);

  return <p>Google 로그인 처리 중...</p>;
};

export default Google;
