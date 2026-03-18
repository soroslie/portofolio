import ScrollToTop from '../../components/Button/ScrollToTop/ScrollToTop'
import Profile from '../../components/Profile/Profile'
import NewHero from '../../components/Hero/Hero'
import SkillSection from '../../components/SkillSection/SkillSection'
import ExperienceMatrix from '../../components/Experience/ExperienceMatrix'
const HomePage = (): JSX.Element => {
  return (
    <>
      <NewHero />
      <Profile />
      <ExperienceMatrix />
      {/* <Projects /> */}
      <SkillSection />
      <ScrollToTop />
    </>
  )
}

export default HomePage
