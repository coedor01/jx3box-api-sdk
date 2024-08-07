import { getXinfaImageLink } from "../core/service";
import xfMap from "./data/xfMap.json";
import { XinFa } from "./typed";

export function getXFsMap(aIds: Array<number>): Map<number, XinFa> {
  const result: Map<number, XinFa> = new Map();
  for (let id of aIds) {
    //@ts-ignore
    const rawXf = xfMap[id];
    const xf: XinFa = {
      id: rawXf.id,
      name: rawXf.name,
      icon: getXinfaImageLink(rawXf.id),
    };
    result.set(id, xf);
  };
  return result;

}