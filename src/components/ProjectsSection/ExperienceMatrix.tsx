import React, { useState } from 'react'
import { Box, Typography, Paper, useTheme, useMediaQuery } from '@mui/material'
import { motion } from 'framer-motion'
import MyExperience from '../../constants/content/experience'
import DetailExperienceModal, { ProjectDetail } from './ExperienceDetailModal'
import { ProductionBugFound } from '../../constants/resume/achivement'
import * as styles from './ExperienceMatrix.style'

const MotionPaper = motion(Paper)
const MotionBox = motion(Box)

const ExperienceMatrix: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.down('md'))
  const glowColor = '#00cc99'

  // Calculate stats
  const totalProjects = MyExperience.filter(
    (item) =>
      !item.name.toLowerCase().includes('automation') && !item.name.toLowerCase().includes('manual')
  ).reduce((acc, curr) => acc + curr.list.length, 0)

  const automationProjects = MyExperience.filter((item) =>
    item.name.toLowerCase().includes('automation')
  ).reduce((acc, curr) => acc + curr.list.length, 0)

  const activelyHandling = MyExperience.reduce((acc, curr) => {
    return acc + curr.list.filter((project) => project.is_active).length
  }, 0)

  const prodBugsFound = ProductionBugFound.length

  const handleProjectClick = (event: React.MouseEvent<HTMLElement>, project: any) => {
    event.stopPropagation()
    setSelectedProject({
      name: project.name,
      role: project.role || '',
      description: project.description || '',
      fe_frameworks: project.fe_frameworks || [],
      be_frameworks: project.be_frameworks || [],
      testing_tools: project.testing_tools || [],
      testing_technique: project.testing_technique || [],
      other_tools: project.other_tools || [],
      link: project.link,
      is_active: project.is_active
    })
    setModalOpen(true)
  }

  const handleModalClose = () => {
    setModalOpen(false)
    setSelectedProject(null)
  }

  const categoryHasActiveProjects = (category: (typeof MyExperience)[0]) => {
    return category.list.some((project) => project.is_active)
  }

  // Determine number of columns based on screen size
  const getColumns = () => {
    if (isMobile) return 1
    if (isTablet) return 2
    return 3
  }

  const columns = getColumns()

  const renderCard = (item: any, index: number) => {
    const hasActive = categoryHasActiveProjects(item)

    return (
      <MotionBox
        key={item.name}
        sx={styles.cardItem(columns)}
        variants={styles.itemVariants}
        custom={index}
      >
        <MotionPaper
          elevation={8}
          sx={styles.paperStyles(hasActive)}
          whileHover={styles.paperHoverEffect}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
        >
          <Box sx={styles.topGradient(hasActive)} />

          {/* Stats Chip */}
          <Box sx={styles.statsChip(hasActive)}>
            {`${item.list.length} project${item.list.length !== 1 ? 's' : ''}`}
          </Box>

          {/* Header */}
          <Box sx={styles.cardHeader}>
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
              <Box sx={styles.iconWrapper(hasActive)}>{item.icon}</Box>
            </motion.div>
            <Typography sx={styles.categoryTitle}>{item.name}</Typography>
            {!hasActive && <Box component='span' sx={styles.categoryDot} />}
          </Box>

          {/* Project List */}
          <Box sx={styles.projectListContainer}>
            <Box sx={styles.projectList}>
              {item.list.map((project: any, idx: number) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 8 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  style={{ width: '100%' }}
                >
                  <Box
                    sx={styles.projectItem(!!project.link, hasActive, project.is_active)}
                    onClick={(e) => handleProjectClick(e, project)}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1 }}>
                      {/* Status Dot - Green for active, Red for inactive */}
                      <Box component='span' sx={styles.statusDot(project.is_active)}>
                        ●
                      </Box>
                      <Typography sx={styles.projectName}>{project.name}</Typography>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </MotionPaper>
      </MotionBox>
    )
  }

  return (
    <Box sx={styles.sectionContainer}>
      <Box sx={styles.innerContainer}>
        {/* Title */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false, amount: 0.3 }}
          variants={styles.titleVariants}
        >
          <Typography variant='h4' sx={styles.sectionTitle(glowColor)}>
            PROJECTS
          </Typography>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={styles.containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false, amount: 0.3 }}
        >
          <Box sx={styles.statsContainer}>
            {[
              { value: totalProjects, label: 'Projects Developed' },
              { value: automationProjects, label: 'Automation Developed' },
              { value: activelyHandling, label: 'Actively Handling' },
              { value: prodBugsFound, label: 'PROD Bug Found' }
            ].map((stat, index) => (
              <MotionBox
                key={index}
                sx={styles.statItem}
                variants={styles.statVariants}
                whileHover={{
                  scale: 1.1,
                  transition: { type: 'spring', stiffness: 400, damping: 17 }
                }}
              >
                <motion.div
                  animate={{
                    textShadow: ['0 0 18px #00cc99', '0 0 30px #00cc99', '0 0 18px #00cc99']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  <Typography sx={styles.statValue}>{stat.value}</Typography>
                </motion.div>
                <Typography sx={styles.statLabel}>{stat.label}</Typography>
              </MotionBox>
            ))}
          </Box>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={styles.containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false, amount: 0.1 }}
        >
          <Box sx={styles.gridContainer}>
            {MyExperience.map((item, index) => renderCard(item, index))}
          </Box>
        </motion.div>
      </Box>

      {/* Detail Modal */}
      <DetailExperienceModal
        open={modalOpen}
        onClose={handleModalClose}
        project={selectedProject}
      />
    </Box>
  )
}

export default ExperienceMatrix
