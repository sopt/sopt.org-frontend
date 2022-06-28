import React from 'react';

import * as S from './UnderlinedTitle.style';

interface TitleProps {
  children: string;
  [key: string]: any;
}

function UnderlinedTitle({ children, ...props }: TitleProps) {
  return <S.Root {...props}>{children}</S.Root>;
}

export default UnderlinedTitle;
