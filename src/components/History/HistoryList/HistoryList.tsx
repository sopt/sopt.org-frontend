import { Item } from '@src/components/About/Sopkaton/Subjects/Subjects.style';
import React, { Dispatch } from 'react';

import HistoryCard, { HistoryCardProps } from '../HistoryCard/HistoryCard';
import * as S from './HistoryList.style';

interface HistoryListProps {
  page?: number;
  limit?: number;
  setPage?: () => void;
}

function HistoryList({ page, limit, setPage }: HistoryListProps) {
  const data = [
    {
      year: 2022,
      semester: 1,
      number: 28,
    },
    {
      year: 2022,
      semester: 1,
      number: 28,
    },
    {
      year: 2022,
      semester: 1,
      number: 28,
    },
    {
      year: 2022,
      semester: 1,
      number: 28,
    },
    {
      year: 2022,
      semester: 1,
      number: 28,
    },
    {
      year: 2022,
      semester: 1,
      number: 28,
    },
    {
      year: 2022,
      semester: 1,
      number: 28,
    },
    {
      year: 2022,
      semester: 1,
      number: 28,
    },
    {
      year: 2022,
      semester: 1,
      number: 28,
    },
    {
      year: 2022,
      semester: 1,
      number: 28,
    },
    {
      year: 2022,
      semester: 1,
      number: 28,
    },
    {
      year: 2022,
      semester: 1,
      number: 28,
    },
  ];

  return (
    <S.UL>
      {data?.map((item, idx) => (
        <HistoryCard year={item.year} semester={item.semester} number={item.number} key={idx} />
      ))}
    </S.UL>
  );
}

export default HistoryList;
