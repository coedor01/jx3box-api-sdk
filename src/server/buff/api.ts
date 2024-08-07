import { AxiosResponse } from "axios";
import request from "../axios/jx3Box";
import { ClientEnum, PageParams, PageResponse, defaultPageParams } from "../core/api";


export function getBuffs(
  ids: string,
  client: string = ClientEnum.STD,
): Promise<AxiosResponse<Array<any>, any>> {
  return request({
    url: `/buffs`,
    method: 'get',
    params: {
      ids,
      client,
    },
  })
};
