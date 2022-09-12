/* eslint-disable react/jsx-key */
import React from 'react';
import { TableCell, TableBody, TableRow } from '@mui/material';
import '../style.scss';
import { TableStatBodyProps } from './table-body.interface';
import { CopyToClipboard } from '../../copy-to-clipboard';

const TableStatBody: React.FC<TableStatBodyProps> = ({ getTableBodyProps, rows, prepareRow }) => {
  return (
    <TableBody {...getTableBodyProps}>
      {rows.map((row) => {
        prepareRow(row);
        return (
          <TableRow {...row.getRowProps()}>
            {row.cells.map((cell) => {
              return cell.column.id === 'short' ? (
                <TableCell sx={{ wordBreak: 'break-word' }} {...cell.getCellProps()}>
                  <CopyToClipboard key={cell.value} text={cell.value}>
                    {cell.render('Cell')}
                  </CopyToClipboard>
                </TableCell>
              ) : (
                <TableCell sx={{ wordBreak: 'break-word' }} {...cell.getCellProps()}>
                  {cell.render('Cell')}
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default React.memo(TableStatBody);
