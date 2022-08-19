import TempImage from '@src/assets/images/Appjam.svg';
import UnderlinedTitle from '@src/components/common/UnderlinedTitle';
import PartnerCard from '@src/components/Partners/Partners/PartnerCard';

import * as S from './Partners.style';

function Partners() {
  return (
    <S.Root>
      <UnderlinedTitle>PARTNERS</UnderlinedTitle>
      <S.Description>다양한 기업 및 단체에서 SOPT를 위해 후원하고 있습니다.</S.Description>
      <S.PartnerWrap>
        <PartnerCard imageSrc={TempImage} name={'아산나눔재단'} />
        <PartnerCard imageSrc={TempImage} name={'아산나눔재단'} />
        <PartnerCard imageSrc={TempImage} name={'아산나눔재단'} />
        <PartnerCard imageSrc={TempImage} name={'아산나눔재단'} />
        <PartnerCard imageSrc={TempImage} name={'아산나눔재단'} />
        <PartnerCard imageSrc={TempImage} name={'아산나눔재단'} />
      </S.PartnerWrap>
    </S.Root>
  );
}

export default Partners;
