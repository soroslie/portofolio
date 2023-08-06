import { Job } from '../../../../types/workExperience'
import * as S from './JobItem.style'

interface Props {
  data: Job
}

const JobItem = ({ data }: Props): JSX.Element => {
  return (
    <S.Container>
      <h4>{data.title}</h4>
      <p>
        {data.duration} | {data.location}
      </p>
      <S.Ul>
        {data.info.map((description) => (
          <S.Li>{description}</S.Li>
        ))}
      </S.Ul>
    </S.Container>
  )
}

export default JobItem
