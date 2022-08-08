import React, { ReactElement, ReactNode } from 'react';
import Fade from 'react-reveal/Fade';

import * as S from './AboutWrapper.style.';

interface AboutWrapperProps {
  children: ReactNode;
}

interface AboutTopProps {
  leftProps: ReactElement<any, any>;
  rightProps: ReactElement<any, any>;
}

function AboutWrapper({ children }: AboutWrapperProps) {
  return (
    <S.Root>
      <S.Wrap>{children}</S.Wrap>
    </S.Root>
  );
}

AboutWrapper.Top = function AboutWrapperTop({ leftProps, rightProps }: AboutTopProps) {
  return (
    <S.TopBox>
      <Fade top>
        <S.InfoText>{leftProps}</S.InfoText>
      </Fade>
      <Fade top>
        <S.InfoImg>{rightProps}</S.InfoImg>
      </Fade>
    </S.TopBox>
  );
};

AboutWrapper.Content = function AboutWrapperContent({ children }: AboutWrapperProps) {
  return <S.ContentWrap>{children}</S.ContentWrap>;
};

export default AboutWrapper;
