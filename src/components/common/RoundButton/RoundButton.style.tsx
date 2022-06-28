import styled from '@emotion/styled';

export const Root = styled.button`
  border-radius: 38.5px;
  background: ${({ theme }) => theme.colors.soptWhite};
  padding: 20px 64px;
  height: 77px;
  line-height: 37px;
  color: ${({ theme }) => theme.colors.mainColor};

  font-family: 'SUIT';
  font-size: 30px;
  font-weight: 700;
  font-style: normal;
`;
