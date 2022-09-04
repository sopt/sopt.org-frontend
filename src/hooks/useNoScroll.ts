import { MenuType } from '@src/components/common/Header/Header';
import { useEffect } from 'react';

export default function useNoScroll(isMenuShown: MenuType) {
  useEffect(() => {
    if (isMenuShown === 'true') {
      document.body.style.overflow = 'hidden';
    } else {
      return () => {
        document.body.style.overflow = 'auto';
      };
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuShown]);
}
