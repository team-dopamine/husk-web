import { Container, PasswordInputField, SubmitButton } from '../index.style';

const TempUpdatePasswordConfirm: React.FC = () => {
  return (
    <Container>
      <h1>현재 비밀번호 입력</h1>
      <PasswordInputField type="password" placeholder="현재 비밀번호를 입력하세요" />
      <SubmitButton type="primary">확인하기</SubmitButton>
    </Container>
  );
};

export default TempUpdatePasswordConfirm;
