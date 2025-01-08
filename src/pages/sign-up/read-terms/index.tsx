import Header from '@components/header';
import Footer from '@components/footer';
import { Layout } from './index.style';
import ReadTermsContent from './read-terms-content';

const ReadTerms = () => {
  return (
    <>
      <Layout>
        <Header />
        <ReadTermsContent />
        <Footer />
      </Layout>
    </>
  );
};

export default ReadTerms;
