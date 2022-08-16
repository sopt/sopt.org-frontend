import styled from '@emotion/styled';
import bgImg from '@src/assets/images/bg-img.svg';

export const Root = styled.div`
  display: flex;
  justify-content: center;
  background: linear-gradient(
      180deg,
      rgba(17, 17, 17, 0.72) 24.06%,
      rgba(17, 17, 17, 0.5) 83.35%,
      #181818 99.41%
    ),
    url(${bgImg.src});
  background-repeat: no-repeat;
  background-size: cover;

  width: 100vw;

  @media (min-width: 1280px) {
    height: 100vh;
    scroll-snap-align: center;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1280px;

  @media (max-width: 1279px) {
    width: 375px;
  }
`;

export const TextWrap = styled.div`
  margin-top: 120px;
  margin-left: 60px;

  @media (max-width: 1279px) {
    margin-top: 203px;
    margin-left: 11px;
  }
`;

export const SoptTitle = styled.h1`
  line-height: 110%;
  font-family: 'SUIT', arial;
  font-size: 60px;
  font-weight: 900;

  @media (max-width: 1279px) {
    width: 177px;
    font-size: 40px;
  }
`;

export const SoptSubtitle = styled.h2`
  margin-top: 30px;
  line-height: 62px;
  line-height: 37px;
  letter-spacing: -0.03em;
  letter-spacing: -0.03em;

  font-family: 'SUIT', arial;
  font-size: 30px;
  font-weight: 700;

  @media (max-width: 1279px) {
    width: 180px;
    font-size: 24px;
  }
`;

export const SoptDescription = styled.h3`
  margin-top: 107px;
  line-height: 160%;
  line-height: 32px;

  font-family: 'SUIT', arial;
  font-size: 20px;
  font-weight: 300;

  @media (max-width: 1279px) {
    margin-top: 148px;
    margin-bottom: 46px;
    width: 232px;
    font-size: 16px;
  }
`;

export const ScrollWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 40px;

  width: 100%;
`;

export const ScrollText = styled.p`
  margin-bottom: 20px;
  text-align: center;
  font-family: 'SUIT', arial;
  font-size: 20px;
  font-weight: 500;

  @media (max-width: 1279px) {
    font-size: 14px;
  }
`;
