import useMounted from '@src/hooks/useMounted';
import React, { ComponentProps, Suspense } from 'react';

export default function SSRSafeSuspense(props: ComponentProps<typeof Suspense>) {
  const isMounted = useMounted();

  if (isMounted) {
    return <Suspense {...props} />;
  }

  return <>{props.fallback}</>;
}
