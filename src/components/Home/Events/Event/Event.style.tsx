import styled from '@emotion/styled';

export const Wrap = styled.div``;

export const TitleWrap = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export const TitleKorean = styled.p`
  letter-spacing: -0.03em;
  font-family: 'SUIT', arial;
  font-size: 48px;
  font-weight: 700;
  font-style: normal;
`;

export const TitleEnglish = styled.p`
  margin-left: 15px;
  line-height: 30px;
  font-family: 'SUIT', arial;
  font-size: 24px;
  font-weight: 900;
  font-style: normal;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 70px;
  border-left: 10px solid ${({ theme }) => theme.colors.mainColor};
  padding-left: 40px;
  height: 226px;
`;
