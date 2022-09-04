import styled from '@emotion/styled';
import Sopt404 from '@src/assets/images/sopt_404.png';
import Footer from '@src/components/common/Footer';
import Header from '@src/components/common/Header';
import RoundButton from '@src/components/common/RoundButton';
import Main from '@src/components/History/Main';
import theme from '@src/styles/theme';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

function HistoryPage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default HistoryPage;
