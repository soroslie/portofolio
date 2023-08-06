import { SocialMedia } from '../../types/socialMedia'
import GitHubIcon from '@mui/icons-material/GitHub'
import { LinkedIn } from '@mui/icons-material'
import InstagramIcon from '@mui/icons-material/Instagram'

const openUrl = (url?: string): void => {
  window.open(url, '_blank')
}

export const MySocialMedia: SocialMedia[] = [
  {
    name: 'github',
    url: 'https://github.com/soroslie',
    icon: (
      <GitHubIcon
        onClick={() => {
          openUrl('https://github.com/soroslie')
        }}
        fontSize='inherit'
      />
    )
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/liesoros/',
    icon: (
      <InstagramIcon
        onClick={() => {
          openUrl('https://www.instagram.com/liesoros/')
        }}
        fontSize='inherit'
      />
    )
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/soros-lie/',
    icon: (
      <LinkedIn
        onClick={() => {
          openUrl('https://www.linkedin.com/in/soros-lie/')
        }}
        fontSize='inherit'
      />
    )
  }
]
