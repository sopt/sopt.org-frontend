import UnderlinedTitle from '@src/components/common/UnderlinedTitle';
import { DESCRIPTION, TITLE } from '@src/constants/history';
import React from 'react';

import * as S from './Main.style';

function Main() {
  return (
    <S.Root>
      <UnderlinedTitle fontSize="35px">{TITLE}</UnderlinedTitle>
      <S.Description>{DESCRIPTION}</S.Description>
    </S.Root>
  );
}

export default Main;
