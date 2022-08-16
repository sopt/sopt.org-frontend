import styled from '@emotion/styled';
interface StyleProps {
  src: string;
}

export const Header = styled.header`
  display: flex;
  position: fixed;
  justify-content: center;
  z-index: 9;
  width: 100%;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 60px;
  width: 1160px;
`;

export const Logo = styled.button<StyleProps>`
  background: url(${(props) => props.src}) no-repeat;
  background-size: cover;
  width: 125px;
  height: 41px;
`;

export const HamburgerBar = styled.button<StyleProps>`
  background: url(${(props) => props.src}) no-repeat;
  background-size: cover;
  width: 24px;
  height: 24px;
`;
