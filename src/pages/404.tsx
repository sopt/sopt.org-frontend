import styled from '@emotion/styled';
import Sopt404 from '@src/assets/images/sopt_404.png';
import theme from '@src/styles/theme';
import Image from 'next/image';
import React from 'react';

function wrong() {
  return (
    <Styled.Root>
      <Image src={Sopt404.src} width={296} height={78} alt="솝트" />
      <span>잘못된 경로예요!</span>
    </Styled.Root>
  );
}

export default wrong;

const Styled = {
  Root: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    & span {
      margin-top: 99px;
      line-height: 56px;
      color: ${theme.colors.soptWhite};
      font-family: 'SUIT';
      font-size: 45px;
      font-weight: 400;
      font-style: normal;
    }
  `,
};
