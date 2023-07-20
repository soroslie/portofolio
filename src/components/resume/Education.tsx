import { MyEducation } from '../../constants/resume/education'
import * as S from '../../pages/Resume/Resume.style'
const EdcuationResume = (): JSX.Element => {
  return (
    <div>
      <S.Heading>Education</S.Heading>
      {MyEducation.map((data) => {
        return (
          <div key={data.name}>
            <S.SubHeading>{data.name}: </S.SubHeading>
            <p>{data.duration}</p>
            {data.info.map((info) => {
              return <S.ListItem key={info}>{info} </S.ListItem>
            })}
          </div>
        )
      })}
    </div>
  )
}

export default EdcuationResume
