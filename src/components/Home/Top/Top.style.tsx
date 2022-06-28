import styled from '@emotion/styled';
import bgImg from '@src/assets/images/bg-img.svg';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-image: url(${bgImg.src});
  background-repeat: no-repeat;
  background-size: cover;

  width: 100vw;
  height: 100vh;
`;

export const TextWrap = styled.div`
  margin-top: 320px;
  margin-left: 200px;
`;

export const SoptTitle = styled.h1`
  line-height: 110%;
  font-family: 'SUIT';
  font-size: 100px;
  font-weight: 900;
  font-style: normal;
`;

export const SoptSubtitle = styled.h2`
  margin-top: 30px;
  line-height: 62px;
  letter-spacing: -0.03em;

  font-family: 'SUIT';
  font-size: 50px;
  font-weight: 700;
  font-style: normal;
`;

export const SoptDescription = styled.h3`
  margin-top: 107px;
  line-height: 160%;

  font-family: 'SUIT';
  font-size: 30px;
  font-weight: 500;
  font-style: normal;
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
  font-family: 'SUIT';
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
`;
