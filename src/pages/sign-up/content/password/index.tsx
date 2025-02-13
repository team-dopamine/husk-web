import { useState } from 'react';
import { Container, ContentWrapper, Title } from './index.style';
import PasswordSetting from '@pages/sign-up/content/password/content';
import postSignUp from 'api/sign-up';
import { useLocation, useNavigate } from 'react-router-dom';
import NavigationButtons from '@components/button';

const Password = () => {
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || '';

  const handleInputChange = (password: string, passwordVerify: string) => {
    setPassword(password);
    setPasswordVerify(passwordVerify);
  };

  const isPasswordMismatch = password.trim() === '' || passwordVerify.trim() === '' || password !== passwordVerify;

  const handleNextClick = async () => {
    if (isPasswordMismatch) return;

    setIsSubmitting(true);
    try {
      await postSignUp({
        email,
        password,
      });
      navigate('/');
    } catch (error) {
      alert(error instanceof Error ? error.message : '알 수 없는 오류가 발생하였습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const previousButtonConfig = {
    label: 'Previous',
    href: '/sign-up',
  };

  const nextButtonConfig = {
    label: isSubmitting ? 'Submitting...' : 'Next',
    onClick: handleNextClick,
    disabled: isPasswordMismatch || isSubmitting,
  };

  return (
    <>
      <Container>
        <ContentWrapper>
          <Title>Sign Up</Title>
          <PasswordSetting onInputChange={handleInputChange} />
          <NavigationButtons previousButton={previousButtonConfig} nextButton={nextButtonConfig} />
        </ContentWrapper>
      </Container>
    </>
  );
};

export default Password;
