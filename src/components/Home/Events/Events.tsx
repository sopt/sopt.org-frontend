import AppjamImage from '@src/assets/images/Appjam.svg';
import SopkathonImage from '@src/assets/images/Sopkathon.svg';
import SoptTermImage from '@src/assets/images/Sopt-Term.svg';
import { appjamInfo, sopkathonInfo, soptTermInfo } from '@src/assets/replaceMe/statistics';
import RoundButton from '@src/components/common/RoundButton';
import React from 'react';
import Fade from 'react-reveal/Fade';

import Event from './Event/Event';
import * as S from './Events.style';

function Events() {
  return (
    <S.Root>
      <S.EventWrap>
        <Fade left>
          <Event
            titleKorean="앱잼"
            titleEnglish="Appjam"
            imageSrc={AppjamImage}
            eventDetails={appjamInfo}
          />
        </Fade>
        <Fade left delay={300}>
          <Event
            titleKorean="솝커톤"
            titleEnglish="Sopkathon"
            imageSrc={SopkathonImage}
            eventDetails={sopkathonInfo}
          />
        </Fade>
        <Fade left delay={600}>
          <Event
            titleKorean="솝텀프로젝트"
            titleEnglish="SOPT-term"
            imageSrc={SoptTermImage}
            eventDetails={soptTermInfo}
          />
        </Fade>
      </S.EventWrap>
      <Fade delay={1000}>
        <RoundButton>SOPT 서비스 구경하기</RoundButton>
      </Fade>
    </S.Root>
  );
}

export default Events;
