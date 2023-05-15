export {};

declare global {
  type Nullable<T> = T | null;

  type TObject = Record<string, any>;

  interface IResponse<T> {
    code: number;
    data: Nullable<T>;
    message?: string;
  }

  interface IBook {
    name: string;
  }

  interface IBookDetail extends IBook {
    description: string;
  }
}
