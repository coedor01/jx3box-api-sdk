import { getIconFileLink } from "../core/service";
import { getSkills } from "./api";
import { Skill, LevelSkill, Talent } from "./typed";

export async function getSkillsMap(aIds: Array<number>): Promise<Map<number, Skill>> {
  const result: Map<number, Skill> = new Map();
  const response = await getSkills(aIds.join(","));

  for (let item of response.data) {
    const skillId = item?.SkillID;

    if (!result.has(skillId)) {
      let skill: Skill = {
        id: skillId,
        name: item?.Name,
        icon: getIconFileLink(item?.IconID),
        desc: item?.parse?.desc,
        talent_desc: item?.parse?.talent_desc,
        levels: new Map(),
      };
      result.set(skill.id, skill);
    }

    const level = item?.Level;
    if (level !== 0) {
      let levelSkill: LevelSkill = {
        level: level,
        desc: item?.Desc,
      }
      result.get(skillId)?.levels?.set(level, levelSkill);
    }
  }

  return result;
};



export async function getTalentsMap(aIds: Array<number>): Promise<Map<number, Talent>> {
  const result: Map<number, Talent> = new Map();
  const response = await getSkills(aIds.join(","));

  for (let item of response.data) {
    const skillId = item?.SkillID;

    let skill: Talent = {
      id: skillId,
      name: item?.Name,
      icon: getIconFileLink(item?.IconID),
      desc: item?.parse?.desc,
    };
    result.set(skill.id, skill);

  }

  return result;
};