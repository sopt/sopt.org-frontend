import styled from '@emotion/styled';

export const Root = styled.h1`
  border-bottom: 10px solid ${({ theme }) => theme.colors.mainColor};
  padding-bottom: 10px;

  width: max-content;
  line-height: 62px;
  font-family: 'SUIT', arial;
  font-size: 50px;
  font-weight: 800;
  font-style: normal;
`;
