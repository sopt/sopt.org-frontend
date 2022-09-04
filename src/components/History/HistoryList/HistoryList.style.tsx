import styled from '@emotion/styled';

export const UL = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(392px, 1fr));
  /* column-gap: 56px; */
  margin-top: 80px;
  margin-bottom: 60px;
  width: 100%;
  max-width: 1280px;
  /* width: 1280px; */
  row-gap: 24px;
  place-items: center;
  @media (max-width: 784px) {
    margin-top: 67px;
    margin-bottom: 32px;
  }
`;
