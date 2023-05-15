import { RequestMethod } from 'constants/global.const';

interface IHeader {
  'Content-Type'?: string;
  'ngrok-skip-browser-warning'?: string;
}

interface IFetcherParams {
  method: RequestMethod;
  baseUrl: string;
  path?: string;
  cacheTime?: number;
  cacheResponse?: boolean;
  headers?: Record<string, string>;
  body?: Record<string, string | number | boolean>;
  query?: Record<string, string | number | boolean>;
}

interface IGetParams {
  baseUrl: string;
  path?: string;
  cacheTime?: number;
  cacheResponse?: boolean;
  query?: Record<string, string | number | boolean>;
  headers?: Record<keyof IHeader, string>;
}

export type { IHeader, IFetcherParams, IGetParams };
