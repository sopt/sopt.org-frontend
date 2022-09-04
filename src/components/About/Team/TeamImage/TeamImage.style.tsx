import styled from '@emotion/styled';

export const Root = styled.section`
  display: flex;
  column-gap: 15px;
  width: 515px;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    justify-content: flex-start;
    width: 340px;

    & div:first-of-type {
      width: 147px;
    }

    & div:nth-child(2) {
      width: 165px;
    }
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & img:nth-child(odd) {
    object-fit: cover;
    border-radius: 12px;
  }

  .timi__button {
    width: 188px;

    span {
      &:first-of-type {
        margin-right: 8px !important;

        /* 모바일 뷰 */
        @media (max-width: 1279px) {
          margin-right: 5px !important;
        }
      }
    }

    @media (max-width: 1279px) {
      width: 122px;
    }

    /* 모바일 뷰 */
    @media (max-width: 1279px) {
      width: 132px;
    }
  }

  .media__button {
    width: 215px;
    span {
      &:first-of-type {
        margin-right: 8px !important;

        /* 모바일 뷰 */
        @media (max-width: 1279px) {
          margin-right: 5px !important;
        }
      }
    }
    @media (max-width: 1279px) {
      width: 144px;
    }
  }
`;

export const Tag = styled.p`
  margin-top: 15px;
  margin-bottom: 15px;
  line-height: 15px;
  letter-spacing: -0.03em;
  font-family: 'SUIT', arial, sans-serif;
  font-size: 18px;
  font-weight: 700;
  font-style: normal;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    font-size: 12px;
  }
`;
