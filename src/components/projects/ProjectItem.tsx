import { Project } from '../../types/project'
import { Container } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import * as S from './ProjectItem.style'
import Chip from '../Chip/Chip'
import VisitButton from './VisitButton/VisitButton'
import { FrammerChip, FrammerProjectText } from '../../utils/framer'
import { motion } from 'framer-motion'

interface Props {
  data: Project
}

const openProjectUrl = (url?: string): void => {
  window.open(url, '_blank')
}

const renderChip = (data: string[], color: string): JSX.Element => {
  const content: JSX.Element[] = []
  data.forEach((skill, index) => {
    content.push(<Chip content={skill} key={index} color={color} />)
  })
  return (
    <S.ChipSection whileInView='visible' variants={FrammerChip} initial='hidden'>
      {content}
    </S.ChipSection>
  )
}

const render = (data: Project): JSX.Element => {
  if (data.type === 'Hybrid Mobile Apps') {
    return renderMobile(data)
  }
  if (data.type === 'Testing') {
    return renderTesting(data)
  }
  // else
  return renderOther(data)
}

const renderMobile = (data: Project): JSX.Element => {
  return (
    <S.Container>
      <Grid container>
        <S.MobileProjectText md={6}>
          <S.ProjectText>
            <S.Header style={{ color: data.color }}>{data.name}</S.Header>
            <S.SubContent>{data.heading}</S.SubContent>

            <S.SubContent>{data.description}</S.SubContent>
            {renderChip(data.skill, data.color)}
            {data.link && (
              <VisitButton
                onClick={() => {
                  openProjectUrl(data.link)
                }}
                color={data.color}
              />
            )}
          </S.ProjectText>
        </S.MobileProjectText>
        <Grid md={6}>
          <S.ImageSection>
            <S.MobileProjectImage src={data.image} alt={data.name} />
          </S.ImageSection>
        </Grid>
      </Grid>
    </S.Container>
  )
}

const renderTesting = (data: Project): JSX.Element => {
  return (
    <S.Container>
      <Grid container>
        <Grid md={9} xs={12}>
          <S.Center>
            <S.ProjectText>
              <S.Header style={{ color: data.color }}>{data.name}</S.Header>
              <S.SubContent>{data.heading}</S.SubContent>
              <S.SubContent>{data.description}</S.SubContent>
              {renderChip(data.skill, data.color)}
              {data.link && (
                <VisitButton
                  onClick={() => {
                    openProjectUrl(data.link)
                  }}
                  color={data.color}
                />
              )}
            </S.ProjectText>
          </S.Center>
        </Grid>
        <Grid md={3} xs={12}>
          <S.Center>
            <S.TestingProjectImage src={data.image} alt={data.name} />
          </S.Center>
        </Grid>
      </Grid>
    </S.Container>
  )
}

const renderOther = (data: Project): JSX.Element => {
  return (
    <S.Container>
      <Grid container>
        <Grid md={12}>
          <S.ProjectText>
            <S.Header style={{ color: data.color }}>{data.name}</S.Header>
            <S.SubContent>{data.heading}</S.SubContent>
            <S.SubContent>{data.description}</S.SubContent>
            {renderChip(data.skill, data.color)}
            {data.link && (
              <VisitButton
                onClick={() => {
                  openProjectUrl(data.link)
                }}
                color={data.color}
              />
            )}
          </S.ProjectText>
        </Grid>
        <Grid md={12}>
          <S.ImageSection>
            <S.WebProjectImage src={data.image} alt={data.name} />
          </S.ImageSection>
        </Grid>
      </Grid>
    </S.Container>
  )
}

const ProjectItem = ({ data }: Props): JSX.Element => {
  return (
    <motion.div
      variants={FrammerProjectText}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
    >
      <Container>{render(data)}</Container>
    </motion.div>
  )
}

export default ProjectItem
