import { createAsyncThunk } from '@reduxjs/toolkit';

import { NovelAsyncAction } from './types';
import { ApiStatus } from 'constants/api.const';
import { TAsyncThunkParams } from 'stores/types';
import api from 'data';

const getByID = createAsyncThunk(
  NovelAsyncAction.getByID,
  async ({ id, callback }: TAsyncThunkParams<{ id: number }>) => {
    const res = await api.novel.getByID(id);

    if (res.code !== ApiStatus.success) {
      throw new Error(res.message);
    }
    callback?.(res);
    return res.data;
  },
);

export { getByID };
