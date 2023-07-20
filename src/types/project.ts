export interface Project {
  name: string
  type:
  | 'Website'
  | 'API'
  | 'Native Mobile Apps'
  | 'Hybrid Mobile Apps'
  | 'Game'
  | 'Testing'
  resume_description: string
  description: string
  link?: string
  image: string
  heading?: string
  skill: string[]
  color: string
}
