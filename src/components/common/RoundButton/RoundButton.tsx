import React, { HTMLAttributes } from 'react';

import * as S from './RoundButton.style';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: string;
  [key: string]: any;
}

function RoundButton({ children, ...props }: ButtonProps) {
  return <S.Root {...props}>{children}</S.Root>;
}

export default RoundButton;
