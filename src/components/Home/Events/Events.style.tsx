import styled from '@emotion/styled';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  scroll-snap-align: center;
  height: 100vh;
`;

export const EventWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(400px, auto));
  column-gap: 120px;
  margin-bottom: 100px;
`;
