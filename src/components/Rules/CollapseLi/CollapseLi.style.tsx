import styled from '@emotion/styled';
import { ArrowDownAnimation, ArrowUpAnimation } from '@src/lib/styles/animation';
import theme from '@src/styles/theme';

interface ButtonStyleProps {
  isOpened: boolean;
}

export const Root = styled.li`
  width: 100%;
`;
export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.colors.soptWhite};
  padding-top: 40px;
  padding-bottom: 40px;
  width: 100%;
`;

export const TItle = styled.h3`
  text-align: center;
  line-height: 30px;
  color: ${theme.colors.soptWhite};
  font-family: 'SUIT';
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
`;

export const Button = styled.button<ButtonStyleProps>`
  margin-right: 40px;
  outline: inherit;
  border: none;
  background: none;
  background: no-repeat url('/down_arrow.svg');
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 13px;
  ${ArrowDownAnimation}
  ${ArrowUpAnimation}

  animation: ${({ isOpened }) => (isOpened ? 'ArrowUp 0.3s forwards' : 'ArrowDown 0.3s forwards')};
  color: inherit;
  font: inherit;
`;
