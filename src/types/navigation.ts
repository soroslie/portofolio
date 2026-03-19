import { SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'

export interface NavbarNavigation {
  id: string
  name: string
  path?: string
  icon?: OverridableComponent<SvgIconTypeMap<object, 'svg'>> & {
    muiName: string
  }
}