import Pagination from '@src/components/common/Pagination';
import UnderlinedTitle from '@src/components/common/UnderlinedTitle';
import { DESCRIPTION, TITLE } from '@src/constants/history';
import React, { useState } from 'react';

import HistoryList from '../HistoryList';
import * as S from './Main.style';

function Main() {
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(31);
  const LIMIT = 12;
  const pageLimit = Math.ceil(total / LIMIT);

  return (
    <S.Root>
      <UnderlinedTitle fontSize="35px">{TITLE}</UnderlinedTitle>
      <S.Description>{DESCRIPTION}</S.Description>
      <HistoryList setTotal={setTotal} page={currentPage} limit={LIMIT} />
      <Pagination pageLimit={pageLimit} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </S.Root>
  );
}

export default Main;
