import { Container, ActionButton, Divider } from './index.style';

type ButtonGroupProps = {
  inputValues: string[];
  id?: number;
  onSave: () => void;
  onDelete: () => void;
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({ onSave, onDelete }) => {
  return (
    <Container>
      <ActionButton onClick={onSave}>Update</ActionButton>
      <Divider />
      <ActionButton onClick={onDelete}>Delete</ActionButton>
    </Container>
  );
};

export default ButtonGroup;
