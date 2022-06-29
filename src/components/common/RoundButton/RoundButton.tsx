import React, { HTMLAttributes } from 'react';

import * as S from './RoundButton.style';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: string;
  isReverse?: boolean;
  [key: string]: any;
}

function RoundButton({ children, isReverse = false, ...props }: ButtonProps) {
  return (
    <S.Root isReverse={isReverse} {...props}>
      {children}
    </S.Root>
  );
}

export default RoundButton;
