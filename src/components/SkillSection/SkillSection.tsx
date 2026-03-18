import React from 'react'
import { Box, Typography, Paper, useTheme, useMediaQuery } from '@mui/material'
import SkillChip from './SkillChip'
import { MySkill } from '../../constants/resume/skill'
import * as styles from './SkillSection.style'

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
    <Box id='my-skill' sx={styles.sectionContainer}>
      <Box sx={styles.innerContainer}>
        <Typography variant='h4' sx={styles.sectionTitle(glowColor)}>
          {title}
        </Typography>

        {!isMobile ? (
          <Box>
            {/* First Row */}
            <Box sx={styles.rowContainer}>
              {firstRow.map((category) => {
                const IconComponent = category.icon
                const categoryColor = category.color
                const lighterBgColor = lightenColor(categoryColor, 0.8)

                return (
                  <Box key={category.name} sx={styles.cardWrapper}>
                    <Paper elevation={8} sx={styles.paperStyles(categoryColor, lighterBgColor)}>
                      <Box sx={styles.topGradient(categoryColor)} />

                      {/* Centered Icon */}
                      <Box sx={styles.iconContainer(lighterBgColor, categoryColor)}>
                        <IconComponent sx={{ fontSize: 30 }} />
                      </Box>

                      {/* Centered Title */}
                      <Typography variant='h6' sx={styles.categoryTitle}>
                        {category.name}
                      </Typography>

                      {/* Left-aligned List */}
                      <Box sx={styles.chipContainer}>
                        {category.list.map((skill) => (
                          <SkillChip key={skill.name} skill={skill.name} rating={skill.level} />
                        ))}
                      </Box>
                    </Paper>
                  </Box>
                )
              })}
            </Box>

            {/* Second Row */}
            <Box sx={styles.lastRowContainer}>
              {secondRow.map((category) => {
                const IconComponent = category.icon
                const categoryColor = category.color
                const lighterBgColor = lightenColor(categoryColor, 0.8)

                return (
                  <Box key={category.name} sx={styles.cardWrapper}>
                    <Paper elevation={8} sx={styles.paperStyles(categoryColor, lighterBgColor)}>
                      <Box sx={styles.topGradient(categoryColor)} />

                      {/* Centered Icon */}
                      <Box sx={styles.iconContainer(lighterBgColor, categoryColor)}>
                        <IconComponent sx={{ fontSize: 30 }} />
                      </Box>

                      {/* Centered Title */}
                      <Typography variant='h6' sx={styles.categoryTitle}>
                        {category.name}
                      </Typography>

                      {/* Left-aligned List */}
                      <Box sx={styles.chipContainer}>
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
          // Mobile view
          <Box sx={styles.mobileContainer}>
            {MySkill.map((category) => {
              const IconComponent = category.icon
              const categoryColor = category.color
              const lighterBgColor = lightenColor(categoryColor, 0.8)

              return (
                <Paper
                  key={category.name}
                  elevation={8}
                  sx={styles.mobilePaperStyles(categoryColor, lighterBgColor)}
                >
                  <Box sx={styles.topGradient(categoryColor)} />

                  {/* Centered Icon */}
                  <Box sx={styles.mobileIconContainer(lighterBgColor, categoryColor)}>
                    <IconComponent sx={{ fontSize: 28 }} />
                  </Box>

                  {/* Centered Title */}
                  <Typography variant='h6' sx={styles.mobileCategoryTitle}>
                    {category.name}
                  </Typography>

                  {/* Left-aligned List */}
                  <Box sx={styles.chipContainer}>
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