import { useState } from 'react';
import { Container, ContentWrapper, Title, InputField, LoginButton, Label } from '@pages/sign-in/sign-in-email/content/index.style';

const SigninContent: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <Container>
      <ContentWrapper>
        <Title>Sign In</Title>
        <Label style={{ alignSelf: 'flex-start' }}>Email</Label>
        <InputField type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <Label style={{ alignSelf: 'flex-start' }}>Password</Label>
        <InputField type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <LoginButton onClick={handleLogin}>Login</LoginButton>
      </ContentWrapper>
    </Container>
  );
};

export default SigninContent;
