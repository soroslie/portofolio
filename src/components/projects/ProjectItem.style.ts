import styled from 'styled-components'
import { MediaScreen } from '../../utils/mediaScreen'
import { motion } from 'framer-motion'
import { Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

export const Container = styled.div`
  margin-bottom: 6rem;
  color: white !important;
`

export const Header = styled.h1`
  font-weight: 600;
  font-size: 30px;
  text-align: left;
`

export const SubContent = styled.h1`
  font-weight: 200;
  font-size: 16px;
  line-height: 1.5;
  text-align: left;
`

export const ImageSection = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  margin: auto;
`

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const MobileProjectText = styled(Grid)`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`

export const WebProjectImage = styled(motion.img)`
  width: 80%;
  @media only screen and (max-width: ${MediaScreen.tablet}) {
    width: 100%;
  }
`

export const MobileProjectImage = styled(motion.img)`
  width: 100%;
`

export const TestingProjectImage = styled(motion.img)`
  width: 200px;
  margin: auto;
  @media only screen and (max-width: ${MediaScreen.tablet}) {
    width: 100px;
  }
`

export const ChipSection = styled(motion.div)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: baseline;
  align-content: stretch;
  margin-bottom: 1rem;
  @media only screen and (max-width: ${MediaScreen.laptop}) {
    justify-content: center;
    align-items: center;
    justify-content: center;
  }
`

export const ProjectText = styled(Box)`
  & > * {
    margin-top: 0.75rem;
  }
`
