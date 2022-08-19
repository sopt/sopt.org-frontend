import React, { ReactElement, ReactNode } from 'react';
import Fade from 'react-reveal/Fade';

import * as S from './AboutWrapper.style.';

interface AboutWrapperProps {
  children: ReactNode;
  [key: string]: any;
}

interface AboutTopProps {
  leftProps: ReactElement<any, any>;
  rightProps: ReactElement<any, any>;
  [key: string]: any;
}

function AboutWrapper({ children, ...props }: AboutWrapperProps) {
  return (
    <S.Root {...props}>
      <S.Wrap {...props}>{children}</S.Wrap>
    </S.Root>
  );
}

AboutWrapper.Top = function AboutWrapperTop({ leftProps, rightProps, ...props }: AboutTopProps) {
  return (
    <S.TopBox {...props}>
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
