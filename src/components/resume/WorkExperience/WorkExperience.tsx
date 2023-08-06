import { MyWorkExperience } from '../../../constants/resume/workExperience'
import * as S from '../../../pages/Resume/Resume.style'
import JobItem from './JobsItem/JobItem'
import ResumeDivider from '../ResumeDivider/ResumeDivider'

const WorkExperienceResume = (): JSX.Element => {
  return (
    <div>
      <S.Heading>Work Experience</S.Heading>
      <ResumeDivider />
      <S.MarginatedContainer>
        {MyWorkExperience.map((data) => (
          <div key={data.companyName}>
            <S.SubHeading>{data.companyName}</S.SubHeading>
            {data.jobs.map((data) => (
              <JobItem data={data} />
            ))}
          </div>
        ))}
      </S.MarginatedContainer>
    </div>
  )
}

export default WorkExperienceResume
