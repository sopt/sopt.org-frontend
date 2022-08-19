import React from 'react';

import UnderlinedTitle from '../common/UnderlinedTitle';
import * as S from './Rules.style';
import RulesList from './RulesList';
const SOPT_RULES = 'SOPT 회칙';

import { useMediaQuery } from 'react-responsive';
function Rules() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 769px)' });

  return (
    <S.Root>
      <UnderlinedTitle fontSize={isTabletOrMobile ? '25px' : '35px'}>{SOPT_RULES}</UnderlinedTitle>
      <RulesList />
    </S.Root>
  );
}

export default Rules;
