import styled from '@emotion/styled';

export const Root = styled.section`
  /* 데스크탑 뷰 */
  @media (min-width: 1280px) {
    width: 515px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    width: 340px;
  }
`;

export const ButtonContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
