import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getGoogle from 'api/sign-in/google';

const Google = () => {
  const [searchParams] = useSearchParams();
  const [googleStatus, setGoogleStatus] = useState<number | null>(null);
  const navigate = useNavigate();

  const code = searchParams.get('code');
  console.log('Google OAuth Code:', code);

  useEffect(() => {
    const fetchGoogleAuth = async () => {
      try {
        const status = await getGoogle(code);
        console.log('서버 응답 상태 코드:', status);
        console.log(googleStatus);
        setGoogleStatus(status);
        if (status == 200) {
          navigate('/');
        } else if (status == 400) {
          navigate('/sign-in');
        }
      } catch (err) {
        console.error('Google 로그인 오류:', err);
      }
    };

    fetchGoogleAuth();
  }, [navigate]);

  return <p>Google 로그인 처리 중...</p>;
};

export default Google;
