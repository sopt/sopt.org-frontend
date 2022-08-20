import styled from '@emotion/styled';

export const Root = styled.div``;

export const Year = styled.p`
  line-height: 30px;
  font-family: 'SUIT', Arial;
  font-size: 24px;
  font-weight: 900;
`;

export const ImageWrap = styled.div`
  position: relative;

  margin-top: 10px;
  border-radius: 12px;
  width: 260px;
  height: 260px;

  & img {
    object-fit: cover;
  }
`;

export const Title = styled.h1`
  margin-top: 10px;
  line-height: 25px;
  font-family: 'SUIT', Arial;
  font-size: 20px;
  font-weight: 800;
`;

export const Description = styled.p`
  margin-top: 10px;
  line-height: 160%;
  font-family: 'SUIT', Arial;
  font-size: 14px;
  font-weight: 500;
`;

export const Etc = styled.p`
  margin-top: 10px;
  line-height: 160%;

  color: #a9a9a9;
  font-family: 'SUIT', Arial;
  font-size: 10px;
  font-weight: 500;
`;
