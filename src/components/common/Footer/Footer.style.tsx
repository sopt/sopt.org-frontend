import styled from '@emotion/styled';

interface StyleProps {
  src: string;
}

export const Root = styled.div`
  background-color: #333333;
  width: 100vw;
  height: 163px;

  /* 데스크탑 뷰 */
  @media (min-width: 1280px) {
    scroll-snap-align: center;
  }

  /* 모바일 뷰 */
  @media (max-width: 1279px) {

    display: flex;
    justify-content: center;
    height: 192px;
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 240px;
  padding-top: 35px;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {

    flex-direction: column;
    justify-content: start;

    padding-top: 30px;
    width: 327px;
  }
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

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    font-size: 12px;
  }
`;

export const ChannelsWrap = styled.div`
  width: 190px;
`;

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

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    margin-top: 20px;
  }
`;

export const ChannelButton = styled.button<StyleProps>`
  background-image: url(${(props: StyleProps) => props.src});
  background-size: cover;
`;
