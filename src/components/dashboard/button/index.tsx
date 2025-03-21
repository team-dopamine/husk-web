import postKeychain from 'api/keychains/keychain-register';
import { Container, ActionButton, Divider } from './index.style';
import { getStoredToken } from 'api/context/auth-util';
import patchKeyChainDelete from 'api/keychains/keychain-delete';

type ButtonGroupProps = {
  inputValues: string[];
  id?: number;
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({ inputValues, id }) => {
  const handleSave = async () => {
    const accessToken = getStoredToken();

    if (!accessToken) {
      alert('로그인이 필요합니다.');
      return;
    }

    try {
      const trimmedValues = inputValues.map((value) => value.trim());

      if (trimmedValues.some((value) => value === '')) {
        alert('모든 필드를 입력하세요.');
        return;
      }

      await postKeychain({
        name: inputValues[0],
        content: inputValues[1],
        accessToken,
      });
    } catch (error) {
      console.error('Error posting data:', error);
      alert(error instanceof Error ? error.message : '데이터 저장에 실패했습니다.');
    }
  };

  const handleDelete = async () => {
    if (!id) {
      alert('삭제할 키체인을 찾을 수 없습니다.');
      return;
    }
    try {
      await patchKeyChainDelete(id);
    } catch (error) {
      console.error('Error posting data:', error);
      alert(error instanceof Error ? error.message : '데이터 저장에 실패했습니다.');
    }
  };

  return (
    <Container>
      <ActionButton onClick={handleSave}>Save</ActionButton>
      <Divider />
      <ActionButton onClick={handleDelete}>Delete</ActionButton>
    </Container>
  );
};

export default ButtonGroup;
