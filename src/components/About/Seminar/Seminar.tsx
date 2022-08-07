import SeminarImg from '@src/assets/images/SeminarImg.svg';
import { basicInfo } from '@src/assets/replaceMe/basicInfo';
import RoundButton from '@src/components/common/RoundButton';
import UnderlinedTitle from '@src/components/common/UnderlinedTitle';
import { ABOUT_INFO } from '@src/constants/about';
import Image from 'next/image';
import React from 'react';
import Fade from 'react-reveal/Fade';

import PartInfos from './PartInfos';
import * as S from './Seminar.style';

function Seminar() {
  return (
    <S.Root>
      <S.Wrap>
        <S.TopBox>
          <Fade top>
            <S.InfoText>
              <S.Description>{ABOUT_INFO.SEMINAR.description}</S.Description>
              <UnderlinedTitle fontSize="40px">{ABOUT_INFO.SEMINAR.title}</UnderlinedTitle>
              <S.Contents>{ABOUT_INFO.SEMINAR.contents}</S.Contents>
            </S.InfoText>
          </Fade>
          <Fade top>
            <S.InfoImg>
              <Image
                src={SeminarImg}
                width={280}
                height={300}
                alt="service - design, plan, server, web, ios, android"
              />
            </S.InfoImg>
          </Fade>
        </S.TopBox>
        <S.ContentWrap>
          <PartInfos />
        </S.ContentWrap>
      </S.Wrap>
    </S.Root>
  );
}

export default Seminar;
