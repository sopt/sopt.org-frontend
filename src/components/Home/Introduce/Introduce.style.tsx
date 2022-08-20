import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 120px;

  @media (min-width: 1280px) {
    padding-top: 100px;
    height: calc(100% - 100px);
    scroll-snap-align: center;
  }
`;
