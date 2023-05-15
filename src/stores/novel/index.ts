import { createSlice } from '@reduxjs/toolkit';

import * as asyncActions from './async-thunk';
import { INovelState } from './types';
import { LoadingStatus } from 'constants/global.const';

const SLICE_NAME = 'novel';

const initialState: INovelState = {
  novels: {
    status: LoadingStatus.idle,
    data: [],
  },
  novelDetail: {
    status: LoadingStatus.idle,
    data: null,
  },
};

export const novelSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    // increment: (state) => {
    // },
    // decrement: (state) => {
    // },
    // incrementByAmount: (state, action) => {
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(asyncActions.getByID.pending, (_, action) => {
        console.log(action);
      })
      .addCase(asyncActions.getByID.fulfilled, (_, action) => {
        console.log(action);
      })
      .addCase(asyncActions.getByID.rejected, (_, action) => {
        console.log(action);
      });
  },
});

export const counterActions = { ...novelSlice.actions, ...asyncActions };

export default novelSlice.reducer;
