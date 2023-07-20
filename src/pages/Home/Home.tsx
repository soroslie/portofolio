import Projects from '../../components/projects/Projects'
import ScrollToTop from '../../components/Button/ScrollToTop/ScrollToTop'

import SectionDivider from '../../components/layout/SectionDivider/SectionDivider'
import Profile from '../../components/Profile/Profile'
import NewHero from '../../components/Hero/NewHero'
const HomePage = (): JSX.Element => {
  return (
    <>
      <NewHero />
      <Profile />
      <SectionDivider />
      <Projects />
      <ScrollToTop />
    </>
  )
}

export default HomePage
