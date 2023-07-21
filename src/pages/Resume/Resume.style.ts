import styled from 'styled-components'
import { MediaScreen } from '../../utils/mediaScreen'

export const Container = styled.div`
  padding: 20px;
  height: 100%;
`

export const Paper = styled.div`
  background-color: white;
  padding: 2rem 2rem;
  width: 70%;
  border-radius: 8px;
  margin: 2rem auto auto auto;
  animation: fadeInAnimation ease-in-out 1s;
  animation-fill-mode: forwards;
  font-family: Arial, Helvetica, sans-serif;

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media only screen and (max-width: ${MediaScreen.laptop}) {
    width: 80%;
  }
`

export const Content = styled.div`
  margin: 0 5rem;
  padding-bottom: 1rem;
  @media only screen and (max-width: ${MediaScreen.laptop}) {
    margin: 0 1rem;
  }
`

export const Heading = styled.h1`
  margin-top: 1.25rem;
  margin-bottom: 1rem;

  font-weight: bold;
  font-size: 24px;
`

export const SubHeading = styled.h2`
  font-weight: bold;
  font-size: 18px;
`

export const UnorderedList = styled.ul``

export const ListItem = styled.li`
  margin-left: 0.75rem;
`

export const Space = styled.div`
  margin-bottom: 0.75rem;
`
