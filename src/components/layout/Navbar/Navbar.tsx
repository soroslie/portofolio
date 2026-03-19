import { useState, useEffect } from 'react'
import { MyNavigation } from '../../../utils/navigation'
import * as S from './Navbar.style'
import resume from '/Soros-Lie-CV.pdf'

const Navbar = (): JSX.Element => {
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const downloadPdf = () => {
    const a = document.createElement('a')
    a.href = resume
    a.target = '_blank'
    a.download = 'Soros-Lie-CV.pdf'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  const handleClick = (id?: string, path?: string): void => {
    if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
    if (path) {
      downloadPdf()
    }
  }

  return (
    <S.NavbarContainer $isMobile={isMobile}>
      <S.FloatingContainer $scrolled={scrolled} $isMobile={isMobile}>
        <S.NavButtonsContainer $isMobile={isMobile}>
          {MyNavigation.map((item) => {
            const IconComponent = item.icon
            return (
              <S.NavButton
                key={item.id}
                onClick={() => handleClick(item.id, item.path)}
                $isMobile={isMobile}
              >
                {IconComponent && <IconComponent className='nav-icon' />}
                <span className='nav-text'>{item.name}</span>
              </S.NavButton>
            )
          })}
        </S.NavButtonsContainer>
      </S.FloatingContainer>
    </S.NavbarContainer>
  )
}

export default Navbar
