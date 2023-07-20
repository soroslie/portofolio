import SocialItem from './SocialMediaItem/SocialItem'
import * as S from './SocialMedias.style'
import { MySocialMedia } from '../../constants/content/socialMedia'

const SocialMedias = (): JSX.Element => {
  return (
    <S.Container>
      {MySocialMedia.map((item, index) => {
        return <SocialItem key={index} data={item} />
      })}
    </S.Container>
  )
}

export default SocialMedias
