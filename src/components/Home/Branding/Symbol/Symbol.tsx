import Image from 'next/image';

import * as S from './Symbol.style';

interface SymbolProps {
  imgSrc: string;
  name: string;
}

function Symbol({ imgSrc, name }: SymbolProps) {
  return (
    <S.Root>
      <Image src={imgSrc} width="140px" alt="브랜딩 심볼 이미지" />
      <S.RoundName>{name}</S.RoundName>
    </S.Root>
  );
}

export default Symbol;
