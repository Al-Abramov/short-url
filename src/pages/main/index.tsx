import React, { useEffect, useMemo } from 'react';
import { Column } from 'react-table';
import { FlexContainer } from '../../components/flex-container';
import { Loader } from '../../components/loader';
import { TableStatistics } from '../../components/table-statistics';
import { CreateLinkContainer } from '../../containers/create-link';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchStatInfo } from '../../store/statistics-slice';
import { StatisticsInfo } from '../../store/statistics-slice/statistics.interface';

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, info, limit } = useAppSelector((state) => state.statistics);

  const columns = useMemo<Column<StatisticsInfo>[]>(
    () => [
      {
        Header: 'Target',
        accessor: 'target',
      },
      {
        Header: 'Short',
        accessor: 'short',
      },
      {
        Header: 'Counter',
        accessor: 'counter',
      },
    ],
    []
  );

  const onSorting = (order: string) => {
    dispatch(fetchStatInfo({ order, offset: 0, limit }));
  };

  useEffect(() => {
    dispatch(fetchStatInfo({ order: 'asc_short', offset: 0, limit }));
  }, []);

  return (
    <FlexContainer location={'column'} flex={'col-start'}>
      <Loader isLoading={isLoading} />
      <CreateLinkContainer />
      <TableStatistics columns={columns} data={info} sorting={onSorting} />
    </FlexContainer>
  );
};
