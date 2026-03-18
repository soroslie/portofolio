import React from 'react'
import { Box, Typography, Grid, alpha } from '@mui/material'
import MyExperience from '../../constants/content/experience'
import {
  ExpertiseSection,
  SectionTitle,
  ExpertiseCard,
  CardHeader,
  IconWrapper,
  CategoryTitle,
  CategoryDot,
  ProjectListContainer,
  ProjectList,
  ProjectItem,
  StatusDot,
  ProjectName,
  StatsChip
} from './ExperienceMatrix.style'

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
        <SectionTitle variant='h1' id='my-projects'>
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