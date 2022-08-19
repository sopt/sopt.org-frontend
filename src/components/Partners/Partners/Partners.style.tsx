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
  line-height: 180%;
  letter-spacing: -0.03em;

  color: ${({ theme }) => theme.colors.soptWhite};

  font-family: 'SUIT', Arial;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
`;

export const PartnerWrap = styled.div`
  display: grid;

  /* 데스크탑 뷰 */
  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, minmax(190px, auto));
    column-gap: 27px;

    margin-top: 50px;

    width: 841px;
    row-gap: 40px;
  }
`;
