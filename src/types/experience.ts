export interface ProjectItem {
  name: string
  link: string
  is_active: boolean
  role: string
  description: string
  fe_frameworks: string[]
  be_frameworks: string[]
  testing_tools: string[]
  testing_technique: string[]
  other_tools: string[]
}

export interface Experience {
  name: string
  list: ProjectItem[]
  icon: JSX.Element
}