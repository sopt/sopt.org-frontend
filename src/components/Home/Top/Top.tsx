import ArrowIcon from '@src/assets/icons/icArrowDown.svg';
import Image from 'next/image';
import React from 'react';
import Fade from 'react-reveal/Fade';

import * as S from './Top.style';

function Top() {
  return (
    <S.Root>
      <S.Wrap>
        <S.TextWrap>
          <Fade top>
            <S.SoptTitle>
              Shout Our
              <br />
              Passion Together
            </S.SoptTitle>
          </Fade>
          <Fade top delay={300}>
            <S.SoptSubtitle>솝트, 우리의 열정을 함께 외칩니다!</S.SoptSubtitle>
          </Fade>
          <Fade top delay={1000}>
            <S.SoptDescription>
              SOPT는 IT와 벤처창업에 뜻이 있는 대학생들이 모인
              <br />
              국내 최대 규모의 대학생 연합 IT벤처창업 동아리입니다.
            </S.SoptDescription>
          </Fade>
        </S.TextWrap>
        <S.ScrollWrap>
          <S.ScrollText>Scroll</S.ScrollText>
          <Image
            src={ArrowIcon}
            width="20px"
            alt="아래 화살표"
            blurDataURL={ArrowIcon}
            placeholder="blur"
          />
        </S.ScrollWrap>
      </S.Wrap>
    </S.Root>
  );
}

export default Top;
