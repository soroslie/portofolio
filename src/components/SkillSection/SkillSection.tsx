import React from 'react'
import { Box, Typography, Paper, useTheme, useMediaQuery } from '@mui/material'
import SkillChip from './SkillChip'
import { MySkill } from '../../constants/resume/skill'

interface SkillSectionProps {
  title?: string
}

const lightenColor = (color: string, percent: number): string => {
  const hex = color.replace('#', '')
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  const lightenedR = Math.min(255, Math.floor(r + (255 - r) * percent))
  const lightenedG = Math.min(255, Math.floor(g + (255 - g) * percent))
  const lightenedB = Math.min(255, Math.floor(b + (255 - b) * percent))

  return `#${lightenedR.toString(16).padStart(2, '0')}${lightenedG.toString(16).padStart(2, '0')}${lightenedB.toString(16).padStart(2, '0')}`
}

const SkillSection: React.FC<SkillSectionProps> = ({ title = 'My Skills' }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const glowColor = 'rgb(19, 204, 158)'

  const firstRow = MySkill.slice(0, 2)
  const secondRow = MySkill.slice(2, 4)

  return (
    <Box
      id='my-skill'
      sx={{
        width: '100%',
        bgcolor: '#000000',
        py: { xs: 4, sm: 6, md: 8 }
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 4 }
        }}
      >
        <Typography
          variant='h4'
          sx={{
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
          }}
        >
          {title}
        </Typography>

        {!isMobile ? (
          <Box>
            <Box sx={{ display: 'flex', gap: 4, mb: 4 }}>
              {firstRow.map((category) => {
                const IconComponent = category.icon
                const categoryColor = category.color
                const lighterBgColor = lightenColor(categoryColor, 0.8)

                return (
                  <Box key={category.name} sx={{ width: '50%' }}>
                    <Paper
                      elevation={8}
                      sx={{
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
                        '&:hover': {
                          transform: 'translateY(-6px)',
                          boxShadow: `0 12px 30px ${categoryColor}40, 0 4px 20px ${categoryColor}20`,
                          border: `1px solid ${categoryColor}80`,
                          bgcolor: '#121212'
                        }
                      }}
                    >
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '3px',
                          background: `linear-gradient(90deg, ${categoryColor}, transparent)`
                        }}
                      />

                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: 3,
                          bgcolor: lighterBgColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: categoryColor,
                          mb: 2.5,
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        <IconComponent sx={{ fontSize: 30 }} />
                      </Box>

                      <Typography
                        variant='h6'
                        sx={{
                          fontWeight: 700,
                          mb: 2.5,
                          fontSize: '1.2rem',
                          color: '#f1f5f9'
                        }}
                      >
                        {category.name}
                      </Typography>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {category.list.map((skill) => (
                          <SkillChip key={skill.name} skill={skill.name} rating={skill.level} />
                        ))}
                      </Box>
                    </Paper>
                  </Box>
                )
              })}
            </Box>

            <Box sx={{ display: 'flex', gap: 4 }}>
              {secondRow.map((category) => {
                const IconComponent = category.icon
                const categoryColor = category.color
                const lighterBgColor = lightenColor(categoryColor, 0.8)

                return (
                  <Box key={category.name} sx={{ width: '50%' }}>
                    <Paper
                      elevation={8}
                      sx={{
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
                        '&:hover': {
                          transform: 'translateY(-6px)',
                          boxShadow: `0 12px 30px ${categoryColor}40, 0 4px 20px ${categoryColor}20`,
                          border: `1px solid ${categoryColor}80`,
                          bgcolor: '#121212'
                        }
                      }}
                    >
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '3px',
                          background: `linear-gradient(90deg, ${categoryColor}, transparent)`
                        }}
                      />

                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: 3,
                          bgcolor: lighterBgColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: categoryColor,
                          mb: 2.5,
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        <IconComponent sx={{ fontSize: 30 }} />
                      </Box>

                      <Typography
                        variant='h6'
                        sx={{
                          fontWeight: 700,
                          mb: 2.5,
                          fontSize: '1.2rem',
                          color: '#f1f5f9'
                        }}
                      >
                        {category.name}
                      </Typography>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {category.list.map((skill) => (
                          <SkillChip key={skill.name} skill={skill.name} rating={skill.level} />
                        ))}
                      </Box>
                    </Paper>
                  </Box>
                )
              })}
            </Box>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {MySkill.map((category) => {
              const IconComponent = category.icon
              const categoryColor = category.color
              const lighterBgColor = lightenColor(categoryColor, 0.8)

              return (
                <Paper
                  key={category.name}
                  elevation={8}
                  sx={{
                    p: 3,
                    minHeight: 260,
                    bgcolor: '#0a0a0a',
                    color: '#ffffff',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                    borderRadius: 4,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: `linear-gradient(90deg, ${categoryColor}, transparent)`
                    }}
                  />

                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: 3,
                      bgcolor: lighterBgColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: categoryColor,
                      mb: 2,
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <IconComponent sx={{ fontSize: 28 }} />
                  </Box>

                  <Typography
                    variant='h6'
                    sx={{
                      fontWeight: 700,
                      mb: 2.5,
                      fontSize: '1.1rem',
                      color: '#f1f5f9'
                    }}
                  >
                    {category.name}
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {category.list.map((skill) => (
                      <SkillChip key={skill.name} skill={skill.name} rating={skill.level} />
                    ))}
                  </Box>
                </Paper>
              )
            })}
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default SkillSection