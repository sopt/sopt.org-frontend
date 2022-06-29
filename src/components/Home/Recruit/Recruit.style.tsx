import styled from '@emotion/styled';
export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 240px;
  width: 100vw;
  height: 50vh;

  scroll-snap-align: center;
`;

export const ContentWrap = styled.div`
  display: flex;
  align-items: start;
  margin-top: 41px;
`;

export const StepWrap = styled.div`
  display: flex;

  padding-top: 67px;
`;

export const PlainCircleText = styled.p`
  margin-right: 30px;

  border: 4px solid ${({ theme }) => theme.colors.soptWhite};
  border-radius: 150px;
  padding: 72px 48px;
`;

export const GradientCircleText = styled.p`
  border: 4px solid ${({ theme }) => theme.colors.mainColor};
  border-radius: 150px;
  padding: 72px 48px;
`;

export const ArrowIcon = styled.img`
  transform: rotate(-90deg);
  margin-right: 30px;
`;

export const TextWrap = styled.div`
  margin-left: 132px;
`;

export const Description = styled.p`
  margin-bottom: 70px;
  line-height: 50px;
  font-family: 'SUIT';
  font-size: 24px;
  font-weight: 800;
  font-style: normal;
`;
