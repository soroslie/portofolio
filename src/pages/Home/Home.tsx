import ScrollToTop from '../../components/Button/ScrollToTop/ScrollToTop'
import Profile from '../../components/Profile/Profile'
import NewHero from '../../components/Hero/Hero'
import Experience from '../../components/Experience/Experience'
import SkillSection from '../../components/SkillSection/SkillSection'
const HomePage = (): JSX.Element => {
  return (
    <>
      <NewHero />
      <Profile />
      <Experience />
      {/* <Projects /> */}
      <SkillSection />
      <ScrollToTop />
    </>
  )
}

export default HomePage
