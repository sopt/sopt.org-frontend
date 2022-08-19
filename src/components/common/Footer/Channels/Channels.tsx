import facebookLogo from '@src/assets/icons/facebook_logo.svg';
import instagramLogo from '@src/assets/icons/instagram_logo.svg';
import kakaoLogo from '@src/assets/icons/kakao_logo.svg';
import mailLogo from '@src/assets/icons/mail_logo.svg';
import youtubeLogo from '@src/assets/icons/youtube_logo.svg';
import React from 'react';

import * as S from './Channels.style';

interface ChannelsProps {
  isFooter?: boolean;
}

function Channels({ isFooter = false }: ChannelsProps) {
  const channelsList = [
    mailLogo.src,
    facebookLogo.src,
    instagramLogo.src,
    youtubeLogo.src,
    kakaoLogo.src,
  ];

  return (
    <S.ChannelButtonsWrap isFooter={isFooter}>
      {channelsList.map((imgSrc) => (
        <S.ChannelButton key={imgSrc.id} src={imgSrc} />
      ))}
    </S.ChannelButtonsWrap>
  );
}

export default Channels;
