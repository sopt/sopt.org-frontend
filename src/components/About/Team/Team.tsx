import StudyNetworkingImg from '@src/assets/images/study_networking.svg';
import Footer from '@src/components/common/Footer';
import UnderlinedTitle from '@src/components/common/UnderlinedTitle';
import { ABOUT_INFO } from '@src/constants/about';
import Image from 'next/image';

import AboutWrapper from '../AboutWrapper';
import * as S from './Team.style';
import TeamImage from './TeamImage';

function Team() {
  return (
    <AboutWrapper height={'calc(100vh-163px)'}>
      <AboutWrapper.Top
        leftTitleProps={
          <>
            <S.Description>{ABOUT_INFO.TEAM.description}</S.Description>
            <UnderlinedTitle fontSize="40px">{ABOUT_INFO.TEAM.title}</UnderlinedTitle>
          </>
        }
        leftDescriptionProps={<S.Contents>{ABOUT_INFO.TEAM.contents}</S.Contents>}
        rightProps={<TeamImage />}
      />
    </AboutWrapper>
  );
}

export default Team;
