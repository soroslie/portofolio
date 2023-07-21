import styled from 'styled-components'
import AppBar from '@mui/material/AppBar'
import ColorPalletes from '../../../utils/color'
import { Box, Toolbar as MUIToolbar } from '@mui/material'
import Button from '@mui/material/Button'
import { MediaScreen } from '../../../utils/mediaScreen'

export const Appbar = styled(AppBar)`
  background-color: ${ColorPalletes.blackSecondary} !important;
  top: 0;
  left: auto !important;
  right: auto !important;
`

export const MobileAppBar = styled(Box)`
  background-color: ${ColorPalletes.blackSecondary} !important;
  color: ${ColorPalletes.whitePrimary};
`

export const NavButton = styled(Button)`
  color: ${ColorPalletes.whitePrimary} !important;
  font-weight: 600 !important;
  margin: 0 0.5rem !important;
  @media only screen and (min-width: ${MediaScreen.display}) {
    margin: 0 1rem !important;
  }

  &:hover {
    color: ${ColorPalletes.greenPrimary} !important;
  }
`

export const Toolbar = styled(MUIToolbar)`
  max-width: 1280px;

  @media only screen and (min-width: ${MediaScreen.laptop}) {
    height: 100px;
    margin: auto;
  }
`
