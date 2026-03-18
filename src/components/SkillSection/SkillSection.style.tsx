import { SxProps, Theme } from '@mui/material'

export const sectionContainer: SxProps<Theme> = {
  width: '100%',
  bgcolor: '#000000',
  py: { xs: 4, sm: 6, md: 8 }
}

export const innerContainer: SxProps<Theme> = {
  maxWidth: 1200,
  mx: 'auto',
  px: { xs: 2, sm: 3, md: 4 }
}

export const sectionTitle = (glowColor: string): SxProps<Theme> => ({
  textAlign: 'center',
  color: glowColor,
  fontWeight: 600,
  letterSpacing: '1px',
  textTransform: 'uppercase',
  textShadow: `0 0 10px ${glowColor}40`,
  mb: { xs: 4, sm: 5, md: 6 },
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: '60px',
    height: '3px',
    background: glowColor,
    margin: '12px auto 0',
    borderRadius: '2px',
    boxShadow: `0 0 10px ${glowColor}`
  }
})

export const rowContainer: SxProps<Theme> = {
  display: 'flex',
  gap: 4,
  mb: 4
}

export const lastRowContainer: SxProps<Theme> = {
  display: 'flex',
  gap: 4
}

export const cardWrapper: SxProps<Theme> = {
  width: '50%'
}

export const paperStyles = (categoryColor: string): SxProps<Theme> => ({
  p: 3,
  minHeight: 280,
  bgcolor: '#0a0a0a',
  color: '#ffffff',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
  borderRadius: 4,
  transition: 'all 0.3s ease-in-out',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: `0 12px 30px ${categoryColor}40, 0 4px 20px ${categoryColor}20`,
    border: `1px solid ${categoryColor}80`,
    bgcolor: '#121212'
  }
})

export const topGradient = (categoryColor: string): SxProps<Theme> => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: '3px',
  background: `linear-gradient(90deg, ${categoryColor}, transparent)`
})

export const iconContainer = (lighterBgColor: string, categoryColor: string): SxProps<Theme> => ({
  width: 56,
  height: 56,
  borderRadius: 3,
  bgcolor: lighterBgColor,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: categoryColor,
  border: '1px solid rgba(255, 255, 255, 0.1)',
  mx: 'auto',
  mb: 2
})

export const categoryTitle: SxProps<Theme> = {
  fontWeight: 700,
  mb: 2.5,
  fontSize: '1.2rem',
  color: '#f1f5f9',
  textAlign: 'center'
}

export const chipContainer: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 1
}

// Mobile styles
export const mobileContainer: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 3
}

export const mobilePaperStyles = (): SxProps<Theme> => ({
  p: 3,
  minHeight: 260,
  bgcolor: '#0a0a0a',
  color: '#ffffff',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
  borderRadius: 4,
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
})

export const mobileIconContainer = (lighterBgColor: string, categoryColor: string): SxProps<Theme> => ({
  width: 50,
  height: 50,
  borderRadius: 3,
  bgcolor: lighterBgColor,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: categoryColor,
  border: '1px solid rgba(255, 255, 255, 0.1)',
  mx: 'auto',
  mb: 2
})

export const mobileCategoryTitle: SxProps<Theme> = {
  fontWeight: 700,
  mb: 2.5,
  fontSize: '1.1rem',
  color: '#f1f5f9',
  textAlign: 'center'
}