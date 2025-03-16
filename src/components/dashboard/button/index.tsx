import postKeychain from 'api/keychains/register-keychain';
import { Container, ActionButton, Divider } from './index.style';

type ButtonGroupProps = {
  inputValues: string[];
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({ inputValues }) => {
  const handleSave = async () => {
    try {
      const trimmedValues = inputValues.map((value) => value.trim());

      if (trimmedValues.some((value) => value === '')) {
        alert('모든 필드를 입력하세요.');
        return;
      }

      await postKeychain({
        name: inputValues[0],
        content: inputValues[1],
        accessToken: 'your_token_here',
      });
    } catch (error) {
      console.error('Error posting data:', error);
      alert(error instanceof Error ? error.message : '데이터 저장에 실패했습니다.');
    }
  };

  return (
    <Container>
      <ActionButton onClick={handleSave}>Save</ActionButton>
      <Divider />
      <ActionButton>Delete</ActionButton>
    </Container>
  );
};

export default ButtonGroup;
