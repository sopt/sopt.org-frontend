import CommonError from '@src/components/common/CommonError';
import ErrorBoundary from '@src/components/common/ErrorBoundary';
import SSRSafeSuspense from '@src/components/common/SSRSafeSuspense';
import { getHistoryDetailData } from '@src/lib/api';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { ClipLoader } from 'react-spinners';

import * as S from './DetailMain.style';

const DetailMain = () => {
  return (
    <ErrorBoundary
      renderFallback={({ error, reset }) => <CommonError error={error} reset={reset} />}
    >
      {/*  TODO skeleton 추가 */}
      <SSRSafeSuspense fallback={<ClipLoader size={50} color={'#ffffff'} />}>
        <Resolved />
      </SSRSafeSuspense>
    </ErrorBoundary>
  );
};

function Resolved() {
  const id = 28;
  const { data } = useQuery(['history', id], () => getHistoryDetailData(id), {
    suspense: true,
  });

  useEffect(() => {
    console.log('>>data', data);
  }, [data]);

  return <S.Root>DetailMain</S.Root>;
}

export default DetailMain;
