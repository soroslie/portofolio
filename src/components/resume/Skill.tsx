import { MySkill } from '../../constants/resume/skill'
import * as S from '../../pages/Resume/Resume.style'
import ResumeDivider from './ResumeDivider/ResumeDivider'
const SkillResume = (): JSX.Element => {
  return (
    <div>
      <S.Heading>Technical Skill</S.Heading>
      <ResumeDivider />
      <S.MarginatedContainer>
        <S.UnorderedList>
          {MySkill.map((data) => {
            return (
              <S.ListItem key={data.name}>
                <span>{data.name}: </span>
                {data.list.map((item, index) => {
                  return (
                    <span key={item}>
                      {item}
                      {index < data.list.length - 1 ? ', ' : ''}
                    </span>
                  )
                })}
              </S.ListItem>
            )
          })}
        </S.UnorderedList>
      </S.MarginatedContainer>
    </div>
  )
}

export default SkillResume
