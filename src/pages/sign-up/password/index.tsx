import Header from '@components/header';
import Footer from '@components/footer';
import { Layout } from './index.style';
import PasswordContent from './password-content';

const Password = () => {
  return (
    <>
      <Layout>
        <Header />
        <PasswordContent />
        <Footer />
      </Layout>
    </>
  );
};

export default Password;
