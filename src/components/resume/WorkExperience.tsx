import React from 'react'
import { MyWorkExperience } from '../../constants/resume/workExperience'
import * as S from '../../pages/Resume/Resume.style'
const WorkExperienceResume = (): JSX.Element => {
  return (
    <div>
      <S.Heading>Work Experience</S.Heading>
      {MyWorkExperience.map((data) => (
        <S.Space key={data.name}>
          <S.SubHeading>{data.name}</S.SubHeading>
          <p>
            {data.duration} | {data.location}
          </p>
          <p>{data.info}</p>
        </S.Space>
      ))}
    </div>
  )
}

export default WorkExperienceResume
