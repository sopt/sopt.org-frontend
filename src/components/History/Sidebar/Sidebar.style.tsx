import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface LiStyleProps {
  isCurrent?: boolean;
  id?: string;
  currentColor?: string;
}

export const Root = styled.section`
  border-radius: 12px;
  background: #232323;
  padding: 0px 24px;
  width: 162px;
  height: fit-content;
`;

export const UL = styled.ul`
  margin-top: 32px;
  margin-bottom: 32px;
`;

export const LI = styled.li<LiStyleProps>`
  margin-bottom: 18px;
  margin-left: 8px;
  cursor: pointer;
  padding: 0px 0px 8px 0px;
  width: fit-content;
  line-height: 22px;
  letter-spacing: -0.04em;
  font-family: 'SUIT';
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  & li {
    &:first-of-type {
      margin-top: 8px;
    }
    &:last-child {
      margin-bottom: 8px;
    }
  }
  ${(props) =>
    props.id === '0' &&
    css`
      margin: 0 0 0 0;
      padding-top: 8px;
    `}

  ${(props) =>
    props.isCurrent
      ? css`
          box-shadow: inset 0 -3px 0 ${props.currentColor};
          color: ${props.theme.colors.soptWhite};
        `
      : css`
          color: #707070;
        `}
`;

export const Line = styled.div`
  background: #363636;
  width: 100%;
  height: 4px;
`;
