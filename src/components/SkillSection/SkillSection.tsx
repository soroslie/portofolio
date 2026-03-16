import React from 'react'
import { Box, Typography, Grid, Paper, Stack, useTheme, useMediaQuery } from '@mui/material'
import SkillChip from './SkillChip'
import { MySkill } from '../../constants/resume/skill'

interface SkillSectionProps {
  title?: string
}

const SkillSection: React.FC<SkillSectionProps> = ({ title = 'My Skills' }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const glowColor = 'rgb(19, 204, 158)'

  return (
    <Box
      sx={{
        maxWidth: 1200,
        margin: 'auto',
        p: { xs: 5, sm: 8, md: 6 },
        bgcolor: '#000000'
      }}
    >
      <Typography
        variant='h4'
        gutterBottom
        sx={{
          mb: { xs: 3, sm: 4 },
          textAlign: 'center',
          color: glowColor,
          fontWeight: 600,
          letterSpacing: '1px',
          textTransform: 'uppercase',
          textShadow: `0 0 10px ${glowColor}40`,
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
        }}
      >
        {title}
      </Typography>

      <Grid 
        container 
        spacing={{ xs: 2, sm: 2 }} 
        sx={{
          rowGap: { xs: 2, sm: 4 } 
        }}
      >
        {MySkill.map((category) => (
          <Grid item xs={12} sm={6} key={category.name}>
            <Paper
              elevation={8}
              sx={{
                p: { xs: 2, sm: 2, md: 2 },
                height: '100%',
                bgcolor: '#0a0a0a',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                borderRadius: 4,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: isMobile ? 'none' : 'translateY(-6px)',
                  boxShadow: `0 12px 30px ${glowColor}40, 0 4px 20px ${glowColor}20`,
                  border: `1px solid ${glowColor}80`,
                  bgcolor: '#121212',
                  borderRadius: 4.5,
                  // Target the title inside the card on card hover
                  '& .category-title': {
                    color: glowColor
                  }
                }
              }}
            >
              <Typography
                variant='h6'
                className='category-title' // Add class name to target on hover
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                  color: '#ffffff',
                  transition: 'color 0.3s ease'
                }}
              >
                {category.name}
              </Typography>

              <Stack
                direction='row'
                spacing={1}
                flexWrap='wrap'
                useFlexGap
                sx={{
                  '& > *': {
                    mb: 1
                  }
                }}
              >
                {category.list.map((skill) => (
                  <SkillChip key={skill.name} skill={skill.name} rating={skill.level} />
                ))}
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default SkillSection