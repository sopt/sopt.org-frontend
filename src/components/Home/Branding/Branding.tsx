import { basicInfo } from '@src/assets/replaceMe/basicInfo';
import symbol1 from '@src/assets/replaceMe/branding/symbol(1).svg';
import RoundButton from '@src/components/common/RoundButton';
import UnderlinedTitle from '@src/components/common/UnderlinedTitle';
import React from 'react';

import * as S from './Branding.style';
import Symbol from './Symbol';

function Branding() {
  const title = `${basicInfo.number}기 THE SOPT`;
  const description = `SOPT는 매 기수마다 브랜딩을 진행합니다.\n\n매기수 핵심 가치와 부제를 선정하고\n한 학기 활동의 운영 원리로 삼아,\n\nIT벤처창업 분야에서 함께 성장할 수 있도록 합니다.\n\n현 ${basicInfo.number}기는 ${basicInfo.title} SOPT라는 이름으로\n${basicInfo.coreValue[0]}•${basicInfo.coreValue[1]}•${basicInfo.coreValue[2]}을 핵심 가치로 삼아 활동하고 있습니다.`;

  return (
    <S.Root>
      <UnderlinedTitle>{title}</UnderlinedTitle>
      <S.ContentWrap>
        <S.SymbolsWrap>
          <Symbol imgSrc={symbol1} name={basicInfo.coreValue[0]} />
          <Symbol imgSrc={symbol1} name={basicInfo.coreValue[1]} />
          <Symbol imgSrc={symbol1} name={basicInfo.coreValue[2]} />
        </S.SymbolsWrap>
        <S.TextWrap>
          <S.DescriptionLabel>{description}</S.DescriptionLabel>
          <RoundButton>SOPT 기수별 브랜딩 보기</RoundButton>
        </S.TextWrap>
      </S.ContentWrap>
    </S.Root>
  );
}

export default Branding;
