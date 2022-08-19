import RightArrow from '@src/assets/icons/rightArrow.svg';
import SoptTermImage1 from '@src/assets/images/sopterm1.png';
import SoptTermImage2 from '@src/assets/images/sopterm2.png';
import RoundButton from '@src/components/common/RoundButton';
import Image from 'next/image';
import React from 'react';

import * as S from './SoptTermImage.style';

function SoptTermImage() {
  return (
    <S.Root>
      <S.ImageWrapper>
        <Image src={SoptTermImage1} width={200} height={200} alt="솝커톤" />
        <Image src={SoptTermImage2} width={300} height={200} alt="솝커톤" />
      </S.ImageWrapper>
      <RoundButton isReverse={true}>
        <S.ButtonContents>
          솝텀 프로젝트 보기
          <Image src={RightArrow} width={50} height={5} alt="오른쪽 화살표" />
        </S.ButtonContents>
      </RoundButton>
    </S.Root>
  );
}

export default SoptTermImage;
