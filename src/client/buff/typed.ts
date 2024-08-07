
export interface LevelBuff {
  level: number,
  desc: string,
}

export interface Buff {
  id: number,
  name: string,
  icon: string,
  levels: Map<number, LevelBuff>,
}