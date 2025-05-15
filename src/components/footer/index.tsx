import { Container, Divider, Link } from './index.style';

const Footer = () => {
  return (
    <>
      <Container>
        <Link href="/">© Team Dopamine.</Link>
        <Divider />
        <Link href="https://forms.gle/jGgHxCvGnrg2LSV1A" target="_blank" rel="noopener noreferrer" type="text">
          서비스 피드백
        </Link>
        <Divider />
        <Link href="/terms">이용약관</Link>
        <Divider />
        <Link type="text">개인정보처리방침</Link>
      </Container>
    </>
  );
};

export default Footer;
