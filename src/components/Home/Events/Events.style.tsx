import styled from '@emotion/styled';

export const Root = styled.div`
  scroll-snap-align: center;
  height: 100vh;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: calc(100vh - 40px); /* 40px은 sopt marquee */
`;

export const EventWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(260px, auto));
  column-gap: 120px;
  margin-bottom: 39px;
`;
