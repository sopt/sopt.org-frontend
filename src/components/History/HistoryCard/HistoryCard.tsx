import SoptDefaultLogo from '@src/assets/images/sopt_default_logo.png';
import Image from 'next/image';
import React from 'react';

import * as S from './HistoryCard.style';

export interface HistoryCardProps {
  backgroundImage?: string;
  mainLogo?: string;
  signature?: string;
  mainColor?: string;
  year: number;
  semester: number;
  number: number;
}

function HistoryCard({
  backgroundImage,
  mainLogo,
  signature,
  mainColor,
  year,
  semester,
  number,
}: HistoryCardProps) {
  const semesterParser = (semester: number) => {
    switch (semester) {
      case 1:
        return '상반기';
      default:
        return '하반기';
    }
  };

  return (
    <S.Li mainColor={mainColor} backgroundImage={backgroundImage}>
      <S.TitleContainer>
        <Image
          src={mainLogo ? mainLogo : SoptDefaultLogo.src}
          width={98}
          height={36}
          alt="솝트 로고"
          blurDataURL={mainLogo ? mainLogo : SoptDefaultLogo.src}
          placeholder="blur"
        />
      </S.TitleContainer>
      <S.Info>
        <S.Semester>
          {year}년 {semesterParser(semester)}
        </S.Semester>
        <S.Title mainColor={mainColor}>
          <b>{number}</b>기 {signature && <b className="signatureColor">{signature}</b>} <b>SOPT</b>
        </S.Title>
      </S.Info>
      <S.Line />
    </S.Li>
  );
}

export default HistoryCard;
