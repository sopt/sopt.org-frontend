import styled from '@emotion/styled';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  /* 데스크탑 뷰 */
  @media (min-width: 1280px) {
    height: calc(100vh - 163px); /* 163px은 푸터 */
    scroll-snap-align: bottom;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* 데스크탑 뷰 */
  @media (min-width: 1280px) {
    margin-left: 120px;
    padding-top: 15vh;
    width: 1280px;
  }

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    margin-top: 120px;
    margin-bottom: 70px;
    padding: 0px 24px;
    width: 327px;

    & h1 {
      margin-left: 11px;
    }
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  align-items: start;
  margin-top: 41px;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    flex-direction: column;
    margin-top: 0px;
  }
`;

export const StepWrap = styled.div`
  display: flex;
  align-items: center;
  padding-top: 24px;
`;

export const PlainCircleText = styled.p`
  margin-right: 17px;

  border: 1.5px solid ${({ theme }) => theme.colors.soptWhite};
  border-radius: 65px;
  padding: 55px 41px;
  text-align: center;
  line-height: 20px;
  letter-spacing: -0.04em;

  font-family: 'SUIT', arial;
  font-size: 16px;
  font-weight: 500;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    margin-right: 6px;
    border-radius: 45px;
    padding: 35px 20px;
  }
`;

export const GradientCircleText = styled.p`
  border: 1.5px solid ${({ theme }) => theme.colors.mainColor};
  border-radius: 65px;
  padding: 55px 36px;

  text-align: center;
  line-height: 20px;
  letter-spacing: -0.04em;

  color: ${({ theme }) => theme.colors.mainColor};
  font-family: 'SUIT', arial;
  font-size: 16px;
  font-weight: 500;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    margin-right: 6px;
    border-radius: 45px;
    padding: 35px 16px;
  }
`;

export const ArrowIcon = styled.img`
  transform: rotate(-90deg);
  margin-right: 17px;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    margin-right: 6px;
    width: 9px;
  }
`;

export const TextWrap = styled.div`
  margin-left: 132px;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    margin: 61px 11px 0px 11px;

    & button {
      margin-left: 55px;
    }
  }
`;

export const Description = styled.p`
  margin-bottom: 40px;
  line-height: 200%;
  letter-spacing: -0.03em;

  font-family: 'SUIT', arial;
  font-size: 16px;
  font-weight: 400;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    margin-bottom: 66px;

    font-size: 14px;
  }
`;
