/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';
import { StatisticsInfo } from '../../store/statistics-slice/statistics.interface';
import { Column, SortingRule, useSortBy, useTable } from 'react-table';
import {
  Box,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Table from '@mui/material/Table';
import TablePagination from '@mui/material/TablePagination';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import './style.scss';
import { TableProps } from './stat.interface';

export const TableStatistics: React.FC<TableProps> = ({ columns, data, sorting }) => {
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { sortBy },
  } = useTable(
    {
      columns,
      data,
      manualSortBy: true,
    },
    useSortBy
  );

  const onSorting = (sortBy: SortingRule<StatisticsInfo>[]) => {
    const [first = 'asc_short'] = sortBy.map(({ desc, id }) => {
      const sortType = desc ? 'desc' : 'asc';
      return `${sortType}_${id}`;
    });

    sorting(first);
  };

  useEffect(() => {
    onSorting(sortBy);
  }, [sortBy]);

  return (
    <Box sx={{ width: '100%', mt: 8 }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} {...getTableProps()} aria-labelledby="tableTitle">
            <TableHead>
              {headerGroups.map((headerGroup) => (
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <TableCell
                      className={column.id === 'target' ? 'width-xl' : ''}
                      sx={{ fontWeight: 700, wordBreak: 'break-word' }}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render('Header')}
                      <div className="arrow">
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <ArrowDropDownIcon />
                          ) : (
                            <ArrowDropUpIcon />
                          )
                        ) : (
                          ''
                        )}
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>
            <TableBody {...getTableBodyProps}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <TableRow {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <TableCell sx={{ wordBreak: 'break-word' }} {...cell.getCellProps()}>
                          {cell.render('Cell')}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={10}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};
