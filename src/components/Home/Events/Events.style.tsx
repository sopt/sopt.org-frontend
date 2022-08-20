import styled from '@emotion/styled';

export const Root = styled.div`
  @media (min-width: 1280px) {
    scroll-snap-align: center;
    height: 100vh;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* 데스크탑 뷰 */
  @media (min-width: 1280px) {
    height: calc(100vh - 40px); /* 40px은 sopt marquee */
  }

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    margin-bottom: 70px;
  }
`;

export const EventWrap = styled.div`
  display: grid;

  /* 데스크탑 뷰 */
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, minmax(260px, auto));
    column-gap: 120px;
    margin-bottom: 39px;
  }

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    grid-template-rows: repeat(3, minmax(417px, auto));
    margin-top: 200px;
    margin-bottom: 39px;
    row-gap: 50px;
  }
`;
