import Footer from '@src/components/common/Footer';
import Header from '@src/components/common/Header';
import Partners from '@src/components/Partners/Partners';
import Projects from '@src/components/Partners/Projects/Projects';
import { NextPage } from 'next';

const PartnersPage: NextPage = () => {
  return (
    <>
      <Header />
      <Projects />
      <Partners />
      <Footer />
    </>
  );
};

export default PartnersPage;
