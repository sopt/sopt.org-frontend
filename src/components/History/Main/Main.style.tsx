import styled from '@emotion/styled';

export const Root = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  padding-top: 200px;
  width: 100%;
  min-height: 100vh;

  /* 모바일 뷰 */
  @media (max-width: 784px) {
    margin-bottom: 92px;
    padding-top: 152px;
  }
`;

export const Description = styled.div`
  text-align: center;
  line-height: 20px;
  line-height: 180%;

  letter-spacing: -0.03em;
  letter-spacing: -0.04em;
  white-space: pre-line;
  color: ${({ theme }) => theme.colors.soptWhite};
  font-family: 'SUIT';
  font-size: 16px;
  font-weight: 400;
  font-style: normal;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    font-size: 12px;
  }
`;
