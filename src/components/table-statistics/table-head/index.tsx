/* eslint-disable react/jsx-key */
import React from 'react';
import { TableCell, TableHead, TableRow } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import '../style.scss';
import { StatisticsInfo } from '../../../store/statistics-slice/statistics.interface';
import { HeaderGroup } from 'react-table';

const TableStatHead: React.FC<{ headerGroups: HeaderGroup<StatisticsInfo>[] }> = ({
  headerGroups,
}) => {
  return (
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
  );
};

export default React.memo(TableStatHead);
