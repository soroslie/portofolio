import { MyAchivement } from '../../constants/resume/achivement'
import * as S from '../../pages/Resume/Resume.style'
const AchievementResume = (): JSX.Element => {
  return (
    <div>
      <S.Heading>Awards, Achievements and Courses</S.Heading>
      {MyAchivement.map((achivement) => {
        return (
          <div key={achivement.name}>
            <S.SubHeading>{achivement.name} </S.SubHeading>
            {achivement.certificate.map((certificate) => {
              return (
                <div key={certificate.year}>
                  <S.SubHeading>{certificate.year}</S.SubHeading>
                  {certificate.title.map((certificate, index) => {
                    return <S.ListItem key={index}>{certificate}</S.ListItem>
                  })}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default AchievementResume
