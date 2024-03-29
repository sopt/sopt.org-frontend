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

export const ImageWrapper = styled.div`
  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    margin-left: 38px;
  }
`;
