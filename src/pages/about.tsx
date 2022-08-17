import styled from '@emotion/styled';
import AboutHead from '@src/components/About/AboutHead';
import Appjam from '@src/components/About/Appjam';
import Seminar from '@src/components/About/Seminar';
import Sopkaton from '@src/components/About/Sopkaton';
import StudyNetworking from '@src/components/About/StudyNetworking';
import Footer from '@src/components/common/Footer';
import React from 'react';

function about() {
  return (
    <>
      <AboutHead />
      <Styled.Main>
        <Seminar />
        <Appjam />
        <Sopkaton />
        <StudyNetworking />
      </Styled.Main>
      <Footer />
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
};
