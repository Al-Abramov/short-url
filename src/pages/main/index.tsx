import React, { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Column } from 'react-table';
import { FlexContainer } from '../../components/flex-container';
import { Loader } from '../../components/loader';
import { TableStatistics } from '../../components/table-statistics';
import { CreateLinkContainer } from '../../containers/create-link';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchAllStatInfo, fetchStatInfo } from '../../store/statistics-slice';
import { StatisticsInfo } from '../../store/statistics-slice/statistics.interface';

export const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useAppDispatch();
  const { isLoading, info, limit, total } = useAppSelector((state) => state.statistics);

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

  const orderQuery = searchParams.get('order');
  const offsetQuery = searchParams.get('offset') || 0;
  const limitQuery = searchParams.get('limit') || 5;

  const onSorting = (order: string, offset: number) => {
    const params = {
      order,
      offset: String(offset),
      limit: String(limit),
    };

    setSearchParams(params);
    dispatch(fetchStatInfo({ order, offset, limit }));
  };

  const changePage = (order: string, offset: number) => {
    const params = {
      order,
      offset: String(offset),
      limit: String(limit),
    };

    setSearchParams(params);
    dispatch(fetchStatInfo({ order, offset, limit }));
  };

  useEffect(() => {
    setSearchParams(`order=${orderQuery}&offset=${offsetQuery}&limit=${limitQuery}`);
    dispatch(fetchAllStatInfo());
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
        pageIndexQ={+offsetQuery / +limitQuery}
        sorting={onSorting}
        changePage={changePage}
      />
    </FlexContainer>
  );
};
