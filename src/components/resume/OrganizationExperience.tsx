import { MyOrganization } from '../../constants/resume/organization'
import * as S from '../../pages/Resume/Resume.style'
const OrganizationExperienceResume = (): JSX.Element => {
  return (
    <div>
      <S.Heading>Organization Experience</S.Heading>
      {MyOrganization.map((data) => (
        <S.Space key={data.name}>
          <S.SubHeading>{data.name}</S.SubHeading>
          <p>
            {data.duration} | {data.role}
          </p>
        </S.Space>
      ))}
    </div>
  )
}

export default OrganizationExperienceResume
