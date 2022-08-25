import styled from '@emotion/styled';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  margin: 300px 0 200px 0;
`;

export const Description = styled.p`
  margin-top: 18px;
  text-align: center;
  line-height: 180%;
  letter-spacing: -0.03em;

  color: ${({ theme }) => theme.colors.soptWhite};

  font-family: 'SUIT', arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    width: 180px;
    font-size: 14px;
  }
`;

export const PartnerWrap = styled.div`
  display: grid;
  margin-top: 50px;

  /* 데스크탑 뷰 */
  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, minmax(190px, auto));
    column-gap: 27px;
    row-gap: 40px;

    width: 841px;
  }

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    grid-template-columns: repeat(2, minmax(150px, auto));
    row-gap: 30px;

    width: 302px;
  }
`;
