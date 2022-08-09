import styled from '@emotion/styled';

export const Root = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 105px;
`;

export const StepWrap = styled.div`
  display: flex;
  align-items: center;
  /* padding-top: 24px; */
`;

export const CommonCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 17px;
  border-radius: 50%;
  /* padding: 55px 41px; */
  width: 130px;
  height: 130px;
  & p {
    text-align: center;
    line-height: 20px;
    letter-spacing: -0.04em;
    white-space: pre-line;

    font-family: 'SUIT', arial;
    font-size: 16px;
    font-weight: 500;
  }
`;

export const PlainCircleText = styled(CommonCircle)`
  border: 1.5px solid ${({ theme }) => theme.colors.soptWhite};
  & p {
    color: ${({ theme }) => theme.colors.soptWhite};
  }
`;

export const GradientCircleText = styled(CommonCircle)`
  border: 1.5px solid ${({ theme }) => theme.colors.mainColor};
  & p {
    color: ${({ theme }) => theme.colors.mainColor};
  }
`;

export const ArrowIcon = styled.img`
  transform: rotate(-90deg);
  margin-right: 25px;
  width: 12px;
`;

export const GrientArrowIcon = styled.img`
  transform: rotate(0deg);
  margin-right: 25px;
  color: ${({ theme }) => theme.colors.mainColor};
`;
