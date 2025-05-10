import React from 'react';
import ReactDOM from 'react-dom';
import { ModalContent, Overlay, CloseButton } from '@components/dashboard/modals/register-modal/index.style';
import { ReactComponent as CloseIcon } from '../../../../assets/CloseIcon.svg';
import { SshConnectionReadModalProps } from '@components/dashboard/modals/types';
import ButtonGroup from '@components/dashboard/button';
import { handleSshDelete } from './handlers';

const SshConnectionReadModal: React.FC<SshConnectionReadModalProps> = ({ id, isOpen, onClose, onSuccess, inputValues, onSave }) => {
  if (!isOpen) return null;

  const handleDelete = () => handleSshDelete(id, onClose, onSuccess);

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()} style={{ margin: '24px' }}>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
        <ButtonGroup id={id} inputValues={inputValues} onSave={onSave} onDelete={handleDelete} />
      </ModalContent>
    </Overlay>,
    document.body
  );
};

export default SshConnectionReadModal;
