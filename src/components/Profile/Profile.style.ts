import styled from 'styled-components'
import ColorPalletes from '../../utils/color'
import { motion } from 'framer-motion'
import { MediaScreen } from '../../utils/mediaScreen'

export const Container = styled.div`
  color: ${ColorPalletes.whitePrimary};
  display: flex;
  padding: 4rem 1rem 4rem 1rem;
  scroll-margin: 150px;
  @media only screen and (max-width: ${MediaScreen.laptop}) {
    margin: 0 4rem;
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

export const MainContent = styled.h1`
  width: fit-content;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 600;
  font-size: 40px;
  margin-bottom: 1rem;
  span {
    color: ${ColorPalletes.greenPrimary};
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
