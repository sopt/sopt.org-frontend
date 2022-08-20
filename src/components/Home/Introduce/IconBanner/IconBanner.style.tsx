import styled from '@emotion/styled';

interface dummyDataProps {
  size: string;
}
export const dummyData = styled.div<dummyDataProps>`
  background: transparent;
  width: ${({ size }) => (size === '55px' ? '18px' : '10px')};
  height: ${({ size }) => (size === '55px' ? '18px' : '10px')};
`;
