import styled from '@emotion/styled';

interface StyleProps {
  src: string;
}

export const ChannelButtonsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(30px, auto));
  column-gap: 10px;
  width: 190px;

  height: 30px;
`;

export const ChannelButton = styled.button<StyleProps>`
  background-image: url(${(props: StyleProps) => props.src});
  background-size: cover;
  width: 30px;

  height: 30px;
`;
