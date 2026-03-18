import React from 'react'
import { Box, Typography, alpha } from '@mui/material'
import { styled } from '@mui/material/styles'
import SendIcon from '@mui/icons-material/Send'
import CodeIcon from '@mui/icons-material/Code'
import TerminalIcon from '@mui/icons-material/Terminal'
import MailOutlineIcon from '@mui/icons-material/MailOutline'

const FuturisticSection = styled(Box)(({ theme }) => ({
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

const GridBackground = styled(Box)({
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

const GlowingOrb = styled(Box)({
  position: 'absolute',
  width: '500px',
  height: '500px',
  background:
    'radial-gradient(circle, rgba(19,204,158,0.12) 0%, rgba(124,58,237,0.08) 50%, transparent 80%)',
  borderRadius: '50%',
  filter: 'blur(80px)',
  zIndex: 0
})

const BinaryRain = styled(Box)({
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

const SectionHeader = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  marginBottom: theme.spacing(4),
  textAlign: 'center'
}))

const Title = styled(Typography)({
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

const ContactContainer = styled(Box)(({ theme }) => ({
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

const TerminalPanel = styled(Box)(({ theme }) => ({
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

const CyberPanel = styled(Box)(({ theme }) => ({
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

const RoleChip = styled(Box)({
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

const EmailCard = styled(Box)({
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

const IconContainer = styled(Box)({
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

const CodeSnippet = styled(Box)({
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

const ContactSection: React.FC = () => {
  const roles = ['Sr QA Engineer', 'Automation Tester', 'Jr Project Manager', 'Jr Product Manager']

  const handleEmailClick = () => {
    window.location.href =
      'mailto:soroslie75@gmail.com?subject=Opportunity%20from%20Portfolio&body=Hi%20Alfian%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity...'
  }

  return (
    <FuturisticSection id='my-contact'>
      <GridBackground />
      <GlowingOrb
        sx={{
          top: '-200px',
          left: '-100px',
          background: `radial-gradient(circle, ${alpha('#13cc9e', 0.12)} 0%, ${alpha('#7c3aed', 0.08)} 50%, transparent 80%)`
        }}
      />
      <GlowingOrb
        sx={{
          bottom: '-200px',
          right: '-100px',
          background: `radial-gradient(circle, ${alpha('#7c3aed', 0.12)} 0%, ${alpha('#13cc9e', 0.08)} 50%, transparent 80%)`
        }}
      />
      <BinaryRain />

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <SectionHeader>
          <Title>
            GET IN <span className='gradient'>TOUCH</span>
          </Title>
        </SectionHeader>

        <ContactContainer>
          <TerminalPanel>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
              <TerminalIcon sx={{ color: '#13cc9e' }} />
              <Typography sx={{ color: '#7c3aed', fontFamily: '"Fira Code", monospace' }}>
                ~/contact/opportunities
              </Typography>
            </Box>

            <CodeSnippet>
              <Box sx={{ mb: 1 }}>
                <span className='keyword'>const</span>{' '}
                <span style={{ color: '#f1f5f9' }}>roles</span> = [
              </Box>
              <Box sx={{ pl: 3, mb: 1 }}>
                {roles.map((role, i) => (
                  <Box key={i}>
                    <span className='string'>'{role}'</span>
                    {i < roles.length - 1 ? ',' : ''}
                  </Box>
                ))}
              </Box>
              <Box>];</Box>
              <Box sx={{ mt: 2 }}>
                <span className='keyword'>const</span>{' '}
                <span style={{ color: '#f1f5f9' }}>status</span> ={' '}
                <span className='string'>'available'</span>;
              </Box>
            </CodeSnippet>

            <Typography
              sx={{
                color: alpha('#f1f5f9', 0.8),
                fontSize: '1rem',
                lineHeight: 1.8,
                mb: 3
              }}
            >
              Currently Open to Sr QA Engineer, Automation Tester,
              <br />
              Jr Project Manager, and Jr Product Manager roles. Kindly contact me via email for any
              opportunities.
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 2 }}>
              {roles.map((role, index) => (
                <RoleChip key={index}>
                  <CodeIcon sx={{ fontSize: '0.8rem' }} />
                  {role}
                </RoleChip>
              ))}
            </Box>
          </TerminalPanel>

          <CyberPanel>
            <Box sx={{ position: 'relative', zIndex: 2 }}>
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Box
                  sx={{
                    fontSize: '4rem',
                    mb: 2,
                    animation: 'float 4s ease-in-out infinite',
                    display: 'inline-block',
                    background: `rgba(19, 204, 158, 0.1)`,
                    borderRadius: '50%',
                    padding: '1rem',
                    border: `1px solid ${alpha('#13cc9e', 0.2)}`
                  }}
                >
                  📡
                </Box>
                <Typography
                  sx={{
                    color: '#f1f5f9',
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    mb: 1,
                    background: 'linear-gradient(135deg, #f1f5f9, #13cc9e)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Direct Contact
                </Typography>
                <Typography sx={{ color: alpha('#f1f5f9', 0.6), fontSize: '0.9rem' }}>
                  One click away from collaboration
                </Typography>
              </Box>

              <EmailCard onClick={handleEmailClick}>
                <IconContainer>
                  <MailOutlineIcon className='email-icon' sx={{ fontSize: '36px' }} />
                </IconContainer>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    sx={{
                      color: alpha('#13cc9e', 0.7),
                      fontSize: '0.8rem',
                      fontFamily: '"Fira Code", monospace',
                      mb: 0.5
                    }}
                  >
                    primary@contact
                  </Typography>
                  <Typography
                    sx={{
                      color: '#f1f5f9',
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      letterSpacing: '0.5px'
                    }}
                  >
                    soroslie75@gmail.com
                  </Typography>
                </Box>
                <SendIcon sx={{ color: alpha('#f1f5f9', 0.3), fontSize: '1.2rem' }} />
              </EmailCard>
            </Box>
          </CyberPanel>
        </ContactContainer>
      </Box>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
        `}
      </style>
    </FuturisticSection>
  )
}

export default ContactSection
