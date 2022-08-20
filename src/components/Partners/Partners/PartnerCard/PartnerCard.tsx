import Image from 'next/image';

import * as S from './PartnerCard.style';

interface PartnerCardProps {
  imageSrc: string;
  name: string;
}

function PartnerCard({ imageSrc, name }: PartnerCardProps) {
  return (
    <S.Root>
      <S.ImageWrap>
        <Image layout="fill" src={imageSrc} alt="협업 프로젝트 사진" />
      </S.ImageWrap>
      <S.Name>{name}</S.Name>
    </S.Root>
  );
}

export default PartnerCard;
