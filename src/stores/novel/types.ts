import { LoadingStatus } from 'constants/global.const';

interface INovelState {
  novels: {
    status: LoadingStatus;
    data: IBook[];
  };
  novelDetail: {
    status: LoadingStatus;
    data: Nullable<IBookDetail>;
  };
}

enum NovelAsyncAction {
  getByID = 'novel/getByID',
}

export type { INovelState };
export { NovelAsyncAction };
