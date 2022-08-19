import facebookLogo from '@src/assets/icons/facebook_logo.svg';
import instagramLogo from '@src/assets/icons/instagram_logo.svg';
import kakaoLogo from '@src/assets/icons/kakao_logo.svg';
import mailLogo from '@src/assets/icons/mail_logo.svg';
import youtubeLogo from '@src/assets/icons/youtube_logo.svg';
import Channels from '@src/components/common/Footer/Channels';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import * as S from './Footer.style';

function Footer() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  const channelsList = [
    mailLogo.src,
    facebookLogo.src,
    instagramLogo.src,
    youtubeLogo.src,
    kakaoLogo.src,
  ];

  return (
    <S.Root>
      <S.ContentWrap>
        <S.InfoWrap>
          <S.TitleButton>SOPT 회칙</S.TitleButton>
          <S.CopyrightText>
            SOPT (솝트, 대학생연합 IT벤처창업 동아리)
            <br />
            Copyrightⓒ2022.SOPT. All rights reserved.
          </S.CopyrightText>
        </S.InfoWrap>
        <S.ChannelsWrap>
          {isDesktop && <S.ChannelTitleText>SOPT 채널 바로가기</S.ChannelTitleText>}
          <Channels />
        </S.ChannelsWrap>
      </S.ContentWrap>
    </S.Root>
  );
}

export default Footer;
