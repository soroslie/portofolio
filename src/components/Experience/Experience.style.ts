import styled from 'styled-components'
import ColorPalletes from '../../utils/color'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  color: ${ColorPalletes.whitePrimary};
  height: 100%;
  margin-bottom: 2rem;
  display: flex;
  overflow: visible;
  width: 100%;
  
`
