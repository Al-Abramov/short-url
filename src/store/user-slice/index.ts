import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { authorize, registration } from '../../service/authorize';
import { setCookie } from '../../utils/cookie';
import { IError, UserData, UserState, UserTypes } from './user-reducer.interface';

const initialState: UserState = {
  userName: '',
  error: '',
  isLoading: false,
};

export const fetchRegistration = createAsyncThunk<UserTypes, UserData, { rejectValue: IError }>(
  'user/register',
  async (data, { rejectWithValue }) => {
    try {
      const { name, password } = data;
      const resp = await registration(name, password);
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

export const fetchAuthorize = createAsyncThunk<UserTypes, UserData, { rejectValue: IError }>(
  'user/auth',
  async (data, { rejectWithValue }) => {
    try {
      const { name, password } = data;
      const resp = await authorize(name, password);
      setCookie('token', resp.data.access_token);
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

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegistration.pending, (state) => {
        state.error = '';
        state.isLoading = true;
      })
      .addCase(fetchRegistration.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchRegistration.rejected, (state, action) => {
        state.error = action.payload?.detail ?? '';
        state.isLoading = false;
      })
      .addCase(fetchAuthorize.pending, (state) => {
        state.error = '';
        state.isLoading = true;
      })
      .addCase(fetchAuthorize.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchAuthorize.rejected, (state, action) => {
        state.error = action.payload?.detail ?? '';
        state.isLoading = false;
      });
  },
});

export default userSlice.reducer;
