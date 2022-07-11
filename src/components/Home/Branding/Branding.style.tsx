import styled from '@emotion/styled';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100vh;
  scroll-snap-align: center;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 120px;

  padding-top: 15vh;
  width: 1280px;
`;

export const ContentWrap = styled.div`
  display: flex;
  align-items: start;
  margin-top: 51px;
`;

export const SymbolsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(140px, auto));
  column-gap: 25px;

  padding-top: 17px;
`;

export const TextWrap = styled.div`
  margin-left: 140px;
`;

export const DescriptionLabel = styled.p`
  margin-bottom: 40px;
  line-height: 50px;
  line-height: 200%;

  white-space: pre-line;
  font-family: 'SUIT', arial;
  font-size: 16px;
  font-weight: 400;
`;
