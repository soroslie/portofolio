export interface Job {
  title: string
  duration: string
  location: string
  info: string[]
}

export interface WorkExperience {
  companyName: string
  jobs: Job[]
}
