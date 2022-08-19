import styled from '@emotion/styled';

interface CloseButtonProps {
  src: string;
}

interface MenuTitleProps {
  isSelected: boolean;
}

export const Root = styled.div`
  position: fixed;
  right: 0;

  z-index: 10;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);

  background: #232323;

  height: 100vh;

  /* 데스크탑 뷰 */
  @media (min-width: 1280px) {
    width: calc((100vw - 1280px) / 2 + 400px);
  }
`;

export const MenuWrap = styled.div`
  padding: 0 60px;

  /* 데스크탑 뷰 */
  @media (min-width: 1280px) {
    width: 400px;
  }
`;

export const CloseButton = styled.button<CloseButtonProps>`
  position: relative;
  top: 35px;
  right: -256px;

  background: url(${(props: CloseButtonProps) => props.src});

  width: 24px;
  height: 24px;
`;

export const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 100px;
  margin-bottom: 50px;

  height: calc(100vh - 200px);
`;

export const MenuTitlesWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(1);
  row-gap: 20px;
`;

export const MenuTitle = styled.a<MenuTitleProps>`
  border-bottom: ${(props: MenuTitleProps) => props.isSelected && '3px solid #8040FF'};
  padding-bottom: 4px;

  width: max-content;

  text-align: left;
  line-height: 25px;
  letter-spacing: -0.03em;

  color: #a9a9a9;
  font-family: 'SUIT', Arial;
  font-size: 20px;
  font-weight: 500;
`;

export const BottomWrap = styled.div``;

export const Rules = styled.a`
  text-decoration-line: underline;
  line-height: 20px;

  letter-spacing: -0.04em;

  color: #a9a9a9;
  font-family: 'SUIT', Arial;
  font-size: 16px;
  font-weight: 800;
`;

export const ChannelWrap = styled.div`
  margin-top: 38px;
`;

export const ChannelTitle = styled.p`

  margin-bottom: 15px;
  line-height: 17px;
  letter-spacing: -0.04em;

  color: ${({ theme }) => theme.colors.soptWhite};
  font-family: 'SUIT', Arial;
  font-size: 14px;
  font-weight: 600;
`;
