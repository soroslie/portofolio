import Footer from '../../components/layout/Footer/Footer'
import AchievementResume from '../../components/resume/Achievement'
import EducationResume from '../../components/resume/Education'
import OrganizationExperienceResume from '../../components/resume/OrganizationExperience'
import ProjectResume from '../../components/resume/Project'
import SkillResume from '../../components/resume/Skill'
import WorkExperienceResume from '../../components/resume/WorkExperience'
import * as S from './Resume.style'
const ResumePage = (): JSX.Element => {
  return (
    <S.Container>
      <S.Paper>
        <S.Content>
          <S.Heading>Summary</S.Heading>
          <p>
            Fresh Graduate majoring in Mobile Application and Technology. Eager to learn with more
            than 1 year experience in mobile and web development. Experienced in NodeJS Express and
            Flutter. Looking for an opportunity to apply my technical skills, knowledge, and
            experience.
          </p>
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
