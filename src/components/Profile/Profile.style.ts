import styled from 'styled-components'
import ColorPalletes from '../../utils/color'
import { motion } from 'framer-motion'
import { MediaScreen } from '../../utils/mediaScreen'

export const Container = styled.div`
  color: ${ColorPalletes.whitePrimary};
  display: flex;
  padding: 1rem 1rem 1rem 1rem;
  scroll-margin: 150px;
  margin: 2rem 0rem;
  @media only screen and (max-width: ${MediaScreen.laptop}) {
    margin: 4rem 4rem;
  }
  @media only screen and (max-width: ${MediaScreen.mobile}) {
    margin: 0 1rem;
  }
`

export const LeftSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: flex-start;
  align-content: stretch;
  margin-bottom: 2rem;
  @media only screen and (max-width: ${MediaScreen.laptop}) {
    width: 100%;
  }
`

export const RightSection = styled(motion.div)`
  display: flex;
  width: 33%;
  align-items: center;
  justify-content: end;
  @media only screen and (max-width: ${MediaScreen.laptop}) {
    display: none;
  }
`

export const Heading = styled.h1`
  width: fit-content;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 600;
  font-size: 40px;
  margin-bottom: 1rem;
  span {
    color: ${ColorPalletes.greenPrimary};
  }
  @media only screen and (max-width: ${MediaScreen.mobile}) {
    font-size: 30px;
  }
`
export const SubContent = styled.h1`
  font-weight: 200;
  font-size: 18px;
`

export const ImageBackground = styled.div`
  display: table-cell;
  border-radius: 5%;
  width: 250px;
  height: 250px;
  background-size: contain;
  background-color: ${ColorPalletes.greenPrimary};
  background-position: center top;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
  padding: 0.5rem;
  margin-right: 1.25rem;
`
