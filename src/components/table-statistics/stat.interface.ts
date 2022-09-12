import { Column } from 'react-table';
import { StatisticsInfo } from '../../store/statistics-slice/statistics.interface';

export interface TableProps {
  columns: Column<StatisticsInfo>[];
  data: StatisticsInfo[];
  total: number;
  limit: number;
  sorting: (id: string, offset: number) => void;
  changePage: (order: string, offset: number) => void;
}

export interface IColumn {
  Header: string;
  accessor: string;
}
