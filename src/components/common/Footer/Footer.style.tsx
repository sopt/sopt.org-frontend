import styled from '@emotion/styled';

interface StyleProps {
  src: string;
}

export const Root = styled.div`
  background-color: #333333;
  width: 100vw;
  height: 163px;

  scroll-snap-align: center;
`;

export const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 240px;
  padding-top: 35px;
`;

export const InfoWrap = styled.div``;

export const TitleButton = styled.button`
  text-decoration-line: underline;
  line-height: 50px;
  line-height: 20px;

  color: ${({ theme }) => theme.colors.soptWhite};
  font-family: 'SUIT', arial;
  font-size: 16px;
  font-weight: 800;
`;

export const CopyrightText = styled.p`
  margin-top: 25px;
  line-height: 180%;
  font-family: 'SUIT', arial;
  font-size: 14px;
  font-weight: 400;
`;

export const ChannelsWrap = styled.div``;

export const ChannelTitleText = styled.p`
  line-height: 20px;
  font-family: 'SUIT', arial;
  font-size: 16px;
  font-weight: 800;
`;

export const ChannelButtonsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(30px, auto));
  column-gap: 10px;

  margin-top: 25px;
  height: 30px;
`;

export const ChannelButton = styled.button<StyleProps>`
  background-image: url(${(props: StyleProps) => props.src});
  background-size: cover;
`;
