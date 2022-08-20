import styled from '@emotion/styled';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding-top: 200px;
`;

export const Description = styled.p`
  margin-top: 18px;

  text-align: center;
  line-height: 180%;
  letter-spacing: -0.03em;

  color: ${({ theme }) => theme.colors.soptWhite};

  font-family: 'SUIT', Arial;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    width: 206px;
    font-size: 14px;
  }
`;

export const ProjectWrap = styled.div`
  display: grid;

  margin-top: 40px;

  /* 데스크탑 뷰 */
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, minmax(260px, auto));
    column-gap: 80px;
    row-gap: 40px;

    width: 940px;
  }

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    grid-template-columns: repeat(1, minmax(260px, auto));
    row-gap: 45px;
    width: 270px;
  }
`;
