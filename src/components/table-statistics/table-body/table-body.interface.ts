import { Row, TableBodyPropGetter, TableBodyProps } from 'react-table';
import { StatisticsInfo } from '../../../store/statistics-slice/statistics.interface';

export interface TableStatBodyProps {
  getTableBodyProps: (
    propGetter?: TableBodyPropGetter<StatisticsInfo> | undefined
  ) => TableBodyProps;
  rows: Row<StatisticsInfo>[];
  prepareRow: (row: Row<StatisticsInfo>) => void;
}
