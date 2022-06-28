import RoundButton from '@src/components/common/RoundButton';
import { EventDetailNumbers } from '@src/types/EventDetailNumbers';
import React from 'react';

import Event from './Event/Event';
import * as S from './Events.style';

function Events() {
  const appjamInfo: EventDetailNumbers[] = [
    { order: 1, title: '협업 기간', number: 3, unit: '주' },
    { order: 2, title: '진행 횟수', number: 20, unit: '회' },
    { order: 3, title: '서비스 개수', number: 250, unit: '개+' },
  ];

  const sopkathonInfo: EventDetailNumbers[] = [
    { order: 1, title: '협업 기간', number: 16, unit: '시간' },
    { order: 2, title: '진행 횟수', number: 7, unit: '회' },
    { order: 3, title: '서비스 개수', number: 80, unit: '개+' },
  ];

  const soptTermInfo: EventDetailNumbers[] = [
    { order: 1, title: '협업 기간', number: 8, unit: '주' },
    { order: 2, title: '진행 횟수', number: 4, unit: '회' },
    { order: 3, title: '서비스 개수', number: 20, unit: '개+' },
  ];

  return (
    <S.Root>
      <S.EventWrap>
        <Event titleKorean="앱잼" titleEnglish="Appjam" imageSrc="" eventDetails={appjamInfo} />
        <Event
          titleKorean="솝커톤"
          titleEnglish="Sopkathon"
          imageSrc=""
          eventDetails={sopkathonInfo}
        />
        <Event
          titleKorean="솝텀프로젝트"
          titleEnglish="SOPT-term"
          imageSrc=""
          eventDetails={soptTermInfo}
        />
      </S.EventWrap>
      <RoundButton>SOPT 서비스 구경하기</RoundButton>
    </S.Root>
  );
}

export default Events;
