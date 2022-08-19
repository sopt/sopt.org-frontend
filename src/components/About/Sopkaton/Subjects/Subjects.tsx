import SopkatonBackground from '@src/assets/icons/SopkatonBackground.svg';
import SopkatonReversedBackground from '@src/assets/icons/SopkatonReversedBackground.png';
import { SopkatonSubjectList } from '@src/assets/replaceMe/basicInfo';
import React from 'react';
import Fade from 'react-reveal/Fade';

import * as S from './Subjects.style';

function Subjects() {
  return (
    <S.Root>
      <S.Title>역대 주제</S.Title>
      <S.List>
        {Object.values(SopkatonSubjectList)?.map((item, idx) => {
          const backgroundImage =
            idx % 2 === 0 ? SopkatonBackground.src : SopkatonReversedBackground.src;

          return (
            <Fade left delay={300 + idx * 100} key={item.title}>
              <S.Item style={{ backgroundImage: `url(${backgroundImage})` }} isOdd={idx % 2 === 0}>
                <span>{item.emoji}</span>
                <div>{item.title}</div>
              </S.Item>
            </Fade>
          );
        })}
      </S.List>
    </S.Root>
  );
}

export default Subjects;
