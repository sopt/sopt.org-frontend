import AppjamBackgrouondPc from '@src/assets/images/appjam_background.svg';
import UnderlinedTitle from '@src/components/common/UnderlinedTitle';
import { ABOUT_INFO } from '@src/constants/about';
import { url } from 'inspector';
import Image from 'next/image';
import React from 'react';

import AboutWrapper from '../AboutWrapper';
import * as S from './Appjam.style';
import AppjamBox from './AppjamBox';
import AppjamStep from './AppjamStep';
function Appjam() {
  const placeholder =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg';

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
