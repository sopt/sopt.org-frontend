import AppjamImage from '@src/assets/images/Appjam.svg';
import SopkathonImage from '@src/assets/images/Sopkathon.svg';
import SoptTermImage from '@src/assets/images/Sopt-Term.svg';
import { appjamInfo, sopkathonInfo, soptTermInfo } from '@src/assets/replaceMe/statistics';
import RoundButton from '@src/components/common/RoundButton';
import React from 'react';

import Event from './Event/Event';
import * as S from './Events.style';

function Events() {
  return (
    <S.Root>
      <S.EventWrap>
        <Event
          titleKorean="앱잼"
          titleEnglish="Appjam"
          imageSrc={AppjamImage}
          eventDetails={appjamInfo}
        />
        <Event
          titleKorean="솝커톤"
          titleEnglish="Sopkathon"
          imageSrc={SopkathonImage}
          eventDetails={sopkathonInfo}
        />
        <Event
          titleKorean="솝텀프로젝트"
          titleEnglish="SOPT-term"
          imageSrc={SoptTermImage}
          eventDetails={soptTermInfo}
        />
      </S.EventWrap>
      <RoundButton>SOPT 서비스 구경하기</RoundButton>
    </S.Root>
  );
}

export default Events;
