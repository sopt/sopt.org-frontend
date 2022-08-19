import styled from '@emotion/styled';

export const Root = styled.section`
  display: flex;
  width: 515px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  /* margin-bottom: 20px; */
  width: 100%;
  .timi__button {
    width: 185px;
    span {
      &:first-child {
        margin-right: 8px !important;
      }
    }
  }
  .media__button {
    width: 218px;
    span {
      &:first-child {
        margin-right: 8px !important;
      }
    }
  }
`;

export const Tag = styled.p`
  margin-top: 15px;
  margin-bottom: 15px;
`;
