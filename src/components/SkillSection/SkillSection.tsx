import React from 'react'
import { Box, Typography, Paper, useTheme, useMediaQuery } from '@mui/material'
import { motion } from 'framer-motion'
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

  // Wrap Paper with motion component
  const MotionPaper = motion(Paper)

  return (
    <Box id='my-skill' sx={styles.sectionContainer}>
      <Box sx={styles.innerContainer}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={styles.titleVariants}
        >
          <Typography variant='h4' sx={styles.sectionTitle(glowColor)}>
            {title}
          </Typography>
        </motion.div>

        {!isMobile ? (
          <motion.div
            variants={styles.containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            {/* First Row */}
            <motion.div variants={styles.itemVariants}>
              <Box sx={styles.rowContainer}>
                {firstRow.map((category) => {
                  const IconComponent = category.icon
                  const categoryColor = category.color
                  const lighterBgColor = lightenColor(categoryColor, 0.8)

                  return (
                    <Box key={category.name} sx={styles.cardWrapper}>
                      <MotionPaper
                        elevation={8}
                        sx={styles.paperStyles(categoryColor)}
                        whileHover={styles.paperHoverEffect}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                      >
                        <Box sx={styles.topGradient(categoryColor)} />

                        {/* Centered Icon */}
                        <motion.div
                          variants={styles.iconVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false }}
                          transition={{ delay: 0.1 }}
                        >
                          <Box sx={styles.iconContainer(lighterBgColor, categoryColor)}>
                            <IconComponent sx={{ fontSize: 30 }} />
                          </Box>
                        </motion.div>

                        {/* Centered Title */}
                        <motion.div
                          variants={styles.contentVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false }}
                        >
                          <Typography variant='h6' sx={styles.categoryTitle}>
                            {category.name}
                          </Typography>
                        </motion.div>

                        {/* Left-aligned List */}
                        <motion.div
                          variants={styles.chipContainerVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false }}
                        >
                          <Box sx={styles.chipContainer}>
                            {category.list.map((skill) => (
                              <motion.div
                                key={skill.name}
                                variants={styles.chipVariants}
                                whileHover={styles.chipHoverEffect}
                              >
                                <SkillChip skill={skill.name} rating={skill.level} />
                              </motion.div>
                            ))}
                          </Box>
                        </motion.div>
                      </MotionPaper>
                    </Box>
                  )
                })}
              </Box>
            </motion.div>

            {/* Second Row */}
            <motion.div variants={styles.itemVariants}>
              <Box sx={styles.lastRowContainer}>
                {secondRow.map((category) => {
                  const IconComponent = category.icon
                  const categoryColor = category.color
                  const lighterBgColor = lightenColor(categoryColor, 0.8)

                  return (
                    <Box key={category.name} sx={styles.cardWrapper}>
                      <MotionPaper
                        elevation={8}
                        sx={styles.paperStyles(categoryColor)}
                        whileHover={styles.paperHoverEffect}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                      >
                        <Box sx={styles.topGradient(categoryColor)} />

                        {/* Centered Icon */}
                        <motion.div
                          variants={styles.iconVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false }}
                          transition={{ delay: 0.1 }}
                        >
                          <Box sx={styles.iconContainer(lighterBgColor, categoryColor)}>
                            <IconComponent sx={{ fontSize: 30 }} />
                          </Box>
                        </motion.div>

                        {/* Centered Title */}
                        <motion.div
                          variants={styles.contentVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false }}
                        >
                          <Typography variant='h6' sx={styles.categoryTitle}>
                            {category.name}
                          </Typography>
                        </motion.div>

                        {/* Left-aligned List */}
                        <motion.div
                          variants={styles.chipContainerVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false }}
                        >
                          <Box sx={styles.chipContainer}>
                            {category.list.map((skill) => (
                              <motion.div
                                key={skill.name}
                                variants={styles.chipVariants}
                                whileHover={styles.chipHoverEffect}
                              >
                                <SkillChip skill={skill.name} rating={skill.level} />
                              </motion.div>
                            ))}
                          </Box>
                        </motion.div>
                      </MotionPaper>
                    </Box>
                  )
                })}
              </Box>
            </motion.div>
          </motion.div>
        ) : (
          // Mobile view
          <motion.div
            variants={styles.containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            <Box sx={styles.mobileContainer}>
              {MySkill.map((category) => {
                const IconComponent = category.icon
                const categoryColor = category.color
                const lighterBgColor = lightenColor(categoryColor, 0.8)

                return (
                  <motion.div
                    key={category.name}
                    variants={styles.itemVariants}
                    whileHover={styles.paperHoverEffect}
                  >
                    <Paper
                      elevation={8}
                      sx={styles.mobilePaperStyles()}
                    >
                      <Box sx={styles.topGradient(categoryColor)} />

                      {/* Centered Icon */}
                      <motion.div
                        variants={styles.iconVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        transition={{ delay: 0.1 }}
                      >
                        <Box sx={styles.mobileIconContainer(lighterBgColor, categoryColor)}>
                          <IconComponent sx={{ fontSize: 28 }} />
                        </Box>
                      </motion.div>

                      {/* Centered Title */}
                      <motion.div
                        variants={styles.contentVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                      >
                        <Typography variant='h6' sx={styles.mobileCategoryTitle}>
                          {category.name}
                        </Typography>
                      </motion.div>

                      {/* Left-aligned List */}
                      <motion.div
                        variants={styles.chipContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                      >
                        <Box sx={styles.chipContainer}>
                          {category.list.map((skill) => (
                            <motion.div
                              key={skill.name}
                              variants={styles.chipVariants}
                              whileHover={styles.chipHoverEffect}
                            >
                              <SkillChip skill={skill.name} rating={skill.level} />
                            </motion.div>
                          ))}
                        </Box>
                      </motion.div>
                    </Paper>
                  </motion.div>
                )
              })}
            </Box>
          </motion.div>
        )}
      </Box>
    </Box>
  )
}

export default SkillSection