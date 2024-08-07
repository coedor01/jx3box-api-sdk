export enum ClientEnum {
  STD = "std",
  ORIGIN = "origin",
}

export interface PageParams {
  page: number,
  per: number,
}

export const defaultPageParams: PageParams = {
  page: 1,
  per: 10,
};

export interface PageResponse {
  total: number,
  per: number,
  pages: number,
  page: number,
  list: Array<any>,
}
