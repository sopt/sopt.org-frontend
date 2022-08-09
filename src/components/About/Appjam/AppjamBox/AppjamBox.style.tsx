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
  & h2 {
    color: ${({ theme }) => theme.colors.soptWhite};
    font-family: 'SUIT';
  }
`;

export const DownloadBtnWrapper = styled.div`
  display: flex;
`;
