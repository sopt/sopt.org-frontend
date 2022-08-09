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
`;
export const AppjamInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 380px;
  height: 27px;
  & h2 {
    color: ${({ theme }) => theme.colors.soptWhite};
    font-family: 'SUIT';
    &:nth-child(1) {
      width: 146px;
      line-height: 20px;
      font-size: 16px;
      font-weight: 800;
      /* margin-right: 116px; */
    }
  }
  & div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & h2 {
      color: ${({ theme }) => theme.colors.soptWhite};
      font-family: 'SUIT';
      &:nth-child(1) {
        line-height: 20px;
        letter-spacing: -0.04em;
        font-size: 16px;
        font-weight: 500;
      }
      &:nth-child(2) {
        line-height: 27px;
        font-size: 22px;
        font-weight: 900;
      }
      &:nth-child(3) {
        line-height: 19.97px;
        letter-spacing: 0.05em;
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
  .top__info {
    width: 146px;
  }
  .bottom__info {
    width: 85px;
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
