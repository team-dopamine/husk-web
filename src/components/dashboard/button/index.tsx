import { Container, ActionButton, Divider } from './index.style';

const ButtonGroup = () => {
  return (
    <Container>
      <ActionButton>Save</ActionButton>
      <Divider />
      <ActionButton>Delete</ActionButton>
    </Container>
  );
};

export default ButtonGroup;
