import symbol1 from '@src/assets/replaceMe/brading/symbol(1).svg';
import RoundButton from '@src/components/common/RoundButton';
import UnderlinedTitle from '@src/components/common/UnderlinedTitle';
import React from 'react';

import * as S from './Branding.style';
import Symbol from './Symbol';

function Branding() {
  return (
    <S.Root>
      <UnderlinedTitle>30기 THE SOPT</UnderlinedTitle>
      <S.ContentWrap>
        <S.SymbolsWrap>
          <Symbol imgSrc={symbol1} name="실천" />
          <Symbol imgSrc={symbol1} name="연결" />
          <Symbol imgSrc={symbol1} name="발전" />
        </S.SymbolsWrap>
        <S.TextWrap>
          <S.DescriptionLabel>
            SOPT는 매 기수마다 브랜딩을 진행합니다.
            <br />
            <br />
            매기수 핵심 가치와 부제를 선정하고
            <br />한 학기 활동의 운영 원리로 삼아,
            <br />
            IT벤처창업 분야에서 함께 성장할 수 있도록 합니다.
            <br />
            <br />현 30기는 THE SOPT라는 이름으로
            <br />
            실천•연결•발전을 핵심 가치로 삼아 활동하고 있습니다.
          </S.DescriptionLabel>
          <RoundButton>SOPT 기수별 브랜딩 보기</RoundButton>
        </S.TextWrap>
      </S.ContentWrap>
    </S.Root>
  );
}

export default Branding;
