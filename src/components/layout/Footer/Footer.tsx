import * as S from './Footer.style'
const Footer = (): JSX.Element => {
  return (
    <S.Container>
      <S.Copyright>© {new Date().getFullYear()} Soros Lie All rights reserved.</S.Copyright>
    </S.Container>
  )
}

export default Footer
