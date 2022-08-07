import styled from '@emotion/styled';
import AboutHead from '@src/components/About/AboutHead';
import Seminar from '@src/components/About/Seminar';
import React from 'react';

function about() {
  return (
    <>
      <AboutHead />
      <Styled.Main>
        <Seminar />
      </Styled.Main>
    </>
  );
}

export default about;

const Styled = {
  Main: styled.main``,
};
