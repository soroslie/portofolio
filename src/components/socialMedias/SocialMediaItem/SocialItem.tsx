import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import { LinkedIn } from '@mui/icons-material'
import { SocialMedia } from '../../../types/socialMedia'
import * as S from './SocialItem.style'

interface Props {
  data: SocialMedia
}

const SocialItem = ({ data }: Props): JSX.Element => {
  const openUrl = (url?: string): void => {
    window.open(url, '_blank')
  }

  const renderIcon = (name: string): JSX.Element => {
    switch (name) {
      case 'instagram':
        return (
          <InstagramIcon
            onClick={() => {
              openUrl(data.url)
            }}
            fontSize='inherit'
          />
        )
      case 'github':
        return (
          <GitHubIcon
            onClick={() => {
              openUrl(data.url)
            }}
            fontSize='inherit'
          />
        )
      case 'linkedin':
        return (
          <LinkedIn
            onClick={() => {
              openUrl(data.url)
            }}
            fontSize='inherit'
          />
        )
    }
    return <></>
  }
  return <S.Icon>{renderIcon(data.name)}</S.Icon>
}

export default SocialItem
