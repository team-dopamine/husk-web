import { Container, PasswordInputField, SubmitButton } from '../index.style';

const TempUpdatePasswordSetting: React.FC = () => {
  return (
    <Container>
      <h1>재설정한 비밀번호 입력</h1>
      <PasswordInputField type="password" placeholder="재설정할 비밀번호를 입력하세요" />
      <PasswordInputField type="password" placeholder="비밀번호 확인" />
      <SubmitButton type="primary">설정하기</SubmitButton>
    </Container>
  );
};

export default TempUpdatePasswordSetting;
