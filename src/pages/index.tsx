import styled from '@emotion/styled';
import Footer from '@src/components/common/Footer';
import Header from '@src/components/common/Header';
import Branding from '@src/components/Home/Branding';
import Events from '@src/components/Home/Events';
import Introduce from '@src/components/Home/Introduce';
import Recruit from '@src/components/Home/Recruit';
import Top from '@src/components/Home/Top';
import type { NextPage } from 'next';
import Head from 'next/head';
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SOPT Main Page</title>
        <meta name="description" content="sopt입니다.." />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Styled.Main>
        <Top />
        <Introduce />
        <Events />
        <Branding />
        <Recruit />
        <Footer />
      </Styled.Main>
    </div>
  );
};

export default Home;

const Styled = {
  Main: styled.main`
    @media (min-width: 1280px) {
      height: 100vh;
      scroll-snap-type: y mandatory;
      overflow-y: scroll;
    }
  `,
};
