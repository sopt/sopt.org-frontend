import styled from '@emotion/styled';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageWrap = styled.div`

  position: relative;
  width: 160px;
  height: 70px;

  & img {
    object-fit: cover;
  }
`;

export const Name = styled.p`
  margin-top: 18px;
  line-height: 20px;
  letter-spacing: -0.03em;

  color: ${({ theme }) => theme.colors.soptWhite};

  font-family: 'SUIT', Arial;
  font-size: 16px;
  font-weight: 500;
`;
