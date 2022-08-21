import styled from '@emotion/styled';

interface StyleProps {
  isReverse?: boolean;
}

export const Root = styled.button<StyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.soptWhite};
  border-radius: 100px;
  background: none;
  cursor: pointer;

  padding: 10px 20px;
  line-height: 25px;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.soptWhite};

  font-family: 'SUIT', arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    border: 1.5px solid ${({ theme }) => theme.colors.soptWhite};
    padding: 8px 0px;

    font-size: 12px;
  }
`;
