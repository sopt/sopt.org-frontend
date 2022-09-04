import styled from '@emotion/styled';
import Footer from '@src/components/common/Footer';
import Header from '@src/components/common/Header';
import DetailMain from '@src/components/History/DetailMain';
import React from 'react';

function DetailHistory() {
  return (
    <>
      <Header />
      <DetailMain />
      <Footer />
    </>
  );
}

export default DetailHistory;

const Styled = {
  Root: styled.section``,
};
