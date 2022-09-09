import { Column } from 'react-table';
import { StatisticsInfo } from '../../store/statistics-slice/statistics.interface';

export interface TableProps {
  columns: Column<StatisticsInfo>[];
  data: StatisticsInfo[];
  sorting: (id: string) => void;
}

export interface IColumn {
  Header: string;
  accessor: string;
}
