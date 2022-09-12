import React, { useEffect, useMemo } from 'react';
import { batch } from 'react-redux';
import { Column } from 'react-table';
import { FlexContainer } from '../../components/flex-container';
import { Loader } from '../../components/loader';
import { TableStatistics } from '../../components/table-statistics';
import { CreateLinkContainer } from '../../containers/create-link';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchAllStatInfo, fetchStatInfo, setOffset } from '../../store/statistics-slice';
import { StatisticsInfo } from '../../store/statistics-slice/statistics.interface';

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, info, limit, offset, total } = useAppSelector((state) => state.statistics);

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

  const onSorting = (order: string, offset: number) => {
    dispatch(setOffset(offset));
    dispatch(fetchStatInfo({ order, offset, limit }));
  };

  const changePage = (order: string, offset: number) => {
    dispatch(fetchStatInfo({ order, offset, limit }));
  };

  useEffect(() => {
    console.log('aaaaaaaaaaaaa');
    batch(() => {
      onSorting('asc_short', offset);
      dispatch(fetchAllStatInfo());
    });
  }, []);

  return (
    <FlexContainer location={'column'} flex={'col-start'}>
      <Loader isLoading={isLoading} />
      <CreateLinkContainer />
      <TableStatistics
        columns={columns}
        data={info}
        total={total}
        limit={limit}
        sorting={onSorting}
        changePage={changePage}
      />
    </FlexContainer>
  );
};
