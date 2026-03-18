export interface ProjectItem {
  name: string
  link: string
  is_active: boolean
}

export interface Experience {
  name: string
  list: ProjectItem[]
  icon: JSX.Element
}
