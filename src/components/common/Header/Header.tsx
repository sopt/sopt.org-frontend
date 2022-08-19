import menuBar from '@src/assets/icons/menuBar.svg';
import logoIcon from '@src/assets/replaceMe/branding/logo.png';
import HeaderMenu from '@src/components/common/Header/Menu';
import React, { useEffect, useState } from 'react';
import Slide from 'react-reveal/Slide';

import * as S from './Header.style';

function Header() {
  const [isMenuShown, SetIsMenuShown] = useState(false);

  return (
    <>
      <S.Header>
        <S.Wrap>
          <S.Logo src={logoIcon.src} />
          <S.HamburgerBar
            src={menuBar.src}
            onClick={() => {
              SetIsMenuShown(true);
            }}
          />
        </S.Wrap>
      </S.Header>
      {isMenuShown && (
        <HeaderMenu
          handleCloseClick={() => {
            SetIsMenuShown(false);
          }}
        />
      )}
    </>
  );
}

export default Header;
