import styled from '@emotion/styled'
import { MediaScreen } from '../../../utils/mediaScreen'

export const Icon = styled.div`
  margin-right: 15px;
  margin-left: 15px;
  transition: all 0.5s ease;
  font-size: 60px;
  &:hover {
    cursor: pointer;
    transition: all 0.5 ease;
    transform: scale(1.25);
    color: #13cc9e;
  }

  @media only screen and (max-width: ${MediaScreen.mobile}) {
    font-size: 40px;
  }
`
