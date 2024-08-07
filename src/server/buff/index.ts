import { getIconFileLink } from "../core/service";
import { getBuffs } from "./api";
import { Buff, LevelBuff } from "./typed";

export async function getBuffsMap(aIds: Array<number>): Promise<Map<number, Buff>> {
  const result: Map<number, Buff> = new Map();
  const response = await getBuffs(aIds.join(","));
  for (let item of response.data) {
    const buffId = item?.BuffID;


    if (!result.has(buffId)) {
      let buff: Buff = {
        id: buffId,
        name: item?.Name,
        icon: getIconFileLink(item?.IconID),
        levels: new Map(),
      };
      result.set(buff.id, buff);
    }

    const level = item?.Level;
    if (level !== 0) {
      let levelBuff: LevelBuff = {
        level: level,
        desc: item?.Desc,
      }
      result.get(buffId)?.levels?.set(level, levelBuff);
    }
  }

  return result;
};