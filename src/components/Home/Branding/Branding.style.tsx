import styled from '@emotion/styled';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 240px;
  width: 100vw;
  height: 90vh;

  scroll-snap-align: center;
`;

export const ContentWrap = styled.div`
  display: flex;
  align-items: start;
  margin-top: 51px;
`;

export const SymbolsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, auto));
  column-gap: 50px;

  padding-top: 77px;
`;

export const TextWrap = styled.div`
  margin-left: 140px;
`;

export const DescriptionLabel = styled.p`
  margin-bottom: 90px;
  line-height: 50px;
  font-family: 'SUIT', arial;
  font-size: 24px;
  font-weight: 400;
  font-style: normal;
`;
