import menuBar from '@src/assets/icons/menuBar.svg';
import logoIcon from '@src/assets/replaceMe/branding/logo.png';
import HeaderMenu from '@src/components/common/Header/Menu';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Slide from 'react-reveal/Slide';

import * as S from './Header.style';

function Header() {
  const [isMenuShown, SetIsMenuShown] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  };

  return (
    <>
      <S.Header>
        <S.Wrap>
          <S.CenterAligner>
            <S.Logo src={logoIcon.src} onClick={handleClick} />
          </S.CenterAligner>
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
