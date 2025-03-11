import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import ButtonGroup from '../button';
import { Label, ModalContent, Overlay, ButtonWrapper, InputContainer, InputWrapper, InputField, CloseButton } from './index.style';
import { ReactComponent as CloseIcon } from '../../../assets/CloseIcon.svg';

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
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, fields }) => {
  if (!isOpen) return null;

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
              <InputField placeholder={field.placeholder} />
            </InputContainer>
          ))}
        </InputWrapper>
        <ButtonWrapper>
          <ButtonGroup />
        </ButtonWrapper>
      </ModalContent>
    </Overlay>,
    document.body
  );
};

export { useModal };
export type { ModalProps };
export default Modal;
