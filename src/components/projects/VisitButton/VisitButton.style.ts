import styled from 'styled-components'
import TrendingFlatOutlinedIcon from '@mui/icons-material/TrendingFlatOutlined'
import { MediaScreen } from '../../../utils/mediaScreen'

export const Icon = styled(TrendingFlatOutlinedIcon)`
  &:hover {
    transform: translate(5px, 0);
    transition: all 0.2s ease-in-out;
  }
`
export const Container = styled.div`
  @media only screen and (max-width: ${MediaScreen.mobile}) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }
`
