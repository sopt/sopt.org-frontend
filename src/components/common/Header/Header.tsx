import menuBar from '@src/assets/icons/menuBar.svg';
import logoIcon from '@src/assets/replaceMe/branding/logo.png';
import React from 'react';

import * as S from './Header.style';

function Header() {
  return (
    <S.Header>
      <S.Wrap>
        <S.Logo src={logoIcon.src} />
        <S.HamburgerBar src={menuBar.src} />
      </S.Wrap>
    </S.Header>
  );
}

export default Header;
