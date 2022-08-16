import Logo from '@src/assets/replaceMe/branding/symbol(1).svg';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { useMediaQuery } from 'react-responsive';

function IconBanner() {
  const imgList = Array(50).fill(Logo);
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  return (
    <Marquee pauseOnHover={true} gradient={false} speed={50}>
      {imgList.map((imgSrc) => (
        <Image
          key={imgSrc.id}
          src={imgSrc}
          width={isDesktop ? '55px' : '35px'}
          height={isDesktop ? '55px' : '35px'}
          alt="프로덕트 로고"
        />
      ))}
    </Marquee>
  );
}

export default IconBanner;
