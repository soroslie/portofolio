import React from 'react'
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Chip,
  alpha,
  useTheme
} from '@mui/material'
import { styled } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'
import CodeIcon from '@mui/icons-material/Code'
import StorageIcon from '@mui/icons-material/Storage'
import BugReportIcon from '@mui/icons-material/BugReport'
import BuildIcon from '@mui/icons-material/Build'
import PersonIcon from '@mui/icons-material/Person'
import DescriptionIcon from '@mui/icons-material/Description'
import ScienceIcon from '@mui/icons-material/Science'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

export interface ProjectDetail {
  name: string
  role: string
  description: string
  fe_frameworks: string[]
  be_frameworks: string[]
  testing_tools: string[]
  testing_technique: string[]
  other_tools: string[]
  link?: string
  is_active?: boolean
}

interface DetailExperienceModalProps {
  open: boolean
  onClose: () => void
  project: ProjectDetail | null
}

// Styled components
const ModalPaper = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    background: 'rgba(10, 10, 20, 0.95)',
    backdropFilter: 'blur(20px)',
    border: `1px solid ${alpha('#00cc99', 0.2)}`,
    borderRadius: '24px',
    maxWidth: '600px',
    width: '100%',
    margin: theme.spacing(2),
    boxShadow: `0 20px 40px ${alpha('#000', 0.5)}, 0 0 30px ${alpha('#00cc99', 0.2)}`,
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '2px',
      background: 'linear-gradient(90deg, transparent, #00cc99, #7c3aed, transparent)',
    }
  }
}))

const ModalHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 3),
  borderBottom: `1px solid ${alpha('#00cc99', 0.1)}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
}))

const CloseButton = styled(IconButton)({
  color: alpha('#fff', 0.6),
  transition: 'all 0.2s ease',
  '&:hover': {
    color: '#00cc99',
    transform: 'rotate(90deg)',
    background: alpha('#00cc99', 0.1),
  }
})

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#00cc99',
  fontSize: '0.85rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '1px',
  marginBottom: theme.spacing(1.5),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  '& svg': {
    fontSize: '1.2rem',
  }
}))

const InfoChip = styled(Chip)({
  margin: '4px',
  background: alpha('#00cc99', 0.08),
  border: `1px solid ${alpha('#00cc99', 0.2)}`,
  color: '#f1f5f9',
  fontSize: '0.8rem',
  '&:hover': {
    background: alpha('#00cc99', 0.15),
    borderColor: '#00cc99',
  }
})

const ActiveBadge = styled(Box)({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  padding: '4px 12px',
  background: alpha('#4caf50', 0.1),
  border: `1px solid ${alpha('#4caf50', 0.3)}`,
  borderRadius: '20px',
  color: '#4caf50',
  fontSize: '0.7rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  '&::before': {
    content: '""',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#4caf50',
    boxShadow: '0 0 10px #4caf50',
  }
})

const DetailExperienceModal: React.FC<DetailExperienceModalProps> = ({
  open,
  onClose,
  project
}) => {
  const theme = useTheme()

  if (!project) return null

  const hasData = {
    fe: project.fe_frameworks && project.fe_frameworks.length > 0,
    be: project.be_frameworks && project.be_frameworks.length > 0,
    testing: project.testing_tools && project.testing_tools.length > 0,
    techniques: project.testing_technique && project.testing_technique.length > 0,
    other: project.other_tools && project.other_tools.length > 0
  }

  const handleLinkClick = () => {
    if (project.link) {
      window.open(project.link, '_blank', 'noopener noreferrer')
    }
  }

  return (
    <ModalPaper
      open={open}
      onClose={onClose}
      maxWidth="md"
      disableScrollLock={false}
      BackdropProps={{
        sx: {
          background: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(5px)',
        }
      }}
    >
      <ModalHeader>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, maxWidth: '80%' }}>
          <Typography
            variant="h6"
            sx={{
              color: '#f1f5f9',
              fontWeight: 700,
              fontSize: '1.2rem',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}
          >
            {project.name}
          </Typography>
          {project.is_active && <ActiveBadge>Active</ActiveBadge>}
        </Box>
        <CloseButton onClick={onClose} size="small">
          <CloseIcon />
        </CloseButton>
      </ModalHeader>

      <DialogContent sx={{ padding: theme.spacing(3) }}>
        {/* Role */}
        {project.role && (
          <Box sx={{ mb: 3 }}>
            <SectionTitle>
              <PersonIcon /> Role
            </SectionTitle>
            <Typography
              sx={{
                color: '#00cc99',
                fontSize: '1.1rem',
                fontWeight: 600,
                background: alpha('#00cc99', 0.05),
                padding: '8px 16px',
                borderRadius: '8px',
                border: `1px solid ${alpha('#00cc99', 0.1)}`,
                display: 'inline-block'
              }}
            >
              {project.role}
            </Typography>
          </Box>
        )}

        {/* Description */}
        {project.description && (
          <Box sx={{ mb: 3 }}>
            <SectionTitle>
              <DescriptionIcon /> Description
            </SectionTitle>
            <Typography
              sx={{
                color: alpha('#f1f5f9', 0.9),
                fontSize: '0.95rem',
                lineHeight: 1.8,
                background: alpha('#fff', 0.02),
                padding: '16px',
                borderRadius: '12px',
                border: `1px solid ${alpha('#00cc99', 0.1)}`,
              }}
            >
              {project.description}
            </Typography>
          </Box>
        )}

        {/* Tech Stack Grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mb: 2 }}>
          {/* Frontend Frameworks */}
          {hasData.fe && (
            <Box sx={{ mb: 2 }}>
              <SectionTitle>
                <CodeIcon /> Frontend
              </SectionTitle>
              <Box>
                {project.fe_frameworks.map((item, idx) => (
                  <InfoChip key={`fe-${idx}`} label={item} size="small" />
                ))}
              </Box>
            </Box>
          )}

          {/* Backend Frameworks */}
          {hasData.be && (
            <Box sx={{ mb: 2 }}>
              <SectionTitle>
                <StorageIcon /> Backend
              </SectionTitle>
              <Box>
                {project.be_frameworks.map((item, idx) => (
                  <InfoChip key={`be-${idx}`} label={item} size="small" />
                ))}
              </Box>
            </Box>
          )}
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          {/* Testing Tools */}
          {hasData.testing && (
            <Box sx={{ mb: 2 }}>
              <SectionTitle>
                <BugReportIcon /> Testing Tools
              </SectionTitle>
              <Box>
                {project.testing_tools.map((item, idx) => (
                  <InfoChip key={`test-${idx}`} label={item} size="small" />
                ))}
              </Box>
            </Box>
          )}

          {/* Testing Techniques */}
          {hasData.techniques && (
            <Box sx={{ mb: 2 }}>
              <SectionTitle>
                <ScienceIcon /> Techniques
              </SectionTitle>
              <Box>
                {project.testing_technique.map((item, idx) => (
                  <InfoChip key={`tech-${idx}`} label={item} size="small" />
                ))}
              </Box>
            </Box>
          )}
        </Box>

        {/* Other Tools */}
        {hasData.other && (
          <Box sx={{ mb: 3 }}>
            <SectionTitle>
              <BuildIcon /> Other Tools
            </SectionTitle>
            <Box>
              {project.other_tools.map((item, idx) => (
                <InfoChip key={`other-${idx}`} label={item} size="small" />
              ))}
            </Box>
          </Box>
        )}

        {/* Link */}
        {project.link && (
          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Typography
              component="span"
              onClick={handleLinkClick}
              sx={{
                color: '#00cc99',
                fontSize: '0.85rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                padding: '8px 20px',
                borderRadius: '30px',
                border: `1px solid ${alpha('#00cc99', 0.3)}`,
                transition: 'all 0.2s ease',
                cursor: 'pointer',
                '&:hover': {
                  background: alpha('#00cc99', 0.1),
                  borderColor: '#00cc99',
                  transform: 'translateY(-2px)',
                  boxShadow: `0 5px 15px ${alpha('#00cc99', 0.3)}`,
                }
              }}
            >
              <OpenInNewIcon sx={{ fontSize: '1rem' }} />
              Visit Project
            </Typography>
          </Box>
        )}
      </DialogContent>
    </ModalPaper>
  )
}

export default DetailExperienceModal