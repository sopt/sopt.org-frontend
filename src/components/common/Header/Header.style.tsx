import styled from '@emotion/styled';
import menuBar from '@src/assets/icons/menuBar.svg';
import logoIcon from '@src/assets/replaceMe/branding/logo.png';

export const Header = styled.header`
  display: flex;

  position: fixed;
  justify-content: space-between;
  z-index: 9;
  margin: 30px 60px;
  width: calc(100% - 120px);
`;

export const Logo = styled.button`
  background: blue;
  width: 125px;
  height: 41px;
`;

export const HamburgerBar = styled.button`
  background: red;
  width: 24px;
  height: 24px;
`;
