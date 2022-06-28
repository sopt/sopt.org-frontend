import ArrowIcon from '@src/assets/icons/icArrowDown.svg';
import Image from 'next/image';
import React from 'react';

import * as S from './Top.style';

function Top() {
  return (
    <S.Wrap>
      <S.TextWrap>
        <S.SoptTitle>
          Shout Our
          <br />
          Passion Together
        </S.SoptTitle>
        <S.SoptSubtitle>솝트, 우리의 열정을 함께 외칩니다!</S.SoptSubtitle>
        <S.SoptDescription>
          SOPT는 IT와 벤처창업에 뜻이 있는 대학생들이 모인
          <br />
          국내 최대 규모의 대학생 연합 IT벤처창업 동아리입니다.
        </S.SoptDescription>
      </S.TextWrap>
      <S.ScrollWrap>
        <S.ScrollText>Scroll</S.ScrollText>
        <Image src={ArrowIcon} width="20px" alt="아래 화살표" />
      </S.ScrollWrap>
    </S.Wrap>
  );
}

export default Top;
