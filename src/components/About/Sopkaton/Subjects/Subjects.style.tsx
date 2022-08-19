import styled from '@emotion/styled';
import theme from '@src/styles/theme';

interface ItemStyleProps {
  isOdd: boolean;
}
export const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  margin-top: 44px;
  margin-bottom: 15px;
  padding-left: 16px;
  width: 870px;
`;

export const List = styled.ul`
  display: flex;

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 40px;
  }

  div {
    &:last-child {
      margin-right: 0px;
    }
  }
`;
export const Item = styled.li<ItemStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: 90px;
  width: 90px;
  height: 90px;
  line-height: 17px;
  letter-spacing: -0.03em;
  /* margin-right: 40px; */
  color: ${({ isOdd }) => (isOdd ? theme.colors.mainColor : theme.colors.soptWhite)};
  font-family: 'SUIT';
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  & > span {
    margin-bottom: 4px;
  }
`;
