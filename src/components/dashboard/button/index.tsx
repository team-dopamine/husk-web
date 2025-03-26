import { Container, ActionButton, Divider } from './index.style';
// import patchKeyChainDelete from 'api/keychains/keychain-delete';
// import patchKeyChainUpdate from 'api/keychains/keychain-update';

type ButtonGroupProps = {
  inputValues: string[];
  id?: number;
  onSave: () => void;
  onDelete: () => void;
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({ inputValues, id, onSave, onDelete }) => {
  return (
    <Container>
      <ActionButton onClick={onSave}>update</ActionButton>
      <Divider />
      <ActionButton onClick={onDelete}>Delete</ActionButton>
    </Container>
  );
};

export default ButtonGroup;
