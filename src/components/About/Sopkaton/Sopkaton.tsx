import UnderlinedTitle from '@src/components/common/UnderlinedTitle';
import { ABOUT_INFO } from '@src/constants/about';

import AboutWrapper from '../AboutWrapper';
import * as S from './Sopkaton.style';
import SopkatonImage from './SopkatonImage';
import Subjects from './Subjects';

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
        <Subjects />
      </AboutWrapper.Content>
    </AboutWrapper>
  );
}

export default Sopkaton;
