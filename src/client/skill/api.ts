import { AxiosResponse } from "axios";
import request from "../axios/jx3Box";
import { ClientEnum } from "../core/api";

export function getSkills(
  ids: string,
  client: string = ClientEnum.STD,
): Promise<AxiosResponse<Array<any>, any>> {
  return request({
    url: `/skills`,
    method: 'get',
    params: {
      ids,
      client,
    },
  })
};