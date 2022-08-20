import StudyNetworkingImg from '@src/assets/images/study_networking.svg';
import { NetworkingImage } from '@src/assets/replaceMe/imageList';
import UnderlinedTitle from '@src/components/common/UnderlinedTitle';
import { ABOUT_INFO } from '@src/constants/about';
import Image from 'next/image';

import AboutWrapper from '../AboutWrapper';
import * as S from './StudyNetworking.style';

function StudyNetworking() {
  return (
    <AboutWrapper>
      <AboutWrapper.Top
        leftTitleProps={
          <>
            <S.Description>{ABOUT_INFO.STUDY_NETWORKUNG.description}</S.Description>
            <UnderlinedTitle fontSize="40px">{ABOUT_INFO.STUDY_NETWORKUNG.title}</UnderlinedTitle>
          </>
        }
        leftDescriptionProps={
          <S.Contents>
            {ABOUT_INFO.STUDY_NETWORKUNG.contents}
            <br />
            <br />
            <strong>#누구나_참여하고_친해지는</strong>
          </S.Contents>
        }
        rightProps={
          <Image
            src={StudyNetworkingImg.src}
            width={475}
            height={250}
            alt="스터디 네트워킹"
            blurDataURL={StudyNetworkingImg.src}
            placeholder="blur"
          />
        }
      />
      <AboutWrapper.Content>
        <S.ImageListWrapper>
          {NetworkingImage?.map((item) => {
            return (
              <Image
                src={item.image}
                width={215}
                height={130}
                alt={`네트워킹 ${item.id}`}
                key={item.id}
                blurDataURL={item.image}
                placeholder="blur"
              />
            );
          })}
        </S.ImageListWrapper>
      </AboutWrapper.Content>
    </AboutWrapper>
  );
}

export default StudyNetworking;
