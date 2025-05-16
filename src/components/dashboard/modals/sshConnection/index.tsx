import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ModalContent, Overlay, CloseButton } from '@components/dashboard/modals/register-modal/index.style';
import { ReactComponent as CloseIcon } from '../../../../assets/CloseIcon.svg';
import { SshConnectionReadModalProps } from '@components/dashboard/modals/types';
import ButtonGroup from '@components/dashboard/button';
import InputGroup from '@components/dashboard/modals/keychain-read-modal/inputGroup';
import { handleSshDelete } from './handlers';

const SshConnectionReadModal: React.FC<SshConnectionReadModalProps> = ({ id, isOpen, fields, onClose, onSuccess, inputValues, onSave }) => {
  if (!isOpen) return null;

  const [inputValue, setInputValues] = useState<string[]>(fields.map((f) => f.placeholder));

  const handleDelete = () => handleSshDelete(id, onClose, onSuccess);

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
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
        <InputGroup fields={fields} inputValues={inputValue} onChange={handleInputChange} showKeychain={false} />
        <ButtonGroup id={id} inputValues={inputValue} onSave={onSave} onDelete={handleDelete} />
      </ModalContent>
    </Overlay>,
    document.body
  );
};

export default SshConnectionReadModal;
