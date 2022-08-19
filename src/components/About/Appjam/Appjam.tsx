import AppjamBackgrouondPc from '@src/assets/images/appjam_background.svg';
import UnderlinedTitle from '@src/components/common/UnderlinedTitle';
import { ABOUT_INFO } from '@src/constants/about';
import Image from 'next/image';
import React from 'react';

import AboutWrapper from '../AboutWrapper';
import * as S from './Appjam.style';
import AppjamBox from './AppjamBox';
import AppjamStep from './AppjamStep';
function Appjam() {
  return (
    <S.AppjamWrapper>
      <S.ImageWrapper>
        <Image src={AppjamBackgrouondPc.src} width={454} height={319} alt="background flower" />
      </S.ImageWrapper>
      <AboutWrapper>
        <AboutWrapper.Top
          leftProps={
            <>
              <S.Description>{ABOUT_INFO.APPJAM.description}</S.Description>
              <UnderlinedTitle fontSize="40px">{ABOUT_INFO.APPJAM.title}</UnderlinedTitle>
              <S.Contents>{ABOUT_INFO.APPJAM.contents}</S.Contents>
            </>
          }
          rightProps={<AppjamBox />}
        />
        <AboutWrapper.Content>
          <AppjamStep />
        </AboutWrapper.Content>
      </AboutWrapper>
    </S.AppjamWrapper>
  );
}

export default Appjam;
