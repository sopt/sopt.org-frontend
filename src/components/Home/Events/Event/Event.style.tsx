import styled from '@emotion/styled';

export const Wrap = styled.div`
  & img {
    border-radius: 30px;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const TitleKorean = styled.p`
  line-height: 30px;
  font-family: 'SUIT', arial, sans-serif;
  font-size: 24px;
  font-weight: 700;
`;

export const TitleEnglish = styled.p`
  margin-left: 5px;
  line-height: 20px;

  font-family: 'SUIT', arial, sans-serif;
  font-size: 16px;
  font-weight: 900;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 20px;

  border-left: 6px solid ${({ theme }) => theme.colors.mainColor};
  padding-bottom: 10px;
  padding-left: 30px;

  height: 157px;
`;
