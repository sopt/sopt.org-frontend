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

export const SoptTitle = styled.h1``;

export const SoptSubtitle = styled.h2`
  margin-top: 30px;
`;

export const SoptDescription = styled.h3`
  margin-top: 107px;
`;

export const ScrollWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ScrollText = styled.p``;

export const ScrollArrow = styled.image``;
