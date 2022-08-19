import { RULES } from '@src/assets/replaceMe/rules';
import React from 'react';

import * as S from './RulesList.style';

function RulesList() {
  return (
    <S.Ul>
      {RULES.map((item) => {
        return <div key={item.title}>{item.title}</div>;
      })}
      ;
    </S.Ul>
  );
}

export default RulesList;
