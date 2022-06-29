import styled from '@emotion/styled';
import Branding from '@src/components/Home/Branding';
import Events from '@src/components/Home/Events';
import Introduce from '@src/components/Home/Introduce';
import Recruit from '@src/components/Home/Recruit';
import SoptMarquee from '@src/components/Home/SoptMarquee';
import Top from '@src/components/Home/Top';
import type { NextPage } from 'next';
import Head from 'next/head';
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SOPT Main Page</title>
        <meta name="description" content="sopt입니다.." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Styled.Main>
        <Top />
        <Introduce />
        <Events />
        <SoptMarquee />
        <Branding />
        <SoptMarquee isReverse={true} />
        <Recruit />
      </Styled.Main>
    </div>
  );
};

export default Home;

const Styled = {
  Main: styled.main`
    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
  `,
};
