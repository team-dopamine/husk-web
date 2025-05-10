import React from 'react';
import ReactDOM from 'react-dom';
import { ModalContent, Overlay, CloseButton } from '@components/dashboard/modals/register-modal/index.style';
import { ReactComponent as CloseIcon } from '../../../../assets/CloseIcon.svg';
import { ModalProps } from '@components/dashboard/modals/register-modal/types';

const SshConnectionReadModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()} style={{ margin: '24px' }}>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
      </ModalContent>
    </Overlay>,
    document.body
  );
};

export default SshConnectionReadModal;
