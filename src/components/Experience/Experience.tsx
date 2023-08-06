import MyExperience from '../../constants/content/experience'
import SectionDivider from '../layout/SectionDivider/SectionDivider'
import * as S from './Experience.style'
import ExperienceItem from './ExperienceItem/ExperienceItem'

const Experience = (): JSX.Element => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <S.Container
        style={{
          display: 'flex',
          flexDirection: 'row'
        }}
        drag='x' // Enable horizontal drag
        dragConstraints={{ left: 10, right: 10 }} // Set drag constraints
        dragElastic={0.8} // Add elastic effect to drag
      >
        {MyExperience.map((experience, index) => (
          <ExperienceItem key={index} data={experience} />
        ))}
      </S.Container>
      <SectionDivider />
    </div>
  )
}

export default Experience
