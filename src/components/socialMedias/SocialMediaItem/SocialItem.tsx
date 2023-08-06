import { SocialMedia } from '../../../types/socialMedia'
import * as S from './SocialItem.style'

interface Props {
  data: SocialMedia
}

const SocialItem = ({ data }: Props): JSX.Element => {
  return <S.Icon>{data.icon}</S.Icon>
}

export default SocialItem
