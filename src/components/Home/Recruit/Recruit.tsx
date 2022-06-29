import Arrow from '@src/assets/icons/icArrowDown.svg';
import RoundButton from '@src/components/common/RoundButton';
import UnderlinedTitle from '@src/components/common/UnderlinedTitle';
import React from 'react';

import * as S from './Recruit.style';

function Recruit() {
  return (
    <S.Root>
      <UnderlinedTitle>신입회원 모집</UnderlinedTitle>
      <S.ContentWrap>
        <S.StepWrap>
          <S.PlainCircleText>1차 서류</S.PlainCircleText>
          <S.ArrowIcon src={Arrow.src} alt="오른쪽 화살표" />
          <S.PlainCircleText>2차 면접</S.PlainCircleText>
          <S.ArrowIcon src={Arrow.src} alt="오른쪽 화살표" />
          <S.GradientCircleText>최종 합격</S.GradientCircleText>
        </S.StepWrap>
        <S.TextWrap>
          <S.Description>
            SOPT는 매년 두 번, 3월과 9월에 신입회원을 모집합니다.
            <br />
            서류 평가와 면접 평가를 통해 신입회원을 선발합니다.
            <br />
            <br />
            SOPT 채널(페이스북, 인스타그램, 유튜브, 카카오톡 채널)을
            <br />
            통해 다음 기수 리크루팅 소식을 전달 받을 수 있습니다.
          </S.Description>
          <RoundButton isReverse={true}>SOPT 지원하기</RoundButton>
        </S.TextWrap>
      </S.ContentWrap>
    </S.Root>
  );
}

export default Recruit;
