import { Container, Divider, Link } from './index.style';

const Footer = () => {
  return (
    <>
      <Container>
        <Link type="text">© Team Dopamine.</Link>
        <Divider />
        <Link type="text">서비스 피드백</Link>
        <Divider />
        <Link type="text">이용약관</Link>
        <Divider />
        <Link type="text">개인정보처리방침</Link>
      </Container>
    </>
  );
};

export default Footer;
