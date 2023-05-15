import { IFetcherParams, IGetParams, IHeader } from 'utils/fetcher/types';
import { ApiStatus } from 'constants/api.const';
import { RequestMethod } from 'constants/global.const';
import { ERROR_MSG } from 'constants/message';
import { object2Query } from 'utils/url';

const cachedResponses: Record<
  RequestMethod,
  Record<string, Nullable<{ value: any; cacheAt: number; cacheTime: number }>>
> = {
  [RequestMethod.get]: {},
  [RequestMethod.put]: {},
  [RequestMethod.post]: {},
};

const getFromCache = (method: RequestMethod, url: string) => {
  const result = cachedResponses[method][url];
  if (result) {
    const { cacheAt, cacheTime } = result;
    if ((Date.now() - cacheAt) / 60 / 1000 > cacheTime) {
      cachedResponses[method][url] = null;
      return null;
    }
  }

  return result;
};

const save2Cache = (
  method: RequestMethod,
  url: string,
  value: any,
  cacheTime: number, // in minute
) => {
  cachedResponses[method][url] = {
    value,
    cacheAt: Date.now(),
    cacheTime: cacheTime,
  };
};

const getHeaders = (headers?: IHeader) => {
  let result = {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true',
  };
  if (headers) {
    result = { ...result, ...headers };
  }

  return result;
};

const fetcher = async <T>({
  baseUrl,
  method,
  path,
  query,
  body,
  headers,
  cacheTime = 5,
  cacheResponse,
}: IFetcherParams) => {
  try {
    let url = `${baseUrl}`;
    if (path) {
      url = `${url}${path}`;
    }
    if (query) {
      const queryStr = object2Query(query);
      url = queryStr ? `${url}${queryStr}` : url;
    }
    if (method === RequestMethod.get && getFromCache(method, url)) {
      return getFromCache(method, url)?.value as IResponse<T>;
    }

    const options: RequestInit = {};
    options.headers = getHeaders(headers);

    if (['POST', 'PUT'].includes(method) && body) {
      options.body = JSON.stringify(body);
    }

    const rawResponse = await fetch(url, options);
    const res = await rawResponse.json();

    if ((method === RequestMethod.get && cacheResponse) || cacheResponse) {
      save2Cache(method, url, res, cacheTime);
    }

    return res as IResponse<T>;
  } catch (e) {
    console.log(e);
    return {
      code: ApiStatus.unknown,
      message: ERROR_MSG.UNKNOWN,
    } as IResponse<null>;
  }
};

const get = async <T>({
  headers,
  baseUrl,
  path,
  query,
  cacheTime,
  cacheResponse = true,
}: IGetParams) =>
  fetcher<T>({
    method: RequestMethod.get,
    baseUrl,
    path,
    query,
    headers,
    cacheTime,
    cacheResponse,
  });

export { get };
