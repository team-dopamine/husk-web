import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { Label, ModalContent, Overlay, InputContainer, InputWrapper, InputField, CloseButton } from './index.style';
import { ReactComponent as CloseIcon } from '../../../../assets/CloseIcon.svg';
import ButtonGroup from '../../button';
import patchKeyChainDelete from 'api/keychains/keychain-delete';
import patchKeyChainUpdate from 'api/keychains/keychain-update';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return { isOpen, openModal, closeModal };
};

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  fields: { label: string; placeholder: string }[];
  id?: number;
  onSuccess?: () => void;
}

const KeychainReadModal: React.FC<ModalProps> = ({ isOpen, onClose, fields, id, onSuccess }) => {
  if (!isOpen) return null;

  const [inputValues, setInputValues] = useState<string[]>(fields.map((f) => f.placeholder));

  const handleInputChange = (index: number, value: string) => {
    setInputValues((prev) => {
      const newValues = [...prev];
      newValues[index] = value;
      return newValues;
    });
  };
  const handleSave = async () => {
    if (!id) {
      alert('수정할 키체인을 찾을 수 없습니다.');
      return;
    }

    const [name, content] = inputValues.map((v) => v.trim());

    if (!name || !content) {
      alert('모든 필드를 입력하세요.');
      return;
    }

    try {
      await patchKeyChainUpdate({ id, name, content });
      onClose();
      onSuccess?.();
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : '업데이트 실패');
    }
  };

  const handleDelete = async () => {
    if (!id) {
      alert('삭제할 키체인을 찾을 수 없습니다.');
      return;
    }

    try {
      await patchKeyChainDelete(id);
      onClose();
      onSuccess?.();
    } catch (error) {
      console.error('삭제 오류:', error);
      alert(error instanceof Error ? error.message : '삭제 실패');
    }
  };
  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()} style={{ margin: '24px' }}>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>

        <InputWrapper>
          {fields.map((field, index) => (
            <InputContainer key={index}>
              <Label>{field.label}</Label>
              <InputField placeholder={field.placeholder} value={inputValues[index]} onChange={(e) => handleInputChange(index, e.target.value)} />
            </InputContainer>
          ))}
        </InputWrapper>
        <ButtonGroup inputValues={inputValues} id={id} onSave={handleSave} onDelete={handleDelete} />
      </ModalContent>
    </Overlay>,
    document.body
  );
};

export { useModal };
export type { ModalProps };
export default KeychainReadModal;
