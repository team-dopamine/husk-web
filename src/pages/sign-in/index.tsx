import { useSearchParams } from 'react-router-dom';
import Content from './content';
import GoogleCallback from './google';

const SignIn = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');
  console.log(type);

  return type === 'google' ? <GoogleCallback /> : <Content />;
};

export default SignIn;
