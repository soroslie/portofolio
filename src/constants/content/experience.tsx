import { Experience } from '../../types/experience'
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext'
import StayPrimaryPortraitIcon from '@mui/icons-material/StayPrimaryPortrait'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import RestorePageOutlinedIcon from '@mui/icons-material/RestorePageOutlined'
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
const MyExperience: Experience[] = [
  {
    name: 'UI automation',
    projects: 2,
    icon: <QueuePlayNextIcon fontSize='inherit' />
  },
  {
    name: 'API automation',
    projects: 1,
    icon: <RestorePageOutlinedIcon fontSize='inherit' />
  },
  {
    name: 'manual testing',
    projects: 3,
    icon: <RemoveRedEyeOutlinedIcon fontSize='inherit' />
  },
  {
    name: 'Front-end Web',
    projects: 4,
    icon: <DevicesOutlinedIcon fontSize='inherit' />
  },
  {
    name: 'REST API',
    projects: 4,
    icon: <DescriptionOutlinedIcon fontSize='inherit' />
  },
  {
    name: 'mobile apps',
    projects: 1,
    icon: <StayPrimaryPortraitIcon fontSize='inherit' />
  }
]

export default MyExperience
