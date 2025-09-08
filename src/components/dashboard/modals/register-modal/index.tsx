import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Label, ModalContent, Overlay, ButtonWrapper, InputContainer, InputWrapper, InputField, CloseButton, TextAreaField, ErrorText } from './index.style';
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

  const hasWhitespace = currentPage === 'connections' && /\s/.test(inputValues[0] ?? '');

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()} style={{ margin: '24px' }}>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>

        <InputWrapper>
          {fields.map((field, index) => {
            const isConnectionName = currentPage === 'connections' && index === 0;
            const showWhitespaceError = isConnectionName && /\s/.test(inputValues[index] ?? '');

            return (
              <InputContainer key={index}>
                <Label>{field.label}</Label>

                {field.type === 'textarea' ? (
                  <TextAreaField placeholder={field.placeholder} value={inputValues[index]} onChange={(e) => handleInputChange(index, e.target.value)} />
                ) : (
                  <InputField placeholder={field.placeholder} value={inputValues[index]} onChange={(e) => handleInputChange(index, e.target.value)} />
                )}

                {showWhitespaceError && <ErrorText>띄어쓰기 없이 입력해 주세요.</ErrorText>}
              </InputContainer>
            );
          })}
        </InputWrapper>

        <ButtonWrapper>
          <SaveButton inputValues={inputValues} onClose={onClose} currentPage={currentPage} disabled={hasWhitespace} />
        </ButtonWrapper>
      </ModalContent>
    </Overlay>,
    document.body
  );
};

export { useModal };
export default RegisterModal;
