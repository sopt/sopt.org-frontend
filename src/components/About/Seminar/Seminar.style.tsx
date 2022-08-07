import styled from '@emotion/styled';

export const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100vh;
  scroll-snap-align: center;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 160px;
  width: 1040px;
`;

export const ContentWrap = styled.div`
  width: 1040px;
`;

export const InfoText = styled.article``;
export const InfoImg = styled.div``;
export const TopBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Description = styled.div`
  line-height: 20px;

  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.soptWhite};
  font-family: 'SUIT';
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
`;
export const Contents = styled.div`
  line-height: 180%;
  letter-spacing: -0.03em;
  white-space: pre-line;

  color: ${({ theme }) => theme.colors.soptWhite};
  font-family: 'SUIT';
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
`;
