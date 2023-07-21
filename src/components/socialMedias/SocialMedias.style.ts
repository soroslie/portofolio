import styled from 'styled-components'
import { MediaScreen } from '../../utils/mediaScreen'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;
  margin-top: 0.5rem;
  @media only screen and (max-width: ${MediaScreen.mobile}) {
    width: 100%;
  }
`
