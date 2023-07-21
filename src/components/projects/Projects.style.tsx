import styled from 'styled-components'
import { MediaScreen } from '../../utils/mediaScreen'

export const Container = styled.div`
  padding-top: 2rem;
  scroll-margin: 150px;

  @media only screen and (max-width: ${MediaScreen.tablet}) {
    .project-image {
      width: 100%;
    }
  }
`

