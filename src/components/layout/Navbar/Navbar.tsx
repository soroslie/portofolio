import React from 'react'
import { MyNavigation } from '../../../utils/navigation'
import { Box } from '@mui/material'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import * as S from './Navbar.style'
import ColorPalletes from '../../../utils/color'
interface Props {
  window?: () => Window
}

const Navbar = ({ window }: Props): JSX.Element => {
  const downloadPdf = () => {
    const pdfPath = '/Soros-Lie-CV.pdf'
    const a = document.createElement('a')
    a.href = pdfPath
    a.download = pdfPath.split('/').pop() as string
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  const handleClick = (id?: string, path?: string): void => {
    setMobileOpen(false)
    if (id) {
      const section = document.getElementById(id)
      section?.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
    if (path) {
      downloadPdf()
    }
  }

  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <S.MobileAppBar onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography color={ColorPalletes.greenPrimary} variant='h6' sx={{ m: 4 }}>
        Soros Lie
      </Typography>
      <Divider />
      <List>
        {MyNavigation.map((item) => (
          <ListItem
            key={item.id}
            disablePadding
            onClick={() => {
              handleClick(item.id, item.path)
            }}
          >
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </S.MobileAppBar>
  )
  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <div>
      <S.Appbar>
        <S.Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 'auto', display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {MyNavigation.map((item) => (
              <S.NavButton
                key={item.id}
                onClick={() => {
                  handleClick(item.id, item.path)
                }}
              >
                {item.name}
              </S.NavButton>
            ))}
          </Box>
        </S.Toolbar>
      </S.Appbar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 350,
              backgroundColor: ColorPalletes.blackSecondary
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </div>
  )
}

export default Navbar
