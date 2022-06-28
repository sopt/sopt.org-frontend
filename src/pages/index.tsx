import Header from '@src/components/common/Header';
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

      <Header />
      <Top />
    </div>
  );
};

export default Home;
