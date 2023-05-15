type TAsyncThunkParams<T> = {
  callback?: (res?: any) => any;
} & T;

export type { TAsyncThunkParams };
