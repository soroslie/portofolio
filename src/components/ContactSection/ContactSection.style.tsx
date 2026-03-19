import { Box, Typography, alpha } from '@mui/material'
import { styled } from '@mui/material/styles'

export const FuturisticSection = styled(Box)(({ theme }) => ({
  minHeight: '80vh',
  backgroundColor: '#0a0a0f',
  padding: theme.spacing(8, 4),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, #13cc9e, #7c3aed, transparent)'
  }
}))

export const GridBackground = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: `
    linear-gradient(rgba(19, 204, 158, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(19, 204, 158, 0.05) 1px, transparent 1px)
  `,
  backgroundSize: '50px 50px',
  pointerEvents: 'none',
  zIndex: 0
})

export const GlowingOrb = styled(Box)({
  position: 'absolute',
  width: '500px',
  height: '500px',
  background:
    'radial-gradient(circle, rgba(19,204,158,0.12) 0%, rgba(124,58,237,0.08) 50%, transparent 80%)',
  borderRadius: '50%',
  filter: 'blur(80px)',
  zIndex: 0
})

export const BinaryRain = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background:
    'repeating-linear-gradient(180deg, rgba(19, 204, 158, 0.02) 0px, rgba(19, 204, 158, 0) 2px, transparent 4px)',
  pointerEvents: 'none',
  zIndex: 0
})

export const SectionHeader = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  marginBottom: theme.spacing(4),
  textAlign: 'center'
}))

export const Title = styled(Typography)({
  fontSize: 'clamp(2rem, 4vw, 3rem)',
  fontWeight: 700,
  marginBottom: '1rem',
  color: '#f1f5f9',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  position: 'relative',
  '& .gradient': {
    background: 'linear-gradient(135deg, #13cc9e, #7c3aed, #13cc9e)',
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'shine 3s linear infinite'
  },
  '@keyframes shine': {
    '0%': { backgroundPosition: '0% center' },
    '100%': { backgroundPosition: '200% center' }
  }
})

export const ContactContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: theme.spacing(4),
  position: 'relative',
  zIndex: 2,
  maxWidth: '1200px',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: theme.spacing(3)
  }
}))

export const TerminalPanel = styled(Box)(({ theme }) => ({
  background: 'rgba(5, 5, 15, 0.8)',
  backdropFilter: 'blur(20px)',
  border: `1px solid ${alpha('#13cc9e', 0.2)}`,
  borderRadius: '24px',
  padding: theme.spacing(4),
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #13cc9e, #7c3aed, transparent)',
    animation: 'scanline 6s linear infinite'
  },
  '@keyframes scanline': {
    '0%': { transform: 'translateX(-100%)' },
    '100%': { transform: 'translateX(100%)' }
  }
}))

export const CyberPanel = styled(Box)(({ theme }) => ({
  background: 'rgba(15, 10, 25, 0.8)',
  backdropFilter: 'blur(20px)',
  border: `1px solid ${alpha('#7c3aed', 0.3)}`,
  borderRadius: '24px',
  padding: theme.spacing(4),
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 20px 40px rgba(124, 58, 237, 0.2)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '400px',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '10%',
    right: '10%',
    width: '150px',
    height: '150px',
    background: `radial-gradient(circle, ${alpha('#7c3aed', 0.2)}, transparent 70%)`,
    borderRadius: '50%',
    filter: 'blur(30px)'
  }
}))

export const RoleChip = styled(Box)({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '6px 14px',
  background: `rgba(19, 204, 158, 0.08)`,
  border: `1px solid ${alpha('#13cc9e', 0.2)}`,
  borderRadius: '30px',
  color: '#13cc9e',
  fontSize: '0.8rem',
  fontFamily: '"Fira Code", monospace',
  marginRight: '8px',
  marginBottom: '8px',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: `rgba(19, 204, 158, 0.15)`,
    borderColor: '#13cc9e',
    transform: 'translateY(-2px)',
    boxShadow: `0 5px 15px ${alpha('#13cc9e', 0.3)}`
  }
})

export const EmailCard = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  padding: '24px',
  background: `linear-gradient(135deg, ${alpha('#13cc9e', 0.05)}, ${alpha('#7c3aed', 0.05)})`,
  border: `1px solid ${alpha('#13cc9e', 0.2)}`,
  borderRadius: '20px',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: `radial-gradient(circle, ${alpha('#13cc9e', 0.2)}, transparent 70%)`,
    opacity: 0,
    transition: 'opacity 0.4s ease',
    transform: 'scale(0)',
    borderRadius: '50%'
  },
  '&:hover': {
    borderColor: '#13cc9e',
    transform: 'scale(1.02) translateY(-4px)',
    background: `linear-gradient(135deg, ${alpha('#13cc9e', 0.1)}, ${alpha('#7c3aed', 0.1)})`,
    boxShadow: `0 20px 40px ${alpha('#13cc9e', 0.3)}`,
    '&::before': {
      opacity: 1,
      transform: 'scale(1)',
      transition: 'transform 0.6s ease, opacity 0.4s ease'
    },
    '& .email-icon': {
      transform: 'scale(1.1) rotate(-5deg)',
      filter: `drop-shadow(0 0 20px #13cc9e)`
    }
  }
})

export const IconContainer = styled(Box)({
  width: '70px',
  height: '70px',
  borderRadius: '18px',
  background: `linear-gradient(135deg, ${alpha('#13cc9e', 0.15)}, ${alpha('#7c3aed', 0.15)})`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#13cc9e',
  transition: 'all 0.4s ease',
  flexShrink: 0,
  border: `1px solid ${alpha('#13cc9e', 0.3)}`,
  '& .email-icon': {
    fontSize: '36px',
    transition: 'all 0.4s ease'
  }
})

export const CodeSnippet = styled(Box)({
  background: 'rgba(0, 0, 0, 0.4)',
  borderRadius: '12px',
  padding: '16px',
  fontFamily: '"Fira Code", monospace',
  fontSize: '0.8rem',
  color: '#13cc9e',
  border: `1px solid ${alpha('#13cc9e', 0.15)}`,
  marginBottom: '20px',
  '& .keyword': { color: '#7c3aed' },
  '& .string': { color: '#13cc9e' }
})

export const FloatAnimation = styled(Box)({
  fontSize: '4rem',
  mb: 2,
  animation: 'float 4s ease-in-out infinite',
  display: 'inline-block',
  background: `rgba(19, 204, 158, 0.1)`,
  borderRadius: '50%',
  padding: '1rem',
  border: `1px solid ${alpha('#13cc9e', 0.2)}`,
  '@keyframes float': {
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-15px)' }
  }
})

export const GradientText = styled(Typography)({
  color: '#f1f5f9',
  fontSize: '1.8rem',
  fontWeight: 700,
  mb: 1,
  background: 'linear-gradient(135deg, #f1f5f9, #13cc9e)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
})

// Animation variants for Framer Motion
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
}

export const titleVariants = {
  hidden: { 
    y: -50, 
    opacity: 0,
    rotateX: -15
  },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.8
    }
  }
}

export const panelVariants = {
  hidden: { 
    x: -100, 
    opacity: 0,
    skewX: -5
  },
  visible: {
    x: 0,
    opacity: 1,
    skewX: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      duration: 0.8
    }
  }
}

export const cyberPanelVariants = {
  hidden: { 
    x: 100, 
    opacity: 0,
    skewX: 5
  },
  visible: {
    x: 0,
    opacity: 1,
    skewX: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      duration: 0.8
    }
  }
}

export const codeSnippetVariants = {
  hidden: { 
    scale: 0.8, 
    opacity: 0,
    rotateY: -10
  },
  visible: {
    scale: 1,
    opacity: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
      delay: 0.3
    }
  }
}

export const rolesContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5
    }
  }
}

export const roleChipVariants = {
  hidden: { 
    y: 20, 
    opacity: 0,
    scale: 0.8
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 12
    }
  }
}

export const emailCardVariants = {
  hidden: { 
    y: 50, 
    opacity: 0,
    scale: 0.9
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
      delay: 0.4
    }
  }
}

export const floatIconVariants = {
  hidden: { 
    rotate: -180,
    scale: 0,
    opacity: 0
  },
  visible: {
    rotate: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
      delay: 0.2
    }
  }
}