// src/constants/resume/skill.ts
import { Skill } from '../../types/skill'
import CodeIcon from '@mui/icons-material/Code'
import DashboardIcon from '@mui/icons-material/Dashboard'
import BuildIcon from '@mui/icons-material/Build'
import BugReportIcon from '@mui/icons-material/BugReport'

export const MySkill: Skill[] = [
  {
    name: 'Programming Language',
    icon: CodeIcon,
    color: '#60A5FA', // Soft blue (option 4)
    list: [
      { name: 'JS/TS', level: 5 },
      { name: 'Dart', level: 3 },
      { name: 'SQL', level: 3 },
      { name: 'Swift', level: 3 },
      { name: 'Go', level: 3 },
      { name: 'Python', level: 2 },
      { name: 'Java', level: 2 }
    ]
  },
  {
    name: 'Frameworks',
    icon: DashboardIcon,
    color: '#FF6B6B', // Coral red
    list: [
      { name: 'Flutter', level: 2 },
      { name: 'NodeJS Express', level: 5 },
      { name: 'Embedded Javascript', level: 3 },
      { name: 'NEXT/React JS&TS', level: 5 },
      { name: 'Vue JS', level: 5 },
      { name: 'Go Gin', level: 3 },
      { name: 'Tailwind/Material UI/Bootstrap', level: 4 }
    ]
  },
  {
    name: 'Tools',
    icon: BuildIcon,
    color: '#4ECDC4', // Mint blue
    list: [
      { name: 'Figma', level: 3 },
      { name: 'Adobe XD', level: 4 },
      { name: 'JIRA', level: 5 },
      { name: 'Confluence', level: 5 },
      { name: 'Postman', level: 5 },
      { name: 'Git', level: 5 },
      { name: 'ElasticSearch', level: 3 },
      { name: 'Redis', level: 3 },
      { name: 'MySQL/PostgreSQL/MariaDB', level: 4 },

    ]
  },
  {
    name: 'Testing',
    icon: BugReportIcon,
    color: '#A78BFA', // Soft purple (option 1)
    list: [
      { name: 'Cypress', level: 5 },
      { name: 'JEST', level: 4 },
      { name: 'Postman Test', level: 5 },
      { name: 'Playwright', level: 4 },
      { name: 'Chrome Selenium IDE', level: 3 },
      { name: 'Katalon', level: 2 },
      { name: 'Jmeter', level: 2 },
      { name: 'Allure', level: 2 },
      { name: 'Charles', level: 3 },
      { name: 'React Testing Library', level: 2 }
    ]
  }
]
