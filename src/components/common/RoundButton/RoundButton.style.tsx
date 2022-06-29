import styled from '@emotion/styled';

interface StyleProps {
  isReverse?: boolean;
}

export const Root = styled.button<StyleProps>`
  border-radius: 38.5px;
  background: ${(props: StyleProps) =>
    props.isReverse
      ? ({ theme }) => theme.colors.mainColor
      : ({ theme }) => theme.colors.soptWhite};
  padding: 20px 64px;
  line-height: 37px;
  color: ${(props: StyleProps) =>
    props.isReverse
      ? ({ theme }) => theme.colors.soptWhite
      : ({ theme }) => theme.colors.mainColor};

  font-family: 'SUIT';
  font-size: 30px;
  font-weight: 700;
  font-style: normal;
`;
