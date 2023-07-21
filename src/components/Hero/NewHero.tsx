import Soros from '../../assets/images/soros_transparant_half.png'
import Cypress from '../../assets/images/skill/cypress.png'
import ReactTs from '../../assets/images/skill/react-tsx.png'
import Tailwind from '../../assets/images/skill/tailwind.png'
import Postgres from '../../assets/images/skill/postgres.png'
import * as S from './NewHero.style'
import ButtonRightIcon from '../Button/ButtonRightIcon/ButtonRightIcon'
import ColorPalletes from '../../utils/color'
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined'
import Grid from '@mui/material/Unstable_Grid2'
import { FrammerLetter, FrammerSentences, FrammerSkillPin, MyFrammer } from '../../utils/framer'
import { motion } from 'framer-motion'
import { MainHeading, SubHeading } from '../../constants/content/home'

const NewHero = (): JSX.Element => {
  const handleClick = (): void => {
    const section = document.getElementById('my-profile')
    section?.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  return (
    <S.Container>
      <S.Heading variants={FrammerSentences} initial='hidden' animate='visible'>
        {MainHeading.map((char, index) => {
          return (
            <motion.span key={index} variants={FrammerLetter}>
              {char}
            </motion.span>
          )
        })}
      </S.Heading>
      <S.Grids container>
        <Grid md={5} xs={12}>
          {SubHeading[0]}
        </Grid>
        <Grid md={5} xs={12}>
          {SubHeading[1]}
        </Grid>
        <Grid
          md={2}
          xs={12}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <ButtonRightIcon
            content='Lets Connect'
            onClick={() => {
              handleClick()
            }}
            color={ColorPalletes.greenPrimary}
            animateTo='bot'
          >
            <KeyboardDoubleArrowDownOutlinedIcon />
          </ButtonRightIcon>
        </Grid>
      </S.Grids>
      <S.Content>
        <S.ModelContainer initial='left' whileInView='right' exit='left' variants={MyFrammer}>
          <S.Model src={Soros} alt='soros main' />
          <S.SkillCypress
            src={Cypress}
            alt='cypress'
            variants={FrammerSkillPin}
            whileHover='scale'
          />
          <S.SkillReact
            src={ReactTs}
            alt='react'
            animate='rotate15'
            variants={FrammerSkillPin}
            whileHover={['scale', 'rotate0']}
          />
          <S.SkillTailwind
            src={Tailwind}
            alt='tailwind'
            animate='rotate15'
            variants={FrammerSkillPin}
            whileHover={['scale', 'rotate0']}
          />
          <S.SkillUXD
            animate='rotateN16'
            variants={FrammerSkillPin}
            whileHover={['scale', 'rotate0']}
          >
            <span>
              User <br /> Experience <br /> Design
            </span>
          </S.SkillUXD>
          <S.SkillRegression
            initial='hidden'
            animate='rotate8'
            variants={FrammerSkillPin}
            whileHover='scale'
          >
            <span>
              Regression <br /> Testing
            </span>
          </S.SkillRegression>
          <S.SkillPostgres
            src={Postgres}
            alt='postgress'
            variants={FrammerSkillPin}
            whileHover='scale'
          />
        </S.ModelContainer>
      </S.Content>
    </S.Container>
  )
}

export default NewHero
