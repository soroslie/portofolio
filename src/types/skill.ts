export interface SkillItem {
  name: string
  level: number // 1-5 confidence level
}

export interface Skill {
  name: string
  list: SkillItem[] // Changed from string[] to SkillItem[]
}
