import facebookLogo from '@src/assets/icons/facebook_logo.svg';
import instagramLogo from '@src/assets/icons/instagram_logo.svg';
import kakaoLogo from '@src/assets/icons/kakao_logo.svg';
import mailLogo from '@src/assets/icons/mail_logo.svg';
import youtubeLogo from '@src/assets/icons/youtube_logo.svg';
import { useRouter } from 'next/router';
import React from 'react';

import * as S from './Footer.style';

function Footer() {
  const channelsList = [
    mailLogo.src,
    facebookLogo.src,
    instagramLogo.src,
    youtubeLogo.src,
    kakaoLogo.src,
  ];
  const router = useRouter();

  const handleClick = () => {
    router.push('/rules');
  };

  return (
    <S.Root>
      <S.ContentWrap>
        <S.InfoWrap>
          <S.TitleButton onClick={handleClick}>SOPT 회칙</S.TitleButton>
          <S.CopyrightText>
            SOPT (솝트, 대학생연합 IT벤처창업 동아리)
            <br />
            Copyrightⓒ2022.SOPT. All rights reserved.
          </S.CopyrightText>
        </S.InfoWrap>
        <S.ChannelsWrap>
          <S.ChannelTitleText>SOPT 채널 바로가기</S.ChannelTitleText>
          <S.ChannelButtonsWrap>
            {channelsList.map((imgSrc) => (
              <S.ChannelButton key={imgSrc.id} src={imgSrc} />
            ))}
          </S.ChannelButtonsWrap>
        </S.ChannelsWrap>
      </S.ContentWrap>
    </S.Root>
  );
}

export default Footer;
