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

export const ImageWrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-584px);
  width: fit-content;
  height: fit-content;
`;

export const AppjamWrapper = styled.div`
  position: relative;
`;
