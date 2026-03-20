import React, { useRef } from 'react'
import { Box, Typography, Grid, alpha } from '@mui/material'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import MyExperience from '../../constants/content/experience'
import DetailExperienceModal, { ProjectDetail } from './ExperienceDetailModal'
import {
  ExpertiseSection,
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

// Create motion components
const MotionBox = motion(Box)
const MotionGrid = motion(Grid)

const ExperienceMatrix: React.FC = () => {
  const [selectedProject, setSelectedProject] = React.useState<ProjectDetail | null>(null)
  const [modalOpen, setModalOpen] = React.useState(false)
  
  // Refs for scroll animations
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  // Check if elements are in view
  const isSectionInView = useInView(sectionRef, { once: false, amount: 0.3 })
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.5 })
  const isGridInView = useInView(gridRef, { once: false, amount: 0.1 })

  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Transform values based on scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.8, 0.3])
  
  // For title - we'll use a simple opacity transform without MotionValue in sx
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

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

  // Check if a category has any active projects
  const categoryHasActiveProjects = (category: (typeof MyExperience)[0]) => {
    return category.list.some((project) => project.is_active)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
    exit: {
      y: -30,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  }

  const statVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200
      }
    },
    exit: {
      scale: 0.8,
      opacity: 0
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: custom * 0.1
      }
    }),
    exit: {
      opacity: 0,
      y: 30,
      scale: 0.95,
      transition: {
        duration: 0.3
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 300
      }
    }
  }

  const projectItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: custom * 0.05
      }
    }),
    hover: {
      x: 8,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 300
      }
    }
  }

  return (
    <ExpertiseSection ref={sectionRef}>
      {/* Background decorative elements with parallax */}
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
        <motion.div
          style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '270px',
            height: '270px',
            background: 'radial-gradient(circle, rgba(0,200,150,0.03) 0%, transparent 70%)',
            borderRadius: '50%',
            y: backgroundY,
            opacity: backgroundOpacity
          }}
          animate={{
            scale: isSectionInView ? [1, 1.2, 1] : 1,
            rotate: isSectionInView ? [0, 180, 360] : 0,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '5%',
            width: '360px',
            height: '360px',
            background: 'radial-gradient(circle, rgba(0,200,150,0.03) 0%, transparent 70%)',
            borderRadius: '50%',
            y: useTransform(scrollYProgress, [0, 1], ['0%', '-20%']),
            opacity: backgroundOpacity
          }}
          animate={{
            scale: isSectionInView ? [1, 1.3, 1] : 1,
            rotate: isSectionInView ? [0, -180, -360] : 0,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </Box>

      {/* Header Stats */}
      <MotionBox
        ref={statsRef}
        sx={{ position: 'relative', zIndex: 1 }}
        variants={containerVariants}
        initial="hidden"
        animate={isStatsInView ? "visible" : "exit"}
      >
        {/* Title with scroll-based opacity */}
        <motion.h1
          ref={titleRef}
          style={{
            color: '#ffffff',
            fontSize: '2.7rem',
            fontWeight: 700,
            marginBottom: '40px',
            textAlign: 'center',
            position: 'relative',
            opacity: titleOpacity
          }}
        >
          PROJECTS
          <motion.div
            style={{
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
            }}
          />
        </motion.h1>

        <MotionBox
          sx={{ display: 'flex', justifyContent: 'center', gap: 4, mb: 5, flexWrap: 'wrap' }}
          variants={containerVariants}
        >
          {[
            { value: totalProjects, label: 'Projects Developed' },
            { value: automationProjects, label: 'Automation Developed' },
            { value: activelyHandling, label: 'Actively Handling' }
          ].map((stat, index) => (
            <MotionBox
              key={index}
              sx={{ textAlign: 'center' }}
              variants={statVariants}
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", damping: 10 }
              }}
            >
              <motion.div
                animate={{
                  textShadow: isStatsInView 
                    ? ['0 0 18px #00cc99', '0 0 30px #00cc99', '0 0 18px #00cc99']
                    : '0 0 18px #00cc99'
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Typography
                  variant='h3'
                  sx={{
                    color: '#00cc99',
                    fontWeight: 700,
                    fontSize: '2rem'
                  }}
                >
                  {stat.value}
                </Typography>
              </motion.div>
              <Typography sx={{ color: alpha('#ffffff', 0.7), fontSize: '0.8rem' }}>
                {stat.label}
              </Typography>
            </MotionBox>
          ))}
        </MotionBox>

        {/* Expertise Grid */}
        <MotionGrid
          ref={gridRef}
          container
          spacing={2}
          variants={containerVariants}
          initial="hidden"
          animate={isGridInView ? "visible" : "exit"}
        >
          {MyExperience.map((item, index) => {
            const hasActive = categoryHasActiveProjects(item)

            return (
              <MotionGrid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                variants={itemVariants}
                custom={index}
              >
                <motion.div
                  variants={cardVariants}
                  custom={index}
                  whileHover="hover"
                  initial="hidden"
                  animate={isGridInView ? "visible" : "exit"}
                >
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
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <IconWrapper className='icon-wrapper' $hasActiveProjects={hasActive}>
                          {item.icon}
                        </IconWrapper>
                      </motion.div>
                      <CategoryTitle className='category-title' $hasActiveProjects={hasActive}>
                        {item.name}
                      </CategoryTitle>
                      {!hasActive && <CategoryDot />}
                    </CardHeader>

                    <ProjectListContainer>
                      <ProjectList>
                        {item.list.map((project, idx) => (
                          <motion.div
                            key={idx}
                            variants={projectItemVariants}
                            custom={idx}
                            whileHover="hover"
                          >
                            <ProjectItem
                              hasLink={!!project.link}
                              parentHasActive={hasActive}
                              onClick={(e) => handleProjectClick(e, project)}
                              sx={{
                                position: 'relative',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                display: 'flex',
                                alignItems: 'center'
                              }}
                            >
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1 }}>
                                <motion.div
                                  animate={{
                                    scale: project.is_active ? [1, 1.2, 1] : 1,
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: project.is_active ? Infinity : 0,
                                    ease: "easeInOut"
                                  }}
                                >
                                  <StatusDot isActive={project.is_active} />
                                </motion.div>
                                <ProjectName>{project.name}</ProjectName>
                              </Box>
                            </ProjectItem>
                          </motion.div>
                        ))}
                      </ProjectList>
                    </ProjectListContainer>
                  </ExpertiseCard>
                </motion.div>
              </MotionGrid>
            )
          })}
        </MotionGrid>
      </MotionBox>

      {/* Detail Modal */}
      <DetailExperienceModal
        open={modalOpen}
        onClose={handleModalClose}
        project={selectedProject}
      />
    </ExpertiseSection>
  )
}

export default ExperienceMatrix