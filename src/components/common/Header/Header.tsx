import menuBar from '@src/assets/icons/menuBar.svg';
import logoIcon from '@src/assets/replaceMe/branding/logo.png';
import HeaderMenu from '@src/components/common/Header/Menu';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Slide from 'react-reveal/Slide';

import * as S from './Header.style';

export type MenuType = 'idle' | 'true' | 'false';

function Header() {
  const [isMenuShown, setIsMenuShown] = useState<MenuType>('idle');

  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  };

  const handleCloseButton = () => {
    console.log('>>눌림?');
    setIsMenuShown('true');
  };

  React.useEffect(() => {
    console.log('>>isMenuShown', isMenuShown);
  }, [isMenuShown]);

  return (
    <>
      <S.Header>
        <S.Wrap>
          <S.CenterAligner>
            <S.Logo src={logoIcon.src} onClick={handleClick} />
          </S.CenterAligner>
          <S.HamburgerBar src={menuBar.src} onClick={handleCloseButton} />
        </S.Wrap>
      </S.Header>
      <HeaderMenu setIsMenuShown={setIsMenuShown} isMenuShown={isMenuShown} />
    </>
  );
}

export default Header;
