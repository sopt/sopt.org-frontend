import InstagramIcon from '@src/assets/icons/instagram_icon.svg';
import YoutubeIcon from '@src/assets/icons/youtube_icon.svg';
import Team1 from '@src/assets/images/team1.png';
import Team2 from '@src/assets/images/team2.png';
import BorderRoundButton from '@src/components/common/BorderRoundButton';
import Image from 'next/image';
import React from 'react';

import * as S from './TeamImage.style';

function TeamImage() {
  return (
    <S.Root>
      <S.ImageWrapper>
        <Image src={Team1} width={250} height={200} alt="운영팀" />
        <S.Tag># 이벤트_대장_운영팀</S.Tag>
        <BorderRoundButton className="timi__button">
          <Image src={InstagramIcon} width={24} height={24} alt="인스타 아이콘" />
          운영팀 일상 보기
        </BorderRoundButton>
      </S.ImageWrapper>
      <S.ImageWrapper>
        <Image src={Team2} width={250} height={200} alt="미디어팀" />
        <S.Tag># 각종_소식을_전하는_미디어팀</S.Tag>
        <BorderRoundButton className="media__button">
          <Image src={YoutubeIcon} width={26} height={18} alt="유튜브 아이콘" />
          미디어팀 콘텐츠 보기
        </BorderRoundButton>
      </S.ImageWrapper>
    </S.Root>
  );
}

export default TeamImage;
