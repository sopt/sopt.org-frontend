import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20%;
`;

export const title = styled.h1`
  color: ${({ theme }) => theme.colors.mainColor};
`;
