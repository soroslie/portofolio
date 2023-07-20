import { MyProjects } from '../../constants/resume/project'
import { Project } from '../../types/project'
import ProjectItem from './ProjectItem'
import * as S from './Projects.style'
const Projects = (): JSX.Element => {
  const myProject: Project[] = MyProjects

  return (
    <S.Container id='my-project'>
      {myProject.map((data, index) => {
        return <ProjectItem key={index} data={data} />
      })}
    </S.Container>
  )
}

export default Projects
