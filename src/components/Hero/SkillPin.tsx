import { motion } from 'framer-motion'
import { FrammerSkillPin } from '../../utils/framer'

const SkillPin = ({ children, ...props }: any) => (
  <motion.div variants={FrammerSkillPin} {...props}>
    {children}
  </motion.div>
)

export default SkillPin
