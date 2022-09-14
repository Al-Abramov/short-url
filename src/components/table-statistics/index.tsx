/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';
import { StatisticsInfo } from '../../store/statistics-slice/statistics.interface';
import { SortingRule, usePagination, useSortBy, useTable } from 'react-table';
import { Box, Paper, TableContainer } from '@mui/material';
import Table from '@mui/material/Table';
import './style.scss';
import { TableProps } from './stat.interface';
import { TableStatHead } from './table-head';
import { TableStatBody } from './table-body';
import { TablePagination } from './table-pagination';

export const TableStatistics: React.FC<TableProps> = ({
  columns,
  data,
  total,
  limit,
  pageIndexQ,
  sorting,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { sortBy, pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: pageIndexQ },
      pageCount: Math.ceil(total / limit),
      manualSortBy: true,
      manualPagination: true,
      autoResetSortBy: false,
      autoResetExpanded: false,
      autoResetPage: false,
    },
    useSortBy,
    usePagination
  );

  const onSorting = (sortBy: SortingRule<StatisticsInfo>[]) => {
    const [first = 'asc_short'] = sortBy.map(({ desc, id }) => {
      const sortType = desc ? 'desc' : 'asc';
      return `${sortType}_${id}`;
    });
    const offset = getOffset();
    sorting(first, offset);
  };

  const getOffset = () => {
    return pageIndex * limit;
  };

  useEffect(() => {
    onSorting(sortBy);
  }, [sortBy, pageIndex]);

  return (
    <Box sx={{ width: '100%', mt: 8 }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} {...getTableProps()} aria-labelledby="tableTitle">
            <TableStatHead headerGroups={headerGroups} />
            <TableStatBody
              getTableBodyProps={getTableBodyProps}
              rows={rows}
              prepareRow={prepareRow}
            />
          </Table>
        </TableContainer>
        <TablePagination
          previousPage={previousPage}
          nextPage={nextPage}
          gotoPage={gotoPage}
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          pageOptions={pageOptions}
          pageIndex={pageIndex}
          limit={limit}
        />
      </Paper>
    </Box>
  );
};
