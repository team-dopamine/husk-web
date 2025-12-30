import postKeychain from 'api/keychains/keychain-register';
import postSshConnection from 'api/ssh-connections/ssh-register';
import { Container, ActionButton } from './index.style';
import { getStoredToken } from 'api/context/auth-util';

type SaveButtonGroupProps = {
  inputValues: string[];
  currentPage: string;
  disabled: boolean;
  onClose: () => void;
};

const SaveButton: React.FC<SaveButtonGroupProps> = ({ inputValues, onClose, currentPage, disabled }) => {
  const handleSave = async () => {
    const accessToken = getStoredToken();
    const trimmedValues = inputValues.map((value) => value.trim());

    const hasEmpty = trimmedValues.some((v) => v.length === 0);
    if (hasEmpty) {
      alert('모든 필드를 입력해 주세요.');
      return;
    }

    if (!accessToken) {
      alert('로그인이 필요합니다.');
      return;
    }

    if (currentPage === 'keychain') {
      try {
        await postKeychain({
          name: trimmedValues[0],
          content: trimmedValues[1],
          accessToken,
        });
        onClose();
      } catch (error) {
        alert(error instanceof Error ? error.message : '데이터 저장에 실패했습니다.');
      }
    } else if (currentPage === 'connections') {
      try {
        await postSshConnection({
          name: trimmedValues[0],
          host: trimmedValues[1],
          port: trimmedValues[2],
          username: trimmedValues[3],
          keyChainName: trimmedValues[4],
          accessToken,
        });
        onClose();
        window.location.reload();
      } catch (error) {
      
        alert(error instanceof Error ? error.message : '데이터 저장에 실패했습니다.');
      }
    }
  };

  return (
    <Container>
      <ActionButton onClick={handleSave} disabled={disabled}>
        Register
      </ActionButton>
    </Container>
  );
};

export default SaveButton;
