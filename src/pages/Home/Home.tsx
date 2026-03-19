import Profile from '../../components/Profile/Profile'
import NewHero from '../../components/Hero/Hero'
import SkillSection from '../../components/SkillSection/SkillSection'
import ExperienceMatrix from '../../components/ExperienceSection/ExperienceMatrix'
import ContactSection from '../../components/ContactSection/ContactSection'
const HomePage = (): JSX.Element => {
  return (
    <>
      <NewHero />
      <Profile />
      <ExperienceMatrix />
      {/* <Projects /> */}
      <SkillSection />
      <ContactSection />
    </>
  )
}

export default HomePage
