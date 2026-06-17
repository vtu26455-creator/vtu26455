import { useCallback } from 'react';

const usePagination = ({ page, setPage, limit, setLimit }) => {
  const goToPage = useCallback((newPage) => {
    setPage(newPage);
  }, [setPage]);

  const changePageSize = useCallback((newLimit) => {
    setLimit(newLimit);
    setPage(1);
  }, [setLimit, setPage]);

  return {
    page,
    limit,
    goToPage,
    changePageSize
  };
};

export default usePagination;
