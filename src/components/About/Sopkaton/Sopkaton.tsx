import UnderlinedTitle from '@src/components/common/UnderlinedTitle';
import { ABOUT_INFO } from '@src/constants/about';
import { useMediaQuery } from 'react-responsive';

import AboutWrapper from '../AboutWrapper';
import * as S from './Sopkaton.style';
import SopkatonImage from './SopkatonImage';
import Subjects from './Subjects';

function Sopkaton() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  return (
    <AboutWrapper>
      <AboutWrapper.Top
        leftTitleProps={
          <>
            <S.Description>{ABOUT_INFO.SOPKATHON.description}</S.Description>
            <UnderlinedTitle fontSize="40px">{ABOUT_INFO.SOPKATHON.title}</UnderlinedTitle>
          </>
        }
        leftDescriptionProps={
          <S.Contents>
            {isDesktop ? ABOUT_INFO.SOPKATHON.pc_contents : ABOUT_INFO.SOPKATHON.mobile_contents}
          </S.Contents>
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
