import Header from '../../components/header';
import Footer from '../../components/footer';
import { Layout } from './index.style';
import Content from './content';

const Main = () => {
  return (
    <>
      <Layout>
        <Header />
        <Content />
        <Footer />
      </Layout>
    </>
  );
};

export default Main;
