import styled from 'styled-components'
import ColorPalletes from '../../../utils/color'
import { MediaScreen } from '../../../utils/mediaScreen'

export const Container = styled.div`
  width: 200px;
  min-width: 200px;
  background-color: ${ColorPalletes.greenPrimary};
  border-radius: 4px;
  padding: 3rem 2rem 2rem 2rem;
  margin-right: 1.5rem;
  display: flex;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: stretch;
  color: ${ColorPalletes.whitePrimary};
  @media only screen and (max-width: ${MediaScreen.tablet}) {
    width: 100px;
    min-width: 100px;
    padding: 1.5rem 1.5rem 1rem 1.5rem;
  }
`
export const Icon = styled.div`
  font-size: 40px;
  @media only screen and (max-width: ${MediaScreen.tablet}) {
    font-size: 30px;
  }
`
export const Heading = styled.h2`
  margin-top: 0.25rem;
  min-height: 56px;
  font-size: 28px;
  line-height: 1;
  font-weight: 600;
  text-transform: capitalize;
  @media only screen and (max-width: ${MediaScreen.tablet}) {
    min-height: 36px;
    font-size: 18px;
  }
`
export const SubHeading = styled.h2`
  margin-top: 0.25rem;
  font-size: 14px;
  color: ${ColorPalletes.graySecondary};
`
