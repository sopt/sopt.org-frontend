import styled from '@emotion/styled';

export const Root = styled.h1`
  border-bottom: 10px solid ${({ theme }) => theme.colors.mainColor};
  padding-bottom: 10px;

  width: max-content;
  line-height: 44px;

  font-family: 'SUIT', arial;
  font-size: 35px;
  font-weight: 800;

  @media (max-width: 1279px) {
    border-bottom: 6px solid ${({ theme }) => theme.colors.mainColor};
    padding-bottom: 5px;
    font-size: 25px;
  }
`;
