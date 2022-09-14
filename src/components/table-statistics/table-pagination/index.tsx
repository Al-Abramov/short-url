import React from 'react';
import { PaginationProps } from './pagination.interface';
import './style.scss';

export const TablePagination: React.FC<PaginationProps> = ({
  previousPage,
  nextPage,
  gotoPage,
  canPreviousPage,
  canNextPage,
  pageIndex,
  pageOptions,
  limit,
}) => {
  return (
    <div className="TablePagination">
      <button
        className="TablePagination__prev-btn"
        onClick={() => previousPage()}
        disabled={!canPreviousPage}
      >
        {'<'}
      </button>
      <button onClick={() => nextPage()} disabled={!canNextPage}>
        {'>'}
      </button>
      <span className="TablePagination__subtitle">
        Page{' '}
        <strong>
          {pageIndex + 1} of {Math.round(pageOptions.length)}
        </strong>{' '}
      </span>
      <span>
        | Go to page:{' '}
        <input
          type="number"
          defaultValue={pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          }}
          style={{ width: '100px' }}
        />
      </span>{' '}
    </div>
  );
};
