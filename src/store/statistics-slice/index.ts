import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { createShortLink } from '../../service/link';
import { getStatistics } from '../../service/statistics';
import { IError } from '../user-slice/user-reducer.interface';
import { StatisticsInfo, StatisticsState, StatsticsData } from './statistics.interface';

const initialState: StatisticsState = {
  info: [],
  currentShort: '',
  limit: 5,
  offset: 0,
  total: 0,
  page: 0,
  isLoading: false,
};

export const fetchCreateLink = createAsyncThunk<StatisticsInfo, string, { rejectValue: IError }>(
  'statistics/link',
  async (link, { rejectWithValue }) => {
    try {
      const resp = await createShortLink(link);
      return resp.data;
    } catch (err) {
      const error = err as AxiosError<IError>;

      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchStatInfo = createAsyncThunk<
  StatisticsInfo[],
  StatsticsData,
  { rejectValue: IError }
>('statistics/info', async (data, { rejectWithValue }) => {
  try {
    const { order, offset, limit } = data;
    const resp = await getStatistics(order, offset, limit);
    return resp.data;
  } catch (err) {
    const error = err as AxiosError<IError>;

    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const fetchAllStatInfo = createAsyncThunk<StatisticsInfo[], void, { rejectValue: IError }>(
  'statistics/allInfo',
  async (_, { rejectWithValue }) => {
    try {
      const resp = await getStatistics('asc_short', 0, 0);
      return resp.data;
    } catch (err) {
      const error = err as AxiosError<IError>;

      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    setOffset(state, action) {
      state.offset = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllStatInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllStatInfo.fulfilled, (state, action) => {
        const info = action.payload;
        state.total = info.length;
        state.isLoading = false;
      })
      .addCase(fetchAllStatInfo.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchStatInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchStatInfo.fulfilled, (state, action) => {
        state.info = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchStatInfo.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchCreateLink.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCreateLink.fulfilled, (state, action) => {
        state.currentShort = action.payload.short;
        state.isLoading = false;
      })
      .addCase(fetchCreateLink.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setOffset } = statisticsSlice.actions;

export default statisticsSlice.reducer;
