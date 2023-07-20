import React, { useEffect, useState } from 'react'
import * as S from './ScrollToTop.style'
const ScrollToTop = (): JSX.Element => {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset

      if (currentScrollPos < 20) {
        setOpacity(0)
      } else {
        setOpacity(1)
      }
    }
  }, [])

  const moveToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <S.Container
      style={{ opacity: `${opacity}` }}
      onClick={() => {
        moveToTop()
      }}
    >
      <S.Icon fontSize='inherit' />
    </S.Container>
  )
}

export default ScrollToTop
