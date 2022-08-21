import styled from '@emotion/styled';

export const AppjamBox = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  mix-blend-mode: normal;
  background: ${({ theme }) => theme.colors.black40};
  width: 440px;
  height: 215px;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    width: 305px;
    height: 148px;
  }
`;
export const AppjamInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 380px;
  height: 27px;

  & h2 {
    color: ${({ theme }) => theme.colors.soptWhite};
    font-family: 'SUIT', arial, sans-serif;

    &:nth-child(1) {
      width: 146px;
      line-height: 20px;
      font-size: 16px;
      font-weight: 800;
      /* margin-right: 116px; */

      /* 모바일 뷰 */
      @media (max-width: 1279px) {
        width: 79px;
      }
    }
  }

  & div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & h2 {
      color: ${({ theme }) => theme.colors.soptWhite};
      font-family: 'SUIT', arial, sans-serif;

      &:nth-child(1) {
        line-height: 20px;
        letter-spacing: -0.04em;
        font-size: 16px;
        font-weight: 500;

        /* 모바일 뷰 */
        @media (max-width: 1279px) {
          font-size: 12px;
        }
      }

      &:nth-child(2) {
        line-height: 27px;
        font-size: 22px;
        font-weight: 900;

        /* 모바일 뷰 */
        @media (max-width: 1279px) {
          font-size: 14px;
        }
      }

      &:nth-child(3) {
        line-height: 19.97px;
        letter-spacing: 0.05em;
        font-size: 16px;
        font-weight: 400;

        /* 모바일 뷰 */
        @media (max-width: 1279px) {
          font-size: 12px;
        }
      }
    }
  }

  .top__info {
    width: 146px;

    /* 모바일 뷰 */
    @media (max-width: 1279px) {
      width: 102px;
    }
  }

  .bottom__info {
    margin-left: 61px;
    width: 85px;

    /* 모바일 뷰 */
    @media (max-width: 1279px) {
      width: 59px;
    }
  }

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    width: 275px;
    height: 17px;
  }
`;

export const DownloadBtnWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;

  & img {
    cursor: pointer;
  }
`;
