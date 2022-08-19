import React from 'react';

import UnderlinedTitle from '../common/UnderlinedTitle';
import * as S from './Rules.style';
import RulesList from './RulesList';
const SOPT_RULES = 'SOPT 회칙';

function Rules() {
  return (
    <S.Root>
      <UnderlinedTitle>{SOPT_RULES}</UnderlinedTitle>
      <RulesList />
    </S.Root>
  );
}

export default Rules;
