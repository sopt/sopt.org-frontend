import React, { ReactElement, ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';
import Fade from 'react-reveal/Fade';

import * as S from './AboutWrapper.style.';

interface AboutWrapperProps {
  children: ReactNode;

  [key: string]: any;
}

interface AboutTopProps {
  leftTitleProps: ReactElement<any, any>;
  leftDescriptionProps: ReactElement<any, any>;
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

AboutWrapper.Top = function AboutWrapperTop({
  leftTitleProps,
  leftDescriptionProps,
  rightProps,
  ...props
}: AboutTopProps) {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  return (
    <S.TopBox {...props}>
      {isDesktop ? (
        // 데스크탑뷰
        <>
          <Fade top>
            <S.InfoText>
              <S.TextTitle>{leftTitleProps}</S.TextTitle>
              <S.TextDesc>{leftDescriptionProps}</S.TextDesc>
            </S.InfoText>
          </Fade>
          <Fade top>
            <S.InfoImg>{rightProps}</S.InfoImg>
          </Fade>
        </>
      ) : (
        // 모바일 뷰
        <>
          <Fade top>
            <S.TextTitle>{leftTitleProps}</S.TextTitle>
          </Fade>
          <Fade top delay={100}>
            <S.InfoImg>{rightProps}</S.InfoImg>
          </Fade>
          <Fade top delay={200}>
            <S.TextDesc>{leftDescriptionProps}</S.TextDesc>
          </Fade>
        </>
      )}
    </S.TopBox>
  );
};

AboutWrapper.Content = function AboutWrapperContent({ children }: AboutWrapperProps) {
  return <S.ContentWrap>{children}</S.ContentWrap>;
};

export default AboutWrapper;
