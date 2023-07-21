import styled, { keyframes } from 'styled-components'
import NorthOutlinedIcon from '@mui/icons-material/NorthOutlined'
import ColorPalletes from '../../../utils/color'
import { MediaScreen } from '../../../utils/mediaScreen'

const bounce = keyframes`
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
    100% {
      transform: translateY(0);
    }
`

export const Container = styled.div`
  font-size: 50px;
  animation: ${bounce} 2s linear infinite;
  transition: opacity 1s;
  position: fixed;
  right: 1%;
  bottom: 0;
  margin-bottom: 2rem;

  width: 50px;
  @media only screen and (max-width: ${MediaScreen.mobile}) {
    font-size: 30px;
  }
  &:hover {
    cursor: pointer;
  }
`

export const Icon = styled(NorthOutlinedIcon)`
  color: ${ColorPalletes.greenPrimary};
`
