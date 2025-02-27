import { useState } from 'react';
import { Container, PasswordInputField, SubmitButton } from '../index.style';
import { useNavigate } from 'react-router-dom';
import patchUser from 'api/user';

const TempUpdatePasswordSetting: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!newPassword.trim() || !newPassword.trim()) {
      alert('재설정할 비밀번호를 입력하세요');
      return;
    }
    setLoading(true);

    try {
      await patchUser({ newPassword, confirmPassword });
      navigate('/');
    } catch (error) {
      alert(error instanceof Error ? error.message : '비밀번호 재설정에 실패했습니다.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <h1>재설정한 비밀번호 입력</h1>
      <PasswordInputField type="password" placeholder="재설정할 비밀번호를 입력하세요" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      <PasswordInputField type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      <SubmitButton type="primary" onClick={handleSubmit} disabled={loading}>
        {loading ? '확인 중' : '재설정하기'}
      </SubmitButton>
    </Container>
  );
};

export default TempUpdatePasswordSetting;
