import React from 'react'
import { MyProjects } from '../../constants/resume/project'
import * as S from '../../pages/Resume/Resume.style'
const ProjectResume = (): JSX.Element => {
  return (
    <div>
      <S.Heading>Projects</S.Heading>
      {MyProjects.map((data) => (
        <S.Space key={data.name}>
          <S.SubHeading>{data.name}</S.SubHeading>
          <p>{data.type}</p>
          <p>{data.resume_description}</p>
          {data.link !== undefined && (
            <a target='_blank' href={data.link} rel='noreferrer'>
              source
            </a>
          )}
        </S.Space>
      ))}
    </div>
  )
}

export default ProjectResume
