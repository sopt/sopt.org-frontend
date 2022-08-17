import SoptTermServices from '@src/assets/images/sopterm_service.png';
import { NetworkingImage } from '@src/assets/replaceMe/imageList';
import UnderlinedTitle from '@src/components/common/UnderlinedTitle';
import { ABOUT_INFO } from '@src/constants/about';
import Image from 'next/image';

import AboutWrapper from '../AboutWrapper';
import * as S from './SoptTerm.style';
import SoptTermImage from './SoptTermImage';
function SoptTerm() {
  return (
    <AboutWrapper>
      <AboutWrapper.Top
        leftProps={
          <>
            <S.Description>{ABOUT_INFO.SOPTTERM.description}</S.Description>
            <UnderlinedTitle fontSize="40px">{ABOUT_INFO.SOPTTERM.title}</UnderlinedTitle>
            <S.Contents>
              {ABOUT_INFO.SOPTTERM.contents}
              <br />
              <br />
              <strong>#한기수이상_수료자만_가능</strong>
            </S.Contents>
          </>
        }
        rightProps={<SoptTermImage />}
      />
      <AboutWrapper.Content>
        <S.ImageWrapper>
          <S.Filter />
          <Image src={SoptTermServices.src} width={1020} height={165} alt="솝텀 서비스들" />
        </S.ImageWrapper>
      </AboutWrapper.Content>
    </AboutWrapper>
  );
}

export default SoptTerm;
