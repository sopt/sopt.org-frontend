import Logo from '@src/assets/replaceMe/branding/symbol(1).svg';
import ErrorBoundary from '@src/components/common/ErrorBoundary';
import SSRSafeSuspense from '@src/components/common/SSRSafeSuspense';
import { getMainLogo } from '@src/lib/api';
import axios from 'axios';
import Image from 'next/image';
import { useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import { useQuery } from 'react-query';
import { useMediaQuery } from 'react-responsive';
const IconBanner = () => {
  return (
    // <SSRSafeSuspense fallback={<div>로딩중</div>}>
    <Resolved />
    // </SSRSafeSuspense>
  );
};

function Resolved() {
  const imgList = Array(50).fill(Logo);
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  const { data } = useQuery('mainLogo', () => getMainLogo(), {
    suspense: true,
  });

  useEffect(() => {
    console.log('>> ggdata', data);
  }, [data]);

  // useEffect(() => {
  //   getMainLogo();
  // }, []);

  // useEffect(() => {
  //   getMainLogo();
  // }, []);

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
