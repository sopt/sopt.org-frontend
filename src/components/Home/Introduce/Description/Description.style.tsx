import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 155px); /* 155px은 IconBanner */
`;

export const Description = styled.p`
  margin-top: 35px;
  margin-bottom: 32px;

  text-align: center;
  line-height: 220%;
  font-family: 'SUIT', arial;
  font-size: 16px;
  font-weight: 400;
`;
