interface ISearchNovelRequest {
  name?: string;
  genre?: number;
  status?: number;
  limit: number;
  page?: number;
  sort_by?: string;
  period?: string;
}

export type { ISearchNovelRequest };
