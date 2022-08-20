import DotImg from '@src/assets/images/DotImg.svg';
import { PART_INFO } from '@src/constants/about';
import { PartKorean } from '@src/types';
import Image from 'next/image';
import React from 'react';
import Fade from 'react-reveal/Fade';

import PartInfo from '../PartInfo/PartInfo';
import * as S from './PartInfos.style';

function PartInfos() {
  return (
    <S.Root>
      {PART_INFO?.map((item, idx) => (
        <>
          <Fade left delay={item.delay}>
            <PartInfo title={item.title} contents={item.contents} />
          </Fade>
          <Fade left delay={item.delay + 150}>
            <S.DotImg>
              {idx < PART_INFO.length - 1 && (
                <Image
                  src={DotImg}
                  width={50}
                  height={10}
                  alt="split dot"
                  blurDataURL={DotImg}
                  placeholder="blur"
                />
              )}
            </S.DotImg>
          </Fade>
        </>
      ))}
    </S.Root>
  );
}

export default PartInfos;
