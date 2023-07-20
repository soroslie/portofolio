import React from 'react'
import { MySkill } from '../../constants/resume/skill'
import * as S from '../../pages/Resume/Resume.style'
const SkillResume = (): JSX.Element => {
  return (
    <div>
      <S.Heading>Technical Skill</S.Heading>
      {MySkill.map((data) => {
        return (
          <S.ListItem key={data.name}>
            <span>{data.name}: </span>
            {data.list.map((item) => {
              return <span key={item}>{item}, </span>
            })}
          </S.ListItem>
        )
      })}
    </div>
  )
}

export default SkillResume
