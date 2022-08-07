import UnderlinedTitle from '@src/components/common/UnderlinedTitle';
import { ABOUT_INFO } from '@src/constants/about';
import { AboutInfoType } from '@src/types';
import React, { ReactNode } from 'react';

interface AboutScreenProps {
  type: AboutInfoType;
  children: ReactNode;
}

function AboutScreen({ children }: AboutScreenProps) {
  return <section>{children}</section>;
}

AboutScreen.Title = function AboutScreenTitle({ type }: AboutScreenProps) {
  return <UnderlinedTitle fontSize="40px">{ABOUT_INFO[type].title}</UnderlinedTitle>;
};

AboutScreen.Description = function AboutScreenDescription({ type }: AboutScreenProps) {
  return <UnderlinedTitle fontSize="40px">{ABOUT_INFO[type].title}</UnderlinedTitle>;
};

AboutScreen.Contents = function AboutScreenContents({ type }: AboutScreenProps) {
  return <UnderlinedTitle fontSize="40px">{ABOUT_INFO[type].title}</UnderlinedTitle>;
};

export default AboutScreen;
