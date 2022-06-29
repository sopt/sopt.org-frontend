import Logo from '@src/assets/replaceMe/branding/symbol(1).svg';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

function IconBanner() {
  const imgList = Array(50).fill(Logo);

  return (
    <Marquee pauseOnHover={true} gradient={false} speed={50}>
      {imgList.map((imgSrc) => (
        <Image key={imgSrc.id} src={imgSrc} width="64px" height="64px" alt="프로덕트 로고" />
      ))}
    </Marquee>
  );
}

export default IconBanner;
