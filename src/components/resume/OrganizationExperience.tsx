import { MyOrganization } from '../../constants/resume/organization'
import * as S from '../../pages/Resume/Resume.style'
import ResumeDivider from './ResumeDivider/ResumeDivider'
const OrganizationExperienceResume = (): JSX.Element => {
  return (
    <div>
      <S.Heading>Organization Experience</S.Heading>
      <ResumeDivider />
      <S.MarginatedContainer>
        {MyOrganization.map((data) => (
          <S.Space key={data.name}>
            <S.SubHeading>{data.name}</S.SubHeading>
            <p>
              {data.duration} | {data.role}
            </p>
          </S.Space>
        ))}
      </S.MarginatedContainer>
    </div>
  )
}

export default OrganizationExperienceResume
