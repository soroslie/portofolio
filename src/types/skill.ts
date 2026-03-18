import { SvgIconComponent } from '@mui/icons-material'

export interface SkillItem {
  name: string
  level: number // 1-5 confidence level
}

export interface Skill {
  name: string
  list: SkillItem[]
  color: string
  icon: SvgIconComponent
}
