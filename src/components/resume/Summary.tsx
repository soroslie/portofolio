import ResumeDivider from './ResumeDivider/ResumeDivider'
import * as S from '../../pages/Resume/Resume.style'
const Summary = () => {
  return (
    <div>
      <S.Heading>Summary</S.Heading>
      <ResumeDivider />
      <S.MarginatedContainer>
        <p>
          Dedicated software engineering learner, I embrace challenges and constantly seek
          opportunities to expand my knowledge. Eager to contribute to innovative projects, I am
          adaptable, curious, and committed to continuous growth in the ever-evolving field of
          software engineering.
        </p>
      </S.MarginatedContainer>
    </div>
  )
}

export default Summary
