import { Dispatch, SetStateAction, useCallback } from 'react';
import shortid from 'shortid';

import * as S from './Pagination.style';

interface PaginationProps {
  pageLimit: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const PREV = 'PREV';
const NEXT = 'NEXT';

const SELECTABLE_NUM = 5;

function Pagination(props: PaginationProps) {
  const { pageLimit, currentPage, setCurrentPage } = props;

  const getSelectablePages = useCallback(() => {
    const first = currentPage > 2 ? currentPage - 2 : 1;
    const last = first + SELECTABLE_NUM;

    const pages = [];

    for (let pageNum = first; pageNum < last; pageNum++) {
      if (pageNum > pageLimit) break;
      pages.push(pageNum);
    }

    return pages;
  }, [currentPage, pageLimit]);

  const showPages = () =>
    getSelectablePages().map((_) => {
      const isCurrent = _ === currentPage;

      return (
        <S.Page key={shortid.generate()} isCurrent={isCurrent} onClick={() => setCurrentPage(_)}>
          {_}
        </S.Page>
      );
    });

  const naviagtePage = (dir: typeof PREV | typeof NEXT) => {
    const value = dir === PREV ? -1 : 1;

    if (currentPage + value < 1 || currentPage + value > pageLimit) return;
    setCurrentPage((prevPage) => prevPage + value);
  };

  return (
    <S.Container>
      <S.LeftBtn disabled={currentPage === 1} onClick={() => naviagtePage(PREV)}>
        {/* <S.LeftArr /> */}
      </S.LeftBtn>
      <S.PageList>{showPages()}</S.PageList>
      <S.RightBtn disabled={currentPage === pageLimit} onClick={() => naviagtePage(NEXT)}>
        {/* <S.RightArr /> */}
      </S.RightBtn>
    </S.Container>
  );
}

export default Pagination;
