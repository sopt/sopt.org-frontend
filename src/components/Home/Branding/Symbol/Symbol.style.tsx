import styled from '@emotion/styled';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RoundName = styled.p`
  margin-top: 25px;

  border: 3px solid ${({ theme }) => theme.colors.soptWhite};
  border-radius: 16px;
  background-color: transparent;
  padding: 6px 31px;
  text-align: center;
  line-height: 20px;
  letter-spacing: -0.04em;

  color: ${({ theme }) => theme.colors.soptWhite};

  font-family: 'SUIT', arial, sans-serif;
  font-size: 16px;
  font-weight: 700;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    margin-top: 15px;

    border: 1.5px solid ${({ theme }) => theme.colors.soptWhite};
    border-radius: 14.5px;
    padding: 6px 20px;

    font-size: 14px;
  }
`;
