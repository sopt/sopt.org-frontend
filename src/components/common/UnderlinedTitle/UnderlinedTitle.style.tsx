import styled from '@emotion/styled';

import { TitleStyleProps } from './UnderlinedTitle';

export const Root = styled.h1<TitleStyleProps>`
  border-bottom: 10px solid ${({ theme }) => theme.colors.mainColor};
  padding-bottom: 10px;

  width: max-content;
  line-height: 44px;

  white-space: pre-line;

  font-family: 'SUIT', arial, sans-serif;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 800;

  @media (max-width: 1279px) {
    border-bottom: 6px solid ${({ theme }) => theme.colors.mainColor};
    padding-bottom: 5px;

    line-height: 31px;
    font-size: 25px;
    font-weight: 900;
  }
`;
