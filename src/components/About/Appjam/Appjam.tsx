import SeminarImg from '@src/assets/images/SeminarImg.svg';
import UnderlinedTitle from '@src/components/common/UnderlinedTitle';
import { ABOUT_INFO } from '@src/constants/about';
import React from 'react';

import AboutWrapper from '../AboutWrapper';
import * as S from './Appjam.style';
import AppjamBox from './AppjamBox';
import AppjamStep from './AppjamStep';
function Appjam() {
  return (
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
  );
}

export default Appjam;
