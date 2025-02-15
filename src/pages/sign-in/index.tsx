import { useSearchParams } from 'react-router-dom';
import Content from './content';
import GoogleCallback from './sign-in-google';
import GithubCallback from './sign-in-github';

const SignIn = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');

  if (type === 'google') return <GoogleCallback />;
  if (type === 'github') return <GithubCallback />;

  return <Content />;
};

export default SignIn;
