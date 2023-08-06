import { MyEducation } from '../../constants/resume/education'
import * as S from '../../pages/Resume/Resume.style'
import ResumeDivider from './ResumeDivider/ResumeDivider'
const EdcuationResume = (): JSX.Element => {
  return (
    <div>
      <S.Heading>Education</S.Heading>
      <ResumeDivider />
      <S.MarginatedContainer>
        {MyEducation.map((data) => {
          return (
            <div key={data.name}>
              <S.SubHeading>{data.name}: </S.SubHeading>
              <p>{data.duration}</p>
              <S.UnorderedList>
                {data.info.map((info) => {
                  return <S.ListItem key={info}>{info} </S.ListItem>
                })}
              </S.UnorderedList>
            </div>
          )
        })}
      </S.MarginatedContainer>
    </div>
  )
}

export default EdcuationResume
