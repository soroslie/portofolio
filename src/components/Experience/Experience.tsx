import MyExperience from '../../constants/content/experience'
import SectionDivider from '../layout/SectionDivider/SectionDivider'
import * as S from './Experience.style'
import ExperienceItem from './ExperienceItem/ExperienceItem'

const Experience = (): JSX.Element => {
  return (
    <div>
      <div style={{ overflowX: 'auto' }}>
        <S.Container
          style={{
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          {MyExperience.map((experience, index) => (
            <ExperienceItem key={index} data={experience} />
          ))}
        </S.Container>
      </div>
      <SectionDivider />
    </div>
  )
}

export default Experience
