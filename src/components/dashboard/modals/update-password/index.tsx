import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as CloseIcon } from '@assets/CloseIcon.svg';
import { Label, ModalContent, Overlay, InputWrapper, InputField, CloseButton, SubmitButton, ErrorText } from './index.style';
import useModal from '@hooks/useModal';
import postVerifyPassword from '@api/verify-password';
import patchUser from '@api/user';
import { UpdateModalProps } from '../types';

const UpdateModal: React.FC<UpdateModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

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
      </ModalContent>
    </Overlay>,
    document.body
  );
};

export { useModal };
export default UpdateModal;
