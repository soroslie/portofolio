export const MyFrammer = {
  visible: {
    opacity: 1,
    scale: 1
  },
  hidden: { opacity: 0, scale: 0 },
  left: { width: '0%' },
  right: {
    width: '100%',
    transition: {
      duration: 0.5,
      staggerChildren: 0.5
    }
  }
}

export const FrammerOpacity = {
  visible: {
    opacity: 1,
    transition: {
      duration: 1
    }
  },
  hidden: {
    opacity: 0
  }
}

export const FrammerChip = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.3
    }
  }
}

export const FrammerSentences = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1
    }
  }
}

export const FrammerLetter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0
  }
}

export const FrammerSkillPin = {
  scale: { scale: 1.2 },
  rotate0: { rotate: 0 },
  rotate8: { rotate: 8 },
  rotate15: { rotate: 15 },
  rotateN16: { rotate: -16 },
  scaleHover: { scale: 1.2 }
}
