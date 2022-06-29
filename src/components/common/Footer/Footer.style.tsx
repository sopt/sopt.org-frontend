import styled from '@emotion/styled';

interface StyleProps {
  src: string;
}

export const Root = styled.div`
  background-color: #333333;
  width: 100vw;
  height: 250px;

  scroll-snap-align: center;
`;

export const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 240px;
  padding-top: 50px;
`;

export const InfoWrap = styled.div``;

export const TitleButton = styled.button`
  text-decoration-line: underline;
  line-height: 50px;

  color: ${({ theme }) => theme.colors.soptWhite};
  font-family: 'SUIT', arial;
  font-size: 24px;
  font-weight: 800;
  font-style: normal;
`;

export const CopyrightText = styled.p`
  margin-top: 21px;
  line-height: 150%;
  font-family: 'SUIT', arial;
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
`;

export const ChannelsWrap = styled.div``;

export const ChannelTitleText = styled.p`
  line-height: 50px;
  font-family: 'SUIT', arial;
  font-size: 24px;
  font-weight: 800;
  font-style: normal;
`;

export const ChannelButtonsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(50px, auto));
  column-gap: 15px;

  margin-top: 20px;
  height: 50px;
`;

export const ChannelButton = styled.button<StyleProps>`
  background-image: url(${(props: StyleProps) => props.src});
`;
