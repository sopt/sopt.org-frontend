import React from 'react';

import * as S from './Header.style';

export const ASSETS = {
  TITLE: '메인 헤더입니다',
};

function Header() {
  return (
    <S.Header>
      <S.title>{ASSETS.TITLE}</S.title>
    </S.Header>
  );
}

export default Header;
