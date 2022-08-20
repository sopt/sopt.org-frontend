import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1280px) {
    height: calc(100vh - 155px); /* 155px은 IconBanner */
  }

  @media (max-width: 1279px) {
    margin-top: 80px;
    width: 375px;
  }
`;

export const Description = styled.p`
  margin-top: 35px;
  margin-bottom: 32px;

  text-align: center;
  line-height: 220%;
  font-family: 'SUIT', arial;
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 1279px) {
    margin-bottom: 80px;
    padding: 0 35px;
    font-size: 13px;
  }
`;
