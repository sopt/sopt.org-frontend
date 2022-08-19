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
  line-height: 20px;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.soptWhite};

  font-family: 'SUIT';
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
`;
