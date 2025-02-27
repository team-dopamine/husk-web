import postPasswordVerify from 'api/password-verify';
import { Container, PasswordInputField, SubmitButton } from '../index.style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TempUpdatePasswordConfirm: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!currentPassword.trim()) {
      alert('비밀번호를 입력하세요.');
      return;
    }

    setLoading(true);
    try {
      await postPasswordVerify({ currentPassword });
      navigate('/temp-update-password-setting');
    } catch (error) {
      alert(error instanceof Error ? error.message : '비밀번호 확인에 실패했습니다.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container>
      <h1>현재 비밀번호 입력</h1>
      <PasswordInputField type="password" placeholder="현재 비밀번호를 입력하세요" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
      <SubmitButton type="primary" onClick={handleSubmit} disabled={loading}>
        {loading ? '확인 중' : '확인하기'}
      </SubmitButton>
    </Container>
  );
};

export default TempUpdatePasswordConfirm;
