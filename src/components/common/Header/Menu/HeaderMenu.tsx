import xButton from '@src/assets/icons/xButton.svg';
import Channels from '@src/components/common/Footer/Channels';
import React from 'react';

import * as S from './HeaderMenu.style';

interface HeaderMenuProps {
  handleCloseClick: any;
}

function HeaderMenu({ handleCloseClick }: HeaderMenuProps) {
  return (
    <S.Root>
      <S.MenuWrap>
        <S.CloseButton src={xButton.src} onClick={handleCloseClick} />
        <S.ContentsWrap>
          <S.MenuTitlesWrap>
            <S.MenuTitle isSelected={true}>홈</S.MenuTitle>
            <S.MenuTitle isSelected={false}>SOPT소개</S.MenuTitle>
            <S.MenuTitle isSelected={false}>역대기수소개</S.MenuTitle>
            <S.MenuTitle isSelected={false}>프로젝트</S.MenuTitle>
            <S.MenuTitle isSelected={false}>신입회원모집</S.MenuTitle>
            <S.MenuTitle isSelected={false}>협력사</S.MenuTitle>
          </S.MenuTitlesWrap>
          <S.BottomWrap>
            <S.Rules>SOPT 회칙</S.Rules>
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
