import { SxProps, Theme } from '@mui/material'

export const sectionContainer: SxProps<Theme> = {
  width: '100%',
  bgcolor: '#000000',
  py: { xs: 4, sm: 6, md: 8 },
  position: 'relative',
  overflowX: 'hidden'
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

export const statsContainer: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  gap: { xs: 2, sm: 3, md: 4 },
  mb: 5,
  flexWrap: 'wrap'
}

export const statItem: SxProps<Theme> = {
  textAlign: 'center',
  minWidth: { xs: '100px', sm: '120px' }
}

export const statValue: SxProps<Theme> = {
  color: '#00cc99',
  fontWeight: 700,
  fontSize: { xs: '1.5rem', sm: '2rem' }
}

export const statLabel: SxProps<Theme> = {
  color: 'rgba(255, 255, 255, 0.7)',
  fontSize: { xs: '0.7rem', sm: '0.8rem' }
}

export const gridContainer: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 3,
  width: '100%',
  alignItems: 'stretch',
  marginTop: 2 // Add some top margin to ensure gap is visible
}

export const cardItem = (columns: number): SxProps<Theme> => ({
  flex: {
    xs: '0 0 100%',
    sm: columns === 2 ? '0 0 calc(50% - 12px)' : '0 0 100%',
    md:
      columns === 3
        ? '0 0 calc(33.333% - 16px)'
        : columns === 2
          ? '0 0 calc(50% - 12px)'
          : '0 0 100%'
  },
  maxWidth: {
    xs: '100%',
    sm: columns === 2 ? 'calc(50% - 12px)' : '100%',
    md: columns === 3 ? 'calc(33.333% - 16px)' : columns === 2 ? 'calc(50% - 12px)' : '100%'
  },
  display: 'flex',
  marginBottom: 5 // Add this line
})

export const paperStyles = (hasActiveProjects: boolean): SxProps<Theme> => ({
  p: 2.5,
  bgcolor: 'rgba(128, 128, 128, 0.15)',
  backdropFilter: 'blur(10px)',
  color: '#ffffff',
  border: `1px solid ${hasActiveProjects ? 'rgba(0, 225, 150, 0.2)' : 'rgba(220, 90, 90, 0.2)'}`, // Increased opacity
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
  borderRadius: 4,
  transition: 'all 0.3s ease-in-out',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-8px)',
    borderColor: hasActiveProjects ? 'rgba(0, 204, 153, 0.6)' : 'rgba(224, 111, 111, 0.6)', // Increased opacity
    boxShadow: hasActiveProjects
      ? '0 16px 32px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 204, 153, 0.5)' // Wider glow (30px instead of 20px)
      : '0 16px 32px rgba(0, 0, 0, 0.5), 0 0 30px rgba(224, 111, 111, 0.5)',
    bgcolor: 'rgba(18, 18, 18, 0.85)'
  }
})

export const topGradient = (hasActiveProjects: boolean): SxProps<Theme> => ({
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '40%', // Increased from 25% to 40%
  height: '3px',
  background: hasActiveProjects ? '#00cc99' : '#e06f6f',
  borderRadius: '0 0 4px 4px',
  transition: 'all 0.3s ease-in-out',
  boxShadow: hasActiveProjects
    ? '0 0 20px #00cc99, 0 0 12px #00cc99' // Increased blur radius
    : '0 0 20px #e06f6f, 0 0 12px #e06f6f',
  '&:hover': {
    width: '50%', // Increased from 30% to 50%
    boxShadow: hasActiveProjects
      ? '0 0 30px #00cc99, 0 0 20px #00cc99' // Even wider on hover
      : '0 0 30px #e06f6f, 0 0 20px #e06f6f'
  }
})

export const statsChip = (hasActiveProjects: boolean): SxProps<Theme> => ({
  position: 'absolute',
  top: 12,
  right: 12,
  backgroundColor: hasActiveProjects ? 'rgba(0, 204, 153, 0.1)' : 'rgba(224, 111, 111, 0.1)',
  border: `1px solid ${hasActiveProjects ? 'rgba(0, 200, 150, 0.2)' : 'rgba(220, 90, 90, 0.2)'}`,
  color: '#ffffff',
  fontWeight: 500,
  fontSize: '0.65rem',
  height: '24px',
  borderRadius: '12px',
  padding: '0 8px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  backdropFilter: 'blur(4px)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: hasActiveProjects ? 'rgba(0, 204, 153, 0.2)' : 'rgba(224, 111, 111, 0.2)',
    borderColor: hasActiveProjects ? '#00cc99' : '#e06f6f',
    transform: 'scale(1.05)',
    boxShadow: hasActiveProjects
      ? '0 0 12px rgba(0, 204, 153, 0.4)'
      : '0 0 12px rgba(224, 111, 111, 0.4)'
  }
})

export const cardHeader: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: 1.5,
  mb: 2,
  pb: 1,
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'border-color 0.3s ease-in-out'
}

export const iconWrapper = (hasActiveProjects: boolean): SxProps<Theme> => ({
  fontSize: '1.8rem',
  color: hasActiveProjects ? 'rgba(0, 204, 153, 0.7)' : 'rgba(224, 143, 143, 0.7)',
  transition: 'all 0.3s ease-in-out',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  '&:hover': {
    filter: hasActiveProjects ? 'drop-shadow(0 0 12px #00cc99)' : 'drop-shadow(0 0 10px #e08f8f)'
  }
})

export const categoryTitle: SxProps<Theme> = {
  color: '#ffffff',
  fontSize: '0.9rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  flex: 1,
  transition: 'text-shadow 0.3s ease-in-out'
}

export const categoryDot: SxProps<Theme> = {
  fontSize: '0.6rem',
  color: '#e08f8f',
  filter: 'drop-shadow(0 0 4px #e08f8f)',
  flexShrink: 0,
  transition: 'filter 0.3s ease-in-out'
}

export const projectListContainer: SxProps<Theme> = {
  height: '225px',
  overflowY: 'auto',
  overflowX: 'hidden',
  width: '100%',
  pr: 0.5,
  '&::-webkit-scrollbar': {
    width: '4px'
  },
  '&::-webkit-scrollbar-track': {
    background: 'rgba(0, 204, 153, 0.05)',
    borderRadius: '4px'
  },
  '&::-webkit-scrollbar-thumb': {
    background: 'rgba(0, 204, 153, 0.3)',
    borderRadius: '4px',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      background: 'rgba(0, 204, 153, 0.6)',
      boxShadow: '0 0 10px #00cc99'
    }
  }
}

export const projectList: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 1.5,
  width: '100%'
}

export const projectItem = (parentHasActive: boolean, isActive: boolean): SxProps<Theme> => ({
  color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
  fontSize: '0.8rem',
  padding: '6px 12px',
  borderRadius: 2,
  backgroundColor: parentHasActive ? 'rgba(0, 204, 153, 0.02)' : 'rgba(224, 143, 143, 0.02)',
  border: `1px solid ${parentHasActive ? 'rgba(0, 200, 150, 0.05)' : 'rgba(220, 90, 90, 0.1)'}`,
  transition: 'all 0.2s ease-in-out',
  cursor: 'pointer',
  width: '100%',
  wordBreak: 'break-word',
  display: 'flex',
  alignItems: 'center',
  gap: 1,
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    backgroundColor: parentHasActive ? 'rgba(0, 204, 153, 0.08)' : 'rgba(224, 143, 143, 0.08)',
    borderColor: parentHasActive ? 'rgba(0, 204, 153, 0.3)' : 'rgba(224, 143, 143, 0.3)',
    transform: 'translateX(4px)',
    color: '#ffffff',
    boxShadow: parentHasActive
      ? '0 4px 12px rgba(0, 204, 153, 0.2)'
      : '0 4px 12px rgba(224, 143, 143, 0.2)'
  }
})

export const statusDot = (isActive: boolean): SxProps<Theme> => ({
  fontSize: '0.7rem',
  color: isActive ? '#4caf50' : '#e08f8f',
  filter: isActive ? 'drop-shadow(0 0 6px #4caf50)' : 'drop-shadow(0 0 4px #e08f8f)',
  flexShrink: 0,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    filter: isActive
      ? 'drop-shadow(0 0 12px #4caf50) drop-shadow(0 0 8px #4caf50)'
      : 'drop-shadow(0 0 10px #e08f8f)'
  }
})

export const projectName: SxProps<Theme> = {
  fontSize: '0.8rem',
  lineHeight: 1.4,
  flex: 1,
  color: 'inherit'
}

// Animation variants
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
      duration: 0.6
    }
  }
}

export const titleVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
      duration: 0.8
    }
  }
}

export const statVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
      duration: 0.5
    }
  }
}

export const paperHoverEffect = {
  y: -8,
  transition: { type: 'spring', stiffness: 400, damping: 17 }
}
