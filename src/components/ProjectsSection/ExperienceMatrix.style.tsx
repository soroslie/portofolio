import { Box, Typography, Paper, Chip, alpha } from '@mui/material'
import { styled } from '@mui/material/styles'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

export const ExpertiseSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: '#000000',
  padding: theme.spacing(8, 4),
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, #00ffaa, transparent)'
  }
}))

export const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#ffffff',
  fontSize: '2.7rem',
  fontWeight: 700,
  marginBottom: theme.spacing(5),
  textAlign: 'center',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -14,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 90,
    height: 4,
    background: 'linear-gradient(90deg, #00ffaa, #00cc88)',
    borderRadius: 2,
    boxShadow: '0 0 18px #00ffaa'
  }
}))

export interface ExpertiseCardProps {
  $hasActiveProjects: boolean
}

export const ExpertiseCard = styled(Paper, {
  shouldForwardProp: (prop) => prop !== '$hasActiveProjects'
})<ExpertiseCardProps>(({ theme, $hasActiveProjects }) => ({
  backgroundColor: alpha('#808080', 0.15),
  backdropFilter: 'blur(10px)',
  border: `1px solid ${$hasActiveProjects ? 'rgba(0, 225, 150, 0.1)' : 'rgba(220, 90, 90, 0.15)'}`,
  borderRadius: 16,
  padding: theme.spacing(2),
  height: '100%',
  transition: 'all 0.3s ease-in-out',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '50px',
    height: '3px',
    background: $hasActiveProjects ? '#00cc99' : '#e06f6f',
    borderRadius: '0 0 4px 4px',
    boxShadow: $hasActiveProjects ? '0 0 10px #00cc99' : '0 0 10px #e06f6f',
    transition: 'all 0.3s ease-in-out',
    zIndex: 1
  },
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: $hasActiveProjects ? '#00cc99' : '#e06f6f',
    boxShadow: $hasActiveProjects
      ? '0 10px 40px rgba(0, 200, 150, 0.3), 0 0 20px #00cc99'
      : '0 10px 40px rgba(220, 90, 90, 0.25), 0 0 20px #e06f6f',
    '& .icon-wrapper': {
      color: $hasActiveProjects ? '#00cc99' : '#e08f8f',
      transform: 'scale(1.1)',
      filter: $hasActiveProjects 
        ? 'drop-shadow(0 0 8px #00cc99)' 
        : 'drop-shadow(0 0 8px #e08f8f)'
    },
    '& .category-title': {
      color: '#ffffff',
      textShadow: $hasActiveProjects 
        ? '0 0 8px rgba(0, 204, 153, 0.5)' 
        : '0 0 8px rgba(224, 111, 111, 0.5)'
    },
    '&::after': {
      height: '4px',
      boxShadow: $hasActiveProjects 
        ? '0 0 20px #00cc99, 0 0 30px #00cc99' 
        : '0 0 20px #e06f6f, 0 0 30px #e06f6f',
      width: '70px'
    },
    '&::before': {
      opacity: 1,
      boxShadow: $hasActiveProjects 
        ? '0 0 20px #00cc99' 
        : '0 0 20px #e08f8f'
    }
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: $hasActiveProjects
      ? 'linear-gradient(90deg, transparent, #00cc99, transparent)'
      : 'linear-gradient(90deg, transparent, #e08f8f, transparent)',
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out'
  }
}))

export interface CardHeaderProps {
  $hasActiveProjects: boolean
}

export const CardHeader = styled(Box, {
  shouldForwardProp: (prop) => prop !== '$hasActiveProjects'
})<CardHeaderProps>(({ theme, $hasActiveProjects }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(2),
  paddingBottom: theme.spacing(1),
  borderBottom: `1px solid ${$hasActiveProjects ? 'rgba(0, 200, 150, 0.1)' : 'rgba(220, 90, 90, 0.2)'}`,
  transition: 'border-color 0.3s ease-in-out',
  '&:hover': {
    borderBottomColor: $hasActiveProjects ? 'rgba(0, 200, 150, 0.3)' : 'rgba(220, 90, 90, 0.4)'
  }
}))

export interface IconWrapperProps {
  $hasActiveProjects: boolean
}

export const IconWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== '$hasActiveProjects'
})<IconWrapperProps>(({ $hasActiveProjects }) => ({
  fontSize: '1.8rem',
  color: $hasActiveProjects ? alpha('#00cc99', 0.7) : alpha('#e08f8f', 0.7),
  transition: 'all 0.3s ease-in-out',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  '&:hover': {
    filter: $hasActiveProjects 
      ? 'drop-shadow(0 0 10px #00cc99) drop-shadow(0 0 20px rgba(0, 204, 153, 0.3))' 
      : 'drop-shadow(0 0 10px #e08f8f) drop-shadow(0 0 20px rgba(224, 143, 143, 0.3))'
  }
}))

export interface CategoryTitleProps {
  $hasActiveProjects: boolean
}

export const CategoryTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== '$hasActiveProjects'
})<CategoryTitleProps>(({ $hasActiveProjects }) => ({
  color: '#ffffff',
  fontSize: '0.9rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  transition: 'color 0.3s ease-in-out, text-shadow 0.3s ease-in-out',
  '&:hover': {
    textShadow: $hasActiveProjects 
      ? '0 0 10px #00cc99, 0 0 20px rgba(0, 204, 153, 0.3)' 
      : '0 0 10px #e08f8f, 0 0 20px rgba(224, 143, 143, 0.3)'
  }
}))

export const CategoryDot = styled(FiberManualRecordIcon)(({ theme }) => ({
  fontSize: '0.6rem',
  color: '#e08f8f',
  filter: 'drop-shadow(0 0 4px #e08f8f)',
  flexShrink: 0,
  marginLeft: theme.spacing(0.5),
  transition: 'filter 0.3s ease-in-out',
  '&:hover': {
    filter: 'drop-shadow(0 0 8px #e08f8f) drop-shadow(0 0 12px rgba(224, 143, 143, 0.4))'
  }
}))

export const ProjectListContainer = styled(Box)(({ theme }) => ({
  height: '225px',
  overflowY: 'auto',
  overflowX: 'hidden',
  width: '100%',
  paddingRight: theme.spacing(0.5),
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    '&::-webkit-scrollbar-thumb': {
      background: alpha('#00cc99', 0.5),
      boxShadow: '0 0 8px #00cc99'
    }
  },
  '&::-webkit-scrollbar': {
    width: '4px'
  },
  '&::-webkit-scrollbar-track': {
    background: alpha('#00cc99', 0.05),
    borderRadius: '4px'
  },
  '&::-webkit-scrollbar-thumb': {
    background: alpha('#00cc99', 0.3),
    borderRadius: '4px',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      background: alpha('#00cc99', 0.6),
      boxShadow: '0 0 10px #00cc99'
    }
  }
}))

export const ProjectList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  width: '100%',
  padding: 0,
  margin: 0
}))

export interface ProjectItemProps {
  hasLink: boolean
  parentHasActive: boolean
}

export const ProjectItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'hasLink' && prop !== 'parentHasActive'
})<ProjectItemProps>(({ theme, hasLink, parentHasActive }) => ({
  color: '#ffffff',
  fontSize: '0.8rem',
  padding: theme.spacing(0.75, 1.25),
  borderRadius: 6,
  backgroundColor: parentHasActive ? alpha('#00cc99', 0.02) : alpha('#e08f8f', 0.02),
  border: `1px solid ${parentHasActive ? 'rgba(0, 200, 150, 0.05)' : 'rgba(220, 90, 90, 0.1)'}`,
  transition: 'all 0.2s ease-in-out',
  cursor: hasLink ? 'pointer' : 'not-allowed',
  width: '100%',
  wordBreak: 'break-word',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  margin: '0 !important',
  flexShrink: 0,
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: parentHasActive
      ? 'radial-gradient(circle at 30% 50%, rgba(0, 204, 153, 0.1), transparent 70%)'
      : 'radial-gradient(circle at 30% 50%, rgba(224, 143, 143, 0.1), transparent 70%)',
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out',
    pointerEvents: 'none',
    zIndex: 0
  },
  '& > *': {
    position: 'relative',
    zIndex: 1
  },
  '&:hover': {
    backgroundColor: parentHasActive ? alpha('#00cc99', 0.08) : alpha('#e08f8f', 0.08),
    borderColor: parentHasActive ? alpha('#00cc99', 0.3) : alpha('#e08f8f', 0.3),
    color: '#ffffff',
    transform: 'translateX(4px)',
    boxShadow: parentHasActive
      ? '0 4px 12px rgba(0, 204, 153, 0.2), 0 0 15px rgba(0, 204, 153, 0.1)'
      : '0 4px 12px rgba(224, 143, 143, 0.2), 0 0 15px rgba(224, 143, 143, 0.1)',
    '&::after': {
      opacity: 0.5
    }
  }
}))

export interface StatusDotProps {
  isActive?: boolean
}

export const StatusDot = styled(FiberManualRecordIcon, {
  shouldForwardProp: (prop) => prop !== 'isActive'
})<StatusDotProps>(({ isActive }) => ({
  fontSize: '0.6rem',
  color: isActive ? '#4caf50' : '#e08f8f',
  filter: isActive ? 'drop-shadow(0 0 4px #4caf50)' : 'drop-shadow(0 0 4px #e08f8f)',
  flexShrink: 0,
  transition: 'filter 0.3s ease-in-out',
  '&:hover': {
    filter: isActive 
      ? 'drop-shadow(0 0 8px #4caf50) drop-shadow(0 0 12px rgba(76, 175, 80, 0.4))' 
      : 'drop-shadow(0 0 8px #e08f8f) drop-shadow(0 0 12px rgba(224, 143, 143, 0.4))'
  }
}))

export const ProjectName = styled(Typography)(() => ({
  fontSize: '0.8rem',
  lineHeight: 1.4,
  flex: 1,
  color: '#ffffff',
  transition: 'text-shadow 0.3s ease-in-out',
  '&:hover': {
    textShadow: '0 0 8px rgba(255, 255, 255, 0.5)'
  }
}))

export interface StatsChipProps {
  $hasActiveProjects: boolean
}

export const StatsChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== '$hasActiveProjects'
})<StatsChipProps>(({ $hasActiveProjects }) => ({
  position: 'absolute',
  top: 10,
  right: 10,
  backgroundColor: $hasActiveProjects ? alpha('#00cc99', 0.1) : alpha('#e08f8f', 0.1),
  border: `1px solid ${$hasActiveProjects ? 'rgba(0, 200, 150, 0.2)' : 'rgba(220, 90, 90, 0.2)'}`,
  color: '#ffffff',
  fontWeight: 500,
  fontSize: '0.65rem',
  height: '18px',
  transition: 'all 0.3s ease-in-out',
  '& .MuiChip-label': {
    padding: '2px 8px',
    transition: 'text-shadow 0.3s ease-in-out'
  },
  '&:hover': {
    backgroundColor: $hasActiveProjects ? alpha('#00cc99', 0.2) : alpha('#e08f8f', 0.2),
    borderColor: $hasActiveProjects ? '#00cc99' : '#e08f8f',
    boxShadow: $hasActiveProjects
      ? '0 0 15px #00cc99, 0 0 30px rgba(0, 204, 153, 0.2)'
      : '0 0 15px #e08f8f, 0 0 30px rgba(224, 143, 143, 0.2)',
    transform: 'scale(1.05)',
    '& .MuiChip-label': {
      textShadow: $hasActiveProjects
        ? '0 0 8px #00cc99'
        : '0 0 8px #e08f8f'
    }
  }
}))