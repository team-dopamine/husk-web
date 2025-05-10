import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Label, ModalContent, Overlay, ButtonWrapper, InputContainer, InputWrapper, InputField, CloseButton } from './index.style';
import { ReactComponent as CloseIcon } from '../../../../assets/CloseIcon.svg';
import SaveButton from '@components/dashboard/button/saveButton';
import useModal from '../../../../hooks/useModal';
import { RegisterModalProps } from '../types';

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose, currentPage, fields }) => {
  if (!isOpen) return null;

  const [inputValues, setInputValues] = useState<string[]>(fields.map(() => ''));

  const handleInputChange = (index: number, value: string) => {
    setInputValues((prev) => {
      const newValues = [...prev];
      newValues[index] = value;
      return newValues;
    });
  };

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()} style={{ margin: '24px' }}>
        <CloseButton
          onClick={() => {
            onClose();
          }}
        >
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

        <ButtonWrapper>
          <SaveButton inputValues={inputValues} onClose={onClose} currentPage={currentPage} />
        </ButtonWrapper>
      </ModalContent>
    </Overlay>,
    document.body
  );
};

export { useModal };
export default RegisterModal;
