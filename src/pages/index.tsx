import styled from '@emotion/styled';
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
        <h1>메인페이지입니다</h1>
      </Styled.Main>
    </div>
  );
};

export default Home;

const Styled = {
  Main: styled.main`
    display: flex;
    position: absolute;
    width: 100px;
    height: 100px;
    color: ${({ theme }) => theme.colors.mainColor};
  `,
};
