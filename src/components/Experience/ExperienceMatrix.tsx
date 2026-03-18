import React from 'react'
import { Box, Typography, Paper, Grid, Chip, alpha } from '@mui/material'
import { styled } from '@mui/material/styles'
import MyExperience from '../../constants/content/experience'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

const ExpertiseSection = styled(Box)(({ theme }) => ({
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

const SectionTitle = styled(Typography)(({ theme }) => ({
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

interface ExpertiseCardProps {
  $hasActiveProjects: boolean
}

const ExpertiseCard = styled(Paper, {
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
  // Centered border top by default
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '50px', // 50px width
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
      ? '0 10px 40px rgba(0, 200, 150, 0.2)'
      : '0 10px 40px rgba(220, 90, 90, 0.15)',
    '& .icon-wrapper': {
      color: $hasActiveProjects ? '#00cc99' : '#e08f8f',
      transform: 'scale(1.1)'
    },
    '& .category-title': {
      color: '#ffffff'
    },
    '&::after': {
      height: '4px', // Slightly larger on hover
      boxShadow: $hasActiveProjects ? '0 0 15px #00cc99' : '0 0 15px #e06f6f'
    },
    '&::before': {
      opacity: 1
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

interface CardHeaderProps {
  $hasActiveProjects: boolean
}

const CardHeader = styled(Box, {
  shouldForwardProp: (prop) => prop !== '$hasActiveProjects'
})<CardHeaderProps>(({ theme, $hasActiveProjects }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(2),
  paddingBottom: theme.spacing(1),
  borderBottom: `1px solid ${$hasActiveProjects ? 'rgba(0, 200, 150, 0.1)' : 'rgba(220, 90, 90, 0.2)'}`
}))

interface IconWrapperProps {
  $hasActiveProjects: boolean
}

const IconWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== '$hasActiveProjects'
})<IconWrapperProps>(({ $hasActiveProjects }) => ({
  fontSize: '1.8rem',
  color: $hasActiveProjects ? alpha('#00cc99', 0.7) : alpha('#e08f8f', 0.7),
  transition: 'all 0.3s ease-in-out',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0
}))

interface CategoryTitleProps {
  $hasActiveProjects: boolean
}

const CategoryTitle = styled(Typography, {
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
  transition: 'color 0.3s ease-in-out'
}))

const CategoryDot = styled(FiberManualRecordIcon)(({ theme }) => ({
  fontSize: '0.6rem',
  color: '#e08f8f',
  filter: 'drop-shadow(0 0 4px #e08f8f)',
  flexShrink: 0,
  marginLeft: theme.spacing(0.5)
}))

const ProjectListContainer = styled(Box)(({ theme }) => ({
  height: '225px',
  overflowY: 'auto',
  overflowX: 'hidden',
  width: '100%',
  paddingRight: theme.spacing(0.5),
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
    '&:hover': {
      background: alpha('#00cc99', 0.5)
    }
  }
}))

const ProjectList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  width: '100%',
  padding: 0,
  margin: 0
}))

interface ProjectItemProps {
  hasLink: boolean
  parentHasActive: boolean
}

const ProjectItem = styled(Box, {
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
  '&:hover': {
    backgroundColor: parentHasActive ? alpha('#00cc99', 0.05) : alpha('#e08f8f', 0.05),
    borderColor: parentHasActive ? alpha('#00cc99', 0.2) : alpha('#e08f8f', 0.2),
    color: '#ffffff',
    transform: 'translateX(4px)'
  },
  ...(!hasLink && {
    '&:hover': {
      backgroundColor: parentHasActive ? alpha('#00cc99', 0.05) : alpha('#e08f8f', 0.05),
      borderColor: parentHasActive ? alpha('#00cc99', 0.2) : alpha('#e08f8f', 0.2),
      color: '#ffffff',
      transform: 'translateX(4px)'
    }
  })
}))

interface StatusDotProps {
  isActive?: boolean
}

const StatusDot = styled(FiberManualRecordIcon, {
  shouldForwardProp: (prop) => prop !== 'isActive'
})<StatusDotProps>(({ isActive }) => ({
  fontSize: '0.6rem',
  color: isActive ? '#4caf50' : '#e08f8f',
  filter: isActive ? 'drop-shadow(0 0 4px #4caf50)' : 'drop-shadow(0 0 4px #e08f8f)',
  flexShrink: 0
}))

const ProjectName = styled(Typography)(({ theme }) => ({
  fontSize: '0.8rem',
  lineHeight: 1.4,
  flex: 1,
  color: '#ffffff'
}))

interface StatsChipProps {
  $hasActiveProjects: boolean
}

const StatsChip = styled(Chip, {
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
  '& .MuiChip-label': {
    padding: '2px 8px'
  }
}))

const ExperienceMatrix: React.FC = () => {
  // Calculate total projects from all categories
  const totalProjects = MyExperience.filter(
    (item) =>
      !item.name.toLowerCase().includes('automation') && !item.name.toLowerCase().includes('manual')
  ).reduce((acc, curr) => acc + curr.list.length, 0)

  // Calculate automation projects (WEB automation + API automation)
  const automationProjects = MyExperience.filter((item) =>
    item.name.toLowerCase().includes('automation')
  ).reduce((acc, curr) => acc + curr.list.length, 0)

  // Calculate actively handling projects (all projects with is_active = true)
  const activelyHandling = MyExperience.reduce((acc, curr) => {
    return acc + curr.list.filter((project) => project.is_active).length
  }, 0)

  const handleProjectClick = (link: string) => {
    if (link) {
      window.open(link, '_blank', 'noopener noreferrer')
    }
  }

  // Check if a category has any active projects
  const categoryHasActiveProjects = (category: (typeof MyExperience)[0]) => {
    return category.list.some((project) => project.is_active)
  }

  return (
    <ExpertiseSection>
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          pointerEvents: 'none'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '270px',
            height: '270px',
            background: 'radial-gradient(circle, rgba(0,200,150,0.03) 0%, transparent 70%)',
            borderRadius: '50%'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '10%',
            right: '5%',
            width: '360px',
            height: '360px',
            background: 'radial-gradient(circle, rgba(0,200,150,0.03) 0%, transparent 70%)',
            borderRadius: '50%'
          }}
        />
      </Box>

      {/* Header Stats */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <SectionTitle variant='h1' id='my-projects' >
          PROJECTS
        </SectionTitle>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mb: 5, flexWrap: 'wrap' }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant='h3'
              sx={{
                color: '#00cc99',
                fontWeight: 700,
                textShadow: '0 0 18px #00cc99',
                fontSize: '2rem'
              }}
            >
              {totalProjects}
            </Typography>
            <Typography sx={{ color: alpha('#ffffff', 0.7), fontSize: '0.8rem' }}>
              Projects Developed
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant='h3'
              sx={{
                color: '#00cc99',
                fontWeight: 700,
                textShadow: '0 0 18px #00cc99',
                fontSize: '2rem'
              }}
            >
              {automationProjects}
            </Typography>
            <Typography sx={{ color: alpha('#ffffff', 0.7), fontSize: '0.8rem' }}>
              Automation Developed
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant='h3'
              sx={{
                color: '#00cc99',
                fontWeight: 700,
                textShadow: '0 0 18px #00cc99',
                fontSize: '2rem'
              }}
            >
              {activelyHandling}
            </Typography>
            <Typography sx={{ color: alpha('#ffffff', 0.7), fontSize: '0.8rem' }}>
              Actively Handling
            </Typography>
          </Box>
        </Box>

        {/* Expertise Grid */}
        <Grid container spacing={2}>
          {MyExperience.map((item, index) => {
            const hasActive = categoryHasActiveProjects(item)

            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ExpertiseCard
                  elevation={0}
                  $hasActiveProjects={hasActive}
                  sx={{ mt: index >= 3 ? 5 : 0 }}
                >
                  <StatsChip
                    label={`${item.list.length} project${item.list.length !== 1 ? 's' : ''}`}
                    size='small'
                    $hasActiveProjects={hasActive}
                  />

                  <CardHeader $hasActiveProjects={hasActive}>
                    <IconWrapper className='icon-wrapper' $hasActiveProjects={hasActive}>
                      {item.icon}
                    </IconWrapper>
                    <CategoryTitle className='category-title' $hasActiveProjects={hasActive}>
                      {item.name}
                    </CategoryTitle>
                    {!hasActive && <CategoryDot />}
                  </CardHeader>

                  <ProjectListContainer>
                    <ProjectList>
                      {item.list.map((project, idx) => (
                        <ProjectItem
                          key={idx}
                          hasLink={!!project.link}
                          parentHasActive={hasActive}
                          onClick={() => handleProjectClick(project.link)}
                        >
                          <StatusDot isActive={project.is_active} />
                          <ProjectName>{project.name}</ProjectName>
                        </ProjectItem>
                      ))}
                    </ProjectList>
                  </ProjectListContainer>
                </ExpertiseCard>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </ExpertiseSection>
  )
}

export default ExperienceMatrix
