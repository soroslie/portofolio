import React from 'react'
import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import SendIcon from '@mui/icons-material/Send'
import CodeIcon from '@mui/icons-material/Code'
import TerminalIcon from '@mui/icons-material/Terminal'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import * as styles from './ContactSection.style'

// Create motion components
const MotionTerminalPanel = motion(styles.TerminalPanel)
const MotionCyberPanel = motion(styles.CyberPanel)
const MotionRoleChip = motion(styles.RoleChip)
const MotionEmailCard = motion(styles.EmailCard)
const MotionCodeSnippet = motion(styles.CodeSnippet)
const MotionFloatAnimation = motion(styles.FloatAnimation)
const MotionGradientText = motion(styles.GradientText)

const ContactSection: React.FC = () => {
  const roles = ['Sr QA Engineer', 'Automation Tester', 'Jr Project Manager', 'Jr Product Manager']

  const handleEmailClick = () => {
    window.location.href =
      'mailto:soroslie75@gmail.com?subject=Opportunity%20from%20Portfolio&body=Hi%20Alfian%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity...'
  }

  return (
    <styles.FuturisticSection id='my-contact'>
      <styles.GridBackground />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        <styles.GlowingOrb
          sx={{
            top: '-200px',
            left: '-100px',
            background: `radial-gradient(circle, rgba(19,204,158,0.12) 0%, rgba(124,58,237,0.08) 50%, transparent 80%)`
          }}
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <styles.GlowingOrb
          sx={{
            bottom: '-200px',
            right: '-100px',
            background: `radial-gradient(circle, rgba(124,58,237,0.12) 0%, rgba(19,204,158,0.08) 50%, transparent 80%)`
          }}
        />
      </motion.div>
      
      <styles.BinaryRain />

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <styles.SectionHeader>
          <motion.div
            variants={styles.titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <styles.Title>
              GET IN <span className='gradient'>TOUCH</span>
            </styles.Title>
          </motion.div>
        </styles.SectionHeader>

        <motion.div
          variants={styles.containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          <styles.ContactContainer>
            <MotionTerminalPanel
              variants={styles.panelVariants}
              viewport={{ once: false }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <TerminalIcon sx={{ color: '#13cc9e' }} />
                <Typography sx={{ color: '#7c3aed', fontFamily: '"Fira Code", monospace' }}>
                  ~/contact/opportunities
                </Typography>
              </Box>

              <MotionCodeSnippet
                variants={styles.codeSnippetVariants}
                viewport={{ once: false }}
              >
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
              </MotionCodeSnippet>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4 }}
              >
                <Typography
                  sx={{
                    color: 'rgba(241, 245, 249, 0.8)',
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
              </motion.div>

              <motion.div
                variants={styles.rolesContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 2 }}>
                  {roles.map((role, index) => (
                    <MotionRoleChip
                      key={index}
                      variants={styles.roleChipVariants}
                      viewport={{ once: false }}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: '0 5px 20px rgba(19, 204, 158, 0.4)',
                        transition: { type: "spring", stiffness: 400, damping: 10 }
                      }}
                    >
                      <CodeIcon sx={{ fontSize: '0.8rem' }} />
                      {role}
                    </MotionRoleChip>
                  ))}
                </Box>
              </motion.div>
            </MotionTerminalPanel>

            <MotionCyberPanel
              variants={styles.cyberPanelVariants}
              viewport={{ once: false }}
            >
              <Box sx={{ position: 'relative', zIndex: 2 }}>
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                  <MotionFloatAnimation
                    variants={styles.floatIconVariants}
                    viewport={{ once: false }}
                  >
                    📡
                  </MotionFloatAnimation>
                  
                  <MotionGradientText
                    variants={styles.titleVariants}
                    viewport={{ once: false }}
                  >
                    Direct Contact
                  </MotionGradientText>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3 }}
                  >
                    <Typography sx={{ color: 'rgba(241, 245, 249, 0.6)', fontSize: '0.9rem' }}>
                      One click away from collaboration
                    </Typography>
                  </motion.div>
                </Box>

                <MotionEmailCard
                  variants={styles.emailCardVariants}
                  viewport={{ once: false }}
                  onClick={handleEmailClick}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 20px 50px rgba(19, 204, 158, 0.4)',
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <styles.IconContainer>
                    <MailOutlineIcon className='email-icon' sx={{ fontSize: '36px' }} />
                  </styles.IconContainer>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        color: 'rgba(19, 204, 158, 0.7)',
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
                  <SendIcon sx={{ color: 'rgba(241, 245, 249, 0.3)', fontSize: '1.2rem' }} />
                </MotionEmailCard>
              </Box>
            </MotionCyberPanel>
          </styles.ContactContainer>
        </motion.div>
      </Box>
    </styles.FuturisticSection>
  )
}

export default ContactSection