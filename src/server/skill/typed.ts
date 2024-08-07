
export interface LevelSkill {
  level: number,
  desc: string,
}

export interface Skill {
  id: number,
  name: string,
  icon: string,
  desc: string,
  talent_desc: string,
  levels: Map<number, LevelSkill>,
}

export interface Talent {
  id: number,
  name: string,
  icon: string,
  desc: string,
}