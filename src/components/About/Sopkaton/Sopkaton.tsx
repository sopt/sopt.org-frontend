// import SeminarImg from '@src/assets/images/SeminarImg.svg';
import UnderlinedTitle from '@src/components/common/UnderlinedTitle';
import { ABOUT_INFO } from '@src/constants/about';
import Image from 'next/image';

import AboutWrapper from '../AboutWrapper';
import * as S from './Sopkaton.style';
import SopkatonImage from './SopkatonImage';

function Sopkaton() {
  return (
    <AboutWrapper>
      <AboutWrapper.Top
        leftProps={
          <>
            <S.Description>{ABOUT_INFO.SOPKATHON.description}</S.Description>
            <UnderlinedTitle fontSize="40px">{ABOUT_INFO.SOPKATHON.title}</UnderlinedTitle>
            <S.Contents>{ABOUT_INFO.SOPKATHON.contents}</S.Contents>
          </>
        }
        rightProps={<SopkatonImage />}
      />
      <AboutWrapper.Content>
        <div>히히</div>
      </AboutWrapper.Content>
    </AboutWrapper>
  );
}

export default Sopkaton;
