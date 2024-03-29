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

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    width: 121px;
    height: 52px;
  }
`;

export const Name = styled.p`
  margin-top: 18px;
  line-height: 20px;
  letter-spacing: -0.03em;

  color: ${({ theme }) => theme.colors.soptWhite};

  font-family: 'SUIT', arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
`;
