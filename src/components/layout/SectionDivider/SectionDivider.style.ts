import styled from 'styled-components'
import ColorPalletes from '../../../utils/color'

export const Container = styled.div`
  width: 100%;
  border-bottom: solid 2px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
  border-image: linear-gradient(
      to right,
      ${ColorPalletes.whitePrimary},
      ${ColorPalletes.greenPrimary}
    )
    1 0;
`
