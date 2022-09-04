import styled from '@emotion/styled';

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
`;

export const PageList = styled.ol`
  display: flex;
  gap: 25px;
`;

export const Page = styled.li<{ isCurrent: boolean }>`
  font-family: 'SUIT';
  font-style: normal;
  ${(props) =>
    props.isCurrent
      ? `
  color: ${props.theme.colors.mainColor};
  font-weight: 800;
  font-size: 32px;
  line-height: 40px;
  position: relative;
  bottom: 8px;
  @media (max-width: 784px) {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    position: static;
  }
  `
      : `
  color: ${props.theme.colors.soptWhite};
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  @media (max-width: 784px) {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    position: static;
  }
  `};

  &:hover {
    cursor: pointer;
  }
`;
export const Button = styled.button`
  all: unset;
  &:disabled {
    cursor: default;
    & > svg > path {
      stroke: lightgray;
    }
  }
`;
export const LeftBtn = styled(Button)``;
export const RightBtn = styled(Button)``;
