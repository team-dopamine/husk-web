import { useSearchParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import getGithub from 'api/sign-in/github';
import { AuthContext } from 'api/context/auth-context';

const Github = () => {
  const [searchParams] = useSearchParams();
  const [githubStatus, setGithubStatus] = useState<number | null>(null);
  const { login } = useContext(AuthContext)!;
  const navigate = useNavigate();

  const code = searchParams.get('code');


  useEffect(() => {
    const fetchGithubAuth = async () => {
      try {
        const response = await getGithub(code);
        const status = response.statusCodeValue;
        setGithubStatus(status);

        if (status === 200) {
          const { accessToken, refreshToken } = response.body.jwtTokenDto;
          if (accessToken && refreshToken) {
            login(accessToken, refreshToken);
            navigate('/');
          }
        } else if (status === 400) {
          navigate('/sign-in');
        }
      } catch (err) {
        console.error('Github 로그인 오류:', err);
        navigate('/sign-in');
      }
    };

    fetchGithubAuth();
  }, [code, navigate]);

  return <p>Github 로그인 처리 중...</p>;
};

export default Github;
