import styled from '@emotion/styled';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  /* 데스크탑 뷰 */
  @media (min-width: 1280px) {
    scroll-snap-align: center;
    height: 100vh;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* 데스크탑 뷰 */
  @media (min-width: 1280px) {
    margin-left: 120px;
    padding-top: 15vh;
    width: 1280px;
  }

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    margin-top: 120px;
    margin-bottom: 70px;
    padding: 0px 24px;
    width: 327px;

    & h1 {
      margin-left: 11px;
    }
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  align-items: start;
  margin-top: 51px;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    flex-direction: column;
    margin-top: 0px;
  }
`;

export const SymbolsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(140px, auto));
  column-gap: 25px;

  margin-top: 17px;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    grid-template-columns: repeat(3, minmax(100px, auto));
    column-gap: 10px;

    margin-top: 40px;
  }
`;

export const TextWrap = styled.div`
  margin-left: 140px;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    margin-top: 50px;
    margin-left: 11px;

    & button {
      margin-left: 22px;
    }
  }
`;

export const DescriptionLabel = styled.p`
  margin-bottom: 40px;
  line-height: 200%;

  white-space: pre-line;
  font-family: 'SUIT', arial, sans-serif;
  font-size: 16px;
  font-weight: 400;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    margin-bottom: 66px;

    font-size: 14px;
  }
`;
