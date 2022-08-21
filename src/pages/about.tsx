import styled from '@emotion/styled';
import Sopt404 from '@src/assets/images/sopt_404.png';
import AboutHead from '@src/components/About/AboutHead';
import Appjam from '@src/components/About/Appjam';
import Seminar from '@src/components/About/Seminar';
import Sopkaton from '@src/components/About/Sopkaton';
import SoptTerm from '@src/components/About/SoptTerm';
import StudyNetworking from '@src/components/About/StudyNetworking';
import Team from '@src/components/About/Team';
import Footer from '@src/components/common/Footer';
import Header from '@src/components/common/Header';
import theme from '@src/styles/theme';
import Image from 'next/image';
import React from 'react';

function about() {
  return (
    <>
      <AboutHead />
      <Header />
      <Styled.Main>
        <Seminar />
        <Appjam />
        <Sopkaton />
        <StudyNetworking />
        <SoptTerm />
        <Team />
        <Footer />
      </Styled.Main>
    </>
  );
}

export default about;

const Styled = {
  Main: styled.main`
    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
  `,
  Root: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    & span {
      margin-top: 99px;
      margin-bottom: 99px;
      line-height: 56px;
      color: ${theme.colors.soptWhite};
      font-family: 'SUIT';
      font-size: 45px;
      font-weight: 400;
      font-style: normal;
    }
  `,
};
