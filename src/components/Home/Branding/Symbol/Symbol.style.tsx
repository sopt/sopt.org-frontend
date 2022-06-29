import styled from '@emotion/styled';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RoundName = styled.p`
  margin-top: 40px;

  border: 3px solid ${({ theme }) => theme.colors.soptWhite};
  border-radius: 25px;
  background-color: transparent;

  padding: 10px 51.5px;
  text-align: center;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.soptWhite};

  font-family: 'SUIT';
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
`;
