import styled from '@emotion/styled';

interface RootStyleProps {
  height?: string;
}

export const Root = styled.section<RootStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: calc(100vh - 163px);
  height: ${({ height }) => !height && '100vh'};
  scroll-snap-align: ${({ height }) => (height ? 'start' : 'center')};
`;

export const Wrap = styled.div<RootStyleProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20%;
  /* margin-top: ${({ height }) => (height ? '100px' : '200px')}; */
  width: 1040px;
`;

export const ContentWrap = styled.div`
  width: 1040px;
`;

export const TopBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const InfoText = styled.article`
  text-align: left;
  line-height: 29px;
  letter-spacing: -0.03em;
  font-family: SUIT;
  font-size: 16px;
  font-weight: 400;
`;
export const InfoImg = styled.div``;
