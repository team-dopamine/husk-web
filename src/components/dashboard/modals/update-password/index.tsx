import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as CloseIcon } from '@assets/CloseIcon.svg';
import { Label, ModalContent, Overlay, InputWrapper, InputField, CloseButton, SubmitButton, ErrorText, WithdrawButton } from './index.style';
import useModal from '@hooks/useModal';
import postVerifyPassword from '@api/verify-password';
import patchUser from '@api/user';
import { UpdateModalProps } from '../types';
import { AuthContext } from '@api/context/auth-context';

const UpdateModal: React.FC<UpdateModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { isLoggedIn, logout, withdraw, accessToken, refreshToken } = useContext(AuthContext)!;

  const handleSubmit = async () => {
    if (!newPassword.trim() || !confirmPassword.trim()) {
      alert('재설정할 비밀번호를 입력하세요');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      await postVerifyPassword({ currentPassword });
      await patchUser({ newPassword, confirmPassword });
      navigate('/');
    } catch (error) {
      alert(error instanceof Error ? error.message : '비밀번호 재설정에 실패했습니다.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    if (!accessToken || !refreshToken) {
      console.error('로그아웃 실패: 토큰이 없습니다.');
      return;
    }
    try {
      await logout(accessToken, refreshToken);
    } catch (error) {
      console.error('로그아웃 오류:', error);
    }
  };
  const handleWithdraw = async () => {
    if (!isLoggedIn) return;
    if (!accessToken) {
      console.error('회원탈퇴 실패: 토큰이 없습니다.');
      return;
    }
    if (confirm('탈퇴하시겠습니까?')) {
      try {
        await withdraw(accessToken);
        handleLogout();
        navigate('/');
      } catch (error) {
        console.error('회원탈퇴 오류:', error);
      }
    }
  };

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()} style={{ margin: '24px' }}>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>

        <InputWrapper>
          <Label>현재 비밀번호</Label>
          <InputField type="password" placeholder="value" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
          <Label>재설정할 비밀번호</Label>
          <InputField type="password" placeholder="value" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          <Label>비밀번호 확인</Label>
          <InputField type="password" placeholder="value" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          {error && <ErrorText>{error}</ErrorText>}
        </InputWrapper>

        <SubmitButton type="primary" onClick={handleSubmit} disabled={loading}>
          {loading ? '확인 중' : '재설정하기'}
        </SubmitButton>
        <WithdrawButton onClick={handleWithdraw}>탈퇴하기</WithdrawButton>
      </ModalContent>
    </Overlay>,
    document.body
  );
};

export { useModal };
export default UpdateModal;
