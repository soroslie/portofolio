import styled from 'styled-components'
import ColorPalletes from '../../constants/color'
import Grid from '@mui/material/Unstable_Grid2'
import { motion } from 'framer-motion'
import { MediaScreen } from '../../utils/mediaScreen'

export const Container = styled.div`
  height: 100%;
  color: ${ColorPalletes.whitePrimary};
`
export const Grids = styled(Grid)`
  padding: 1rem 2rem 2rem 1rem;
`
export const Heading = styled(motion.h1)`
  font-size: 7rem;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: -7px;
  font-family: Arial;
  color: ${ColorPalletes.greenPrimary};
  text-align: center;
  @media only screen and (max-width: ${MediaScreen.tablet}) {
    font-size: 5rem;
    letter-spacing: -2px;
    border-radius: 20% 20% 0 0;
  }

  @media only screen and (max-width: ${MediaScreen.mobile}) {
    font-size: 3rem;
    letter-spacing: 0;
    border-radius: 20% 20% 0 0;
  }
`
export const Content = styled.div`
  height: 50vh;
  width: 100%;
  position: relative;
  padding-bottom: 10rem;
  z-index: 1;

  @media only screen and (max-width: ${MediaScreen.tablet}) {
    display: none;
  }
`

export const ModelContainer = styled(motion.div)`
  position: absolute;
  top: 0rem;
  left: 0;
  width: 100%;
  height: 60vh;
  background-color: ${ColorPalletes.greenPrimary};
  background-image: linear-gradient(rgba(109, 117, 136, 0.3) 0.2em, transparent 0.1em),
    linear-gradient(90deg, rgba(109, 117, 136, 0.3) 0.2em, transparent 0.1em);
  background-size: 4em 4em;
  z-index: 2;
  border-radius: 0 20rem 20rem 0;

  @media only screen and (max-width: ${MediaScreen.laptop}) {
    border-radius: 0% 0% 0% 0%;
    width: 100vw;
  }
`

export const Model = styled(motion.img)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  /* filter: grayscale(100%); */
`
export const Shape = styled(motion.img)`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: absolute;
  z-index: 500;
`
export const TextShape = styled(motion.h2)`
  z-index: 500;

  span {
    box-shadow: -10px 0px 0 7px #d32, 10px 0px 0 7px #d32, 0 0 0 7px #d32;
    box-decoration-break: clone;
    border-radius: 4px;
  }
`
export const Circle = styled(Shape)`
  background-color: white;
  border-radius: 100%;
`
export const Hexagon = styled(Shape)`
  clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
`
export const Chip = styled(Shape)`
  border-radius: 2rem;
`

export const Rectangle = styled(Shape)`
  border-radius: 1rem;
`

export const SkillRegression = styled(TextShape)`
  padding: 4px 6px;
  line-height: 1.25;
  font-size: 28px;
  font-weight: 700;
  position: absolute;
  text-align: center;
  right: 5%;
  top: 50%;
  span {
    background-color: #ee4d2d;
  }
`

export const SkillUXD = styled(TextShape)`
  padding: 4px 6px;
  line-height: 1.25;
  font-size: 28px;
  font-weight: 700;
  position: absolute;
  text-align: left;
  left: 2%;
  bottom: 50%;
  span {
    background-color: #ee4d2d;
  }
`

export const SkillTailwind = styled(Chip)`
  position: absolute;
  height: 60px;
  background-color: #f3d10d;
  padding: 0.05rem;
  right: 15%;
  top: 20%;
`

export const SkillReact = styled(Rectangle)`
  position: absolute;
  padding: 1rem;
  width: 100px;
  background-color: #f47905;
  left: 20%;
  bottom: 10%;
`
export const SkillPostgres = styled(Circle)`
  padding: 0.5rem;
  height: 100px;
  right: 15%;
  bottom: -5%;
  padding: 1rem;
`
export const SkillCypress = styled(Circle)`
  padding: 0.5rem;
  height: 100px;
  left: 15%;
  top: -5%;
`
