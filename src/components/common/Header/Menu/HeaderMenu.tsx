import xButton from '@src/assets/icons/xButton.png';
import Channels from '@src/components/common/Footer/Channels';
import useNoScroll from '@src/hooks/useNoScroll';
import { useRouter } from 'next/router';
import React from 'react';

import * as S from './HeaderMenu.style';

interface HeaderMenuProps {
  handleCloseClick: any;
}

function HeaderMenu({ handleCloseClick }: HeaderMenuProps) {
  useNoScroll();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const currentMenu = e.currentTarget.id;

    if (currentMenu === '/recruit') {
      window.open('https://sopt-recruiting.web.app/recruiting/apply/ob');

      return;
    }
    router.push(currentMenu);
  };

  return (
    <S.Root>
      <S.MenuWrap>
        <S.CloseButton src={xButton.src} onClick={handleCloseClick} />
        <S.ContentsWrap>
          <S.MenuTitlesWrap>
            <S.MenuTitle id="/" isSelected={router.pathname === '/'} onClick={handleClick}>
              홈
            </S.MenuTitle>
            <S.MenuTitle
              id="/about"
              isSelected={router.pathname === '/about'}
              onClick={handleClick}
            >
              SOPT소개
            </S.MenuTitle>
            <S.MenuTitle
              id="/history"
              isSelected={router.pathname === '/history'}
              onClick={handleClick}
            >
              역대기수소개
            </S.MenuTitle>
            <S.MenuTitle
              id="/projects"
              isSelected={router.pathname === '/projects'}
              onClick={handleClick}
            >
              프로젝트
            </S.MenuTitle>
            <S.MenuTitle
              id="/recruit"
              isSelected={router.pathname === '/recruit'}
              onClick={handleClick}
            >
              신입회원모집
            </S.MenuTitle>
            <S.MenuTitle
              id="/partners"
              isSelected={router.pathname === '/partners'}
              onClick={handleClick}
            >
              협력사
            </S.MenuTitle>
          </S.MenuTitlesWrap>
          <S.BottomWrap>
            <S.Rules id="/rules" onClick={handleClick}>
              SOPT 회칙
            </S.Rules>
            <S.ChannelWrap>
              <S.ChannelTitle>SOPT 채널 바로가기</S.ChannelTitle>
              <Channels />
            </S.ChannelWrap>
          </S.BottomWrap>
        </S.ContentsWrap>
      </S.MenuWrap>
    </S.Root>
  );
}

export default HeaderMenu;
