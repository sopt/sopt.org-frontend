import styled from '@emotion/styled';
import theme from '@src/styles/theme';

export const Root = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  width: 100%;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    gap: 10px;
    width: 305px;
    overflow: auto;
  }
`;

export const DotImg = styled.div`
  display: flex;
  height: 100%;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    width: 30px;
  }
`;

export const PartWrapper = styled.div``;
