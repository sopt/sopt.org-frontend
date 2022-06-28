import styled from '@emotion/styled';

export const Root = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const EventWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(500px, auto));
  margin-bottom: 100px;
`;
