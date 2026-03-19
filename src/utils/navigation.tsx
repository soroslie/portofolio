import { NavbarNavigation } from '../types/navigation'
import PersonIcon from '@mui/icons-material/Person'
import CodeIcon from '@mui/icons-material/Code'
import BuildIcon from '@mui/icons-material/Build'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import DescriptionIcon from '@mui/icons-material/Description'

export const MyNavigation: NavbarNavigation[] = [
  {
    id: 'my-profile',
    name: 'PROFILE',
    icon: PersonIcon
  },
  {
    id: 'my-projects',
    name: 'PROJECTS',
    icon: CodeIcon
  },
  {
    id: 'my-skill',
    name: 'SKILLS',
    icon: BuildIcon
  },
  {
    id: 'my-contact',
    name: 'CONTACT',
    icon: ContactMailIcon
  },
  {
    id: '',
    name: 'RESUME',
    path: '/resume',
    icon: DescriptionIcon
  }
]