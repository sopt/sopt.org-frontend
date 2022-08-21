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

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    align-items: start;
  }
`;

export const Title = styled.h2`
  margin-top: 50px;
  margin-bottom: 35px;
  padding-left: 16px;
  width: 870px;
  line-height: 180%;
  letter-spacing: -0.03em;

  color: ${({ theme }) => theme.colors.soptWhite};

  font-family: 'SUIT', Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    margin-top: 30px;
    margin-bottom: 15px;
    padding-left: 0;
    width: 60px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row-reverse;
  column-gap: 40px;

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  div {
    &:last-child {
      margin-right: 0px;
    }
  }

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    column-gap: 15px;
    width: 340px;
    overflow-y: scroll;

    /* Hide scrollbar for Chrome, Safari and Opera */
    .example::-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .example {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
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
  font-family: 'SUIT', arial, sans-serif;
  font-size: 14px;
  font-weight: 600;
  font-style: normal;

  & > span {
    margin-bottom: 4px;
  }
`;
