import Header from '../../components/header';
import Footer from '../../components/footer';
import Content from '../../components/content';
import { Layout } from './index.style';

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
