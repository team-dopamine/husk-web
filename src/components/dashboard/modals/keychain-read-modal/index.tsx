import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ModalContent, Overlay, CloseButton, KeychainCheckboxLabel, KeychainCheckbox } from './index.style';
import { ReactComponent as CloseIcon } from 'assets/CloseIcon.svg';
import ButtonGroup from '../../button';
import InputGroup from './inputGroup';
import useModal from 'hooks/useModal';
import { KeychainResponse, ModalProps } from './types';
import { handleKeychainDelete, handleKeychainSave } from './handlers';
import getKeychainDecrypt from 'api/keychains/keychain-decrypt';

const KeychainReadModal: React.FC<ModalProps> = ({ isOpen, onClose, fields, id, onSuccess }) => {
  if (!isOpen) return null;

  const [inputValues, setInputValues] = useState<string[]>(fields.map((f) => f.placeholder));
  const [showKeychain, setShowKeychain] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [decryptedValue, setDecryptedValue] = useState('');

  const handleInputChange = (index: number, value: string) => {
    setInputValues((prev) => {
      const newValues = [...prev];
      newValues[index] = value;
      return newValues;
    });
  };

  const handleCheckboxChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setShowKeychain(checked);

    if (!id) return;

    if (checked) {
      if (decryptedValue || isLoading) return;

      try {
        setIsLoading(true);
        const response: KeychainResponse = await getKeychainDecrypt(id);
        setDecryptedValue(response.content);

        setInputValues((prev) => {
          const newValues = [...prev];
          newValues[1] = response.content;
          return newValues;
        });
      } catch (error) {
        console.error('키체인 데이터를 불러오는 중 오류 발생:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleSave = () => handleKeychainSave({ id, inputValues, onClose, onSuccess });
  const handleDelete = () => handleKeychainDelete({ id, onClose, onSuccess });

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()} style={{ margin: '24px' }}>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
        <InputGroup fields={fields} inputValues={inputValues} onChange={handleInputChange} showKeychain={showKeychain} />
        <KeychainCheckboxLabel>
          <KeychainCheckbox type="checkbox" checked={showKeychain} onChange={handleCheckboxChange} disabled={isLoading} />
          키체인 값 표시
        </KeychainCheckboxLabel>
        <ButtonGroup inputValues={inputValues} id={id} onSave={handleSave} onDelete={handleDelete} />
      </ModalContent>
    </Overlay>,
    document.body
  );
};

export { useModal };
export type { ModalProps };
export default KeychainReadModal;
