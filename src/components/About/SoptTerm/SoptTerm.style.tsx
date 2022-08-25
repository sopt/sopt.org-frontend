import styled from '@emotion/styled';

export const Description = styled.div`
  line-height: 20px;

  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.soptWhite};
  font-family: 'SUIT', arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    font-size: 12px;
  }
`;
export const Contents = styled.div`
  margin-top: 18px;
  line-height: 180%;
  letter-spacing: -0.03em;
  white-space: pre-line;
  color: ${({ theme }) => theme.colors.soptWhite};
  font-family: 'SUIT', arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    font-size: 14px;
  }
`;
export const Filter = styled.div`
  position: absolute;
  z-index: 1;
  background: linear-gradient(180deg, rgba(24, 24, 24, 0) 0%, #181818 100%);
  width: 1020px;
  height: 165px;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    bottom: 0px;
    width: 375px;
    height: 116px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin-top: 55px;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    left: -35px;
    margin: 40px 0px 0 0;

    margin-top: 41px;
    width: 375px;
    overflow: hidden;

    & span {
      min-width: 485px;

      & img {
        object-fit: cover;
      }
    }
  }
`;
