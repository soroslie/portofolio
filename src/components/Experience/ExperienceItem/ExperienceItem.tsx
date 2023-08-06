import { Experience } from '../../../types/experience'
import * as S from './ExperienceItem.style'

interface Props {
  data: Experience
}
const ExperienceItem = ({ data }: Props) => {
  return (
    <S.Container>
      <S.Icon> {data.icon}</S.Icon>
      <S.Heading>{data.name}</S.Heading>
      <S.SubHeading>{data.projects} Projects</S.SubHeading>
    </S.Container>
  )
}

export default ExperienceItem
