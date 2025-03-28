import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ModalContent, Overlay, CloseButton } from './index.style';
import { ReactComponent as CloseIcon } from '../../../../assets/CloseIcon.svg';
import ButtonGroup from '../../button';
import InputGroup from './inputGroup';
import useModal from '../../../../hooks/useModal';
import { ModalProps } from './types';
import { handleKeychainDelete, handleKeychainSave } from './handlers';

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

  const handleSave = () => handleKeychainSave({ id, inputValues, onClose, onSuccess });
  const handleDelete = () => handleKeychainDelete({ id, onClose, onSuccess });

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()} style={{ margin: '24px' }}>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
        <InputGroup fields={fields} inputValues={inputValues} onChange={handleInputChange} />
        <ButtonGroup inputValues={inputValues} id={id} onSave={handleSave} onDelete={handleDelete} />
      </ModalContent>
    </Overlay>,
    document.body
  );
};

export { useModal };
export type { ModalProps };
export default KeychainReadModal;
