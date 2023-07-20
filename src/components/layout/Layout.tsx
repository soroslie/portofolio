import { Outlet } from 'react-router-dom'
import * as S from './Layout.style'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
const Layout = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <S.Container>
        <S.Outlet>
          <Outlet />
        </S.Outlet>
        <Footer />
      </S.Container>
    </>
  )
}

export default Layout
