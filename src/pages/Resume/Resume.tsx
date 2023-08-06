import Footer from '../../components/layout/Footer/Footer'
import AchievementResume from '../../components/resume/Achievement'
import EducationResume from '../../components/resume/Education'
import OrganizationExperienceResume from '../../components/resume/OrganizationExperience'
import ProjectResume from '../../components/resume/Project'
import SkillResume from '../../components/resume/Skill'
import Summary from '../../components/resume/Summary'
import WorkExperienceResume from '../../components/resume/WorkExperience/WorkExperience'
import * as S from './Resume.style'
const ResumePage = (): JSX.Element => {
  return (
    <S.Container>
      <S.Paper>
        <S.Content>
          <Summary />
          <WorkExperienceResume />
          <ProjectResume />
          <SkillResume />
          <EducationResume />
          <OrganizationExperienceResume />
          <AchievementResume />
        </S.Content>
      </S.Paper>
      <Footer />
    </S.Container>
  )
}

export default ResumePage
