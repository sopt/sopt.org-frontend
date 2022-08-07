import React from 'react';

import * as S from './PartInfo.style';

export type PartKorean = '기획' | '디자인' | '개발';

export interface PartInfoStyle {
  width?: string;
  height?: string;
}

interface PartInfoProps extends PartInfoStyle {
  title: PartKorean;
  contents: string;
}

function PartInfo({ title, contents, width = '266px', height = '160px' }: PartInfoProps) {
  return (
    <S.Root width={width} height={height}>
      <S.Title>{title}</S.Title>
      <S.Contents>{contents}</S.Contents>
    </S.Root>
  );
}

export default PartInfo;
