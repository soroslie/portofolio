import React from 'react'
import * as S from './Footer.style'
const Footer = (): JSX.Element => {
  const openNewTab = (url: string): void => {
    window.open(url)
  }

  return (
    <S.Container>
      <S.Info>For everything else, you can mail me at</S.Info>
      <S.MailContainer>
        <S.Mail
          onClick={() => {
            openNewTab('mailto:soroslie75@gmail.com')
          }}
        >
          soroslie75@gmail.com
        </S.Mail>
      </S.MailContainer>
      <S.Copyright>© {new Date().getFullYear()} Soros Lie All rights reserved.</S.Copyright>
    </S.Container>
  )
}

export default Footer
