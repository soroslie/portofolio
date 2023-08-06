import Projects from '../../components/projects/Projects'
import ScrollToTop from '../../components/Button/ScrollToTop/ScrollToTop'
import Profile from '../../components/Profile/Profile'
import NewHero from '../../components/Hero/Hero'
import Experience from '../../components/Experience/Experience'
const HomePage = (): JSX.Element => {
  return (
    <>
      <NewHero />
      <Profile />
      <Experience />
      <Projects />
      <ScrollToTop />
    </>
  )
}

export default HomePage
