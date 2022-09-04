import styled from '@emotion/styled';
import theme from '@src/styles/theme';

interface mainColorProps {
  mainColor?: string;
}

interface cardProps extends mainColorProps {
  backgroundImage?: string;
}
export const Li = styled.li<cardProps>`
  border: 4px solid #2a2a2a;
  border-radius: 16px 16px 0px 0px;
  background: #242424;
  background: url(${(props) => props.backgroundImage});
  padding: 16px 20px 1px 12px;
  max-width: 392px;
  height: 184px;
  max-height: 216px;
  /* 모바일 뷰 */
  @media (max-width: 769px) {
    width: 324px;
    height: 178px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 82px;
`;

export const Semester = styled.p`
  margin-bottom: 6px;
  text-align: right;
  line-height: 17px;
  color: ${theme.colors.soptWhite};
  font-family: 'SUIT';
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
`;
export const Title = styled.h2<mainColorProps>`
  text-align: right;
  line-height: 30px;
  color: ${theme.colors.soptWhite};
  font-family: 'SUIT';
  font-size: 24px;
  font-weight: 800;
  font-style: normal;

  .signatureColor {
    color: ${(props) => props.mainColor};
  }
`;

export const Line = styled.div<mainColorProps>`
  position: relative;
  bottom: -7px;
  left: -11.3px;
  opacity: 0.65;
  background: ${(props) => (props.mainColor ? props.mainColor : '#656565')};
  width: 109%;
  height: 7.42px;
`;
