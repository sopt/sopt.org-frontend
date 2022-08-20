import SeminarImg from '@src/assets/images/SeminarImg.svg';
import UnderlinedTitle from '@src/components/common/UnderlinedTitle';
import { ABOUT_INFO } from '@src/constants/about';
import Image from 'next/image';

import AboutWrapper from '../AboutWrapper';
import PartInfos from './PartInfos';
import * as S from './Seminar.style';

function Seminar() {
  return (
    <AboutWrapper>
      <AboutWrapper.Top
        leftProps={
          <>
            <S.Description>{ABOUT_INFO.SEMINAR.description}</S.Description>
            <UnderlinedTitle fontSize="40px">{ABOUT_INFO.SEMINAR.title}</UnderlinedTitle>
            <S.Contents>{ABOUT_INFO.SEMINAR.contents}</S.Contents>
          </>
        }
        rightProps={
          <Image
            src={SeminarImg}
            width={280}
            height={300}
            alt="service - design, plan, server, web, ios, android"
            blurDataURL={SeminarImg}
            placeholder="blur"
          />
        }
      />
      <AboutWrapper.Content>
        <PartInfos />
      </AboutWrapper.Content>
    </AboutWrapper>
  );
}

export default Seminar;
