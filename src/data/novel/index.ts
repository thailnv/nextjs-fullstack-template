import { get } from 'utils/fetcher';
import { ISearchNovelRequest } from './novel-api.types';
import { endpoints } from 'constants/api.const';

const searchNovels = async (params: ISearchNovelRequest) => {
  const res = await get<IBook[]>({
    baseUrl: endpoints.novel.GET.searchNovels(),
    query: params as any,
  });

  return res;
};

const getByID = async (id: number) => {
  const res = await get<IBookDetail>({
    baseUrl: endpoints.novel.GET.getByID(id),
  });

  return res;
};

const novelApi = { searchNovels, getByID };

export default novelApi;
