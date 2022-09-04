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
  /* cursor: pointer; */
  padding: 16px 20px 1px 12px;
  width: 365px;
  max-width: 392px;
  height: 184px;
  max-height: 216px;
  /* 모바일 뷰 */
  @media (max-width: 784px) {
    padding: 12px 20px 16px 7px;
    /* calc(324-20-7) */
    width: 297px;
    max-width: 324px;
    /* calc(178-12-16) */
    height: 150px;
    max-height: 178px;
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
  @media (max-width: 784px) {
    margin-top: 68px;
  }
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
  @media (max-width: 784px) {
    line-height: 15px;
    font-size: 12px;
  }
`;
export const Title = styled.h2<mainColorProps>`
  text-align: right;
  line-height: 30px;
  color: ${theme.colors.soptWhite};
  font-family: 'SUIT';
  font-size: 24px;
  font-weight: 500;
  font-style: normal;

  & b {
    font-weight: 800;
  }

  .signatureColor {
    color: ${(props) => props.mainColor};
  }
  @media (max-width: 784px) {
    line-height: 22px;
    font-size: 18px;
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
  @media (max-width: 784px) {
    position: relative;
    bottom: -16px;
    left: -7.1px;
    opacity: 0.65;
    background: #656565;
    width: 109.3%;
    height: 3px;
  }
`;
