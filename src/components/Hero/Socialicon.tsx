import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import ColorPalletes from '../../utils/color'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import QrCodeIcon from '@mui/icons-material/QrCode'
import QRCodeImage from '../../assets/images/vcard-soros.png'

// Styled Components
const SocialContainer = styled(motion.div)`
  display: flex;
  gap: 1.2rem;
  margin: 0.5rem 0 1rem 0;
  flex-wrap: wrap;
`

// Base button styles
const IconButtonBase = styled(motion.div)`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: translateY(-6px);
    box-shadow:
      0 15px 25px currentColor,
      0 8px 16px rgba(0, 0, 0, 0.4);
  }

  svg {
    width: 32px;
    height: 32px;
    fill: currentColor;
  }
`

// LinkedIn button
const LinkedInButton = styled(IconButtonBase)`
  background: #0077b5;
  color: white;

  &:hover {
    box-shadow: 0 15px 25px #0077b580;
  }
`

// GitHub button
const GitHubButton = styled(IconButtonBase)`
  background: #333;
  color: white;

  &:hover {
    box-shadow: 0 15px 25px #33333380;
  }
`

// Instagram button
const InstagramButton = styled(IconButtonBase)`
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  color: white;

  &:hover {
    box-shadow: 0 15px 25px #e6683c80;
  }
`

// QR Code button
const QRButton = styled(IconButtonBase)`
  background: #4CAF50;
  color: white;

  &:hover {
    box-shadow: 0 15px 25px #4CAF5080;
  }
`

// Modal Components
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`

const ModalContent = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 24px;
  max-width: 90%;
  width: 320px;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);

  img {
    width: 100%;
    height: auto;
    border-radius: 16px;
    margin-bottom: 1rem;
  }

  h3 {
    color: #333;
    margin: 0 0 0.5rem 0;
    font-size: 1.5rem;
  }

  p {
    color: #666;
    margin: 0 0 1.5rem 0;
    font-size: 1rem;
  }

  button {
    background: ${ColorPalletes.orangeLight};
    color: white;
    border: none;
    padding: 0.75rem 2rem;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: ${ColorPalletes.orangeDark};
      transform: translateY(-2px);
    }
  }
`

// Props interface
interface SocialIconsProps {
  showQR?: boolean
  className?: string
  variants?: any
}

const SocialIcons: React.FC<SocialIconsProps> = ({
  showQR = true,
  className,
  variants
}) => {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false)

  const openUrl = (url: string): void => {
    window.open(url, '_blank', 'noopener noreferrer')
  }

  return (
    <>
      <SocialContainer className={className} variants={variants} initial='hidden' animate='visible'>
        {/* LinkedIn */}
        <LinkedInButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => openUrl('https://www.linkedin.com/in/soros-lie/')}
        >
          <LinkedInIcon fontSize='inherit' />
        </LinkedInButton>

        {/* GitHub */}
        <GitHubButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => openUrl('https://github.com/soroslie')}
        >
          <GitHubIcon fontSize='inherit' />
        </GitHubButton>

        {/* Instagram */}
        <InstagramButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => openUrl('https://www.instagram.com/liesoros/')}
        >
          <InstagramIcon fontSize='inherit' />
        </InstagramButton>

        {/* QR Code */}
        {showQR && (
          <QRButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsQRModalOpen(true)}
          >
            <QrCodeIcon fontSize='inherit' />
          </QRButton>
        )}
      </SocialContainer>

      {/* QR Code Modal */}
      {isQRModalOpen && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsQRModalOpen(false)}
        >
          <ModalContent
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={QRCodeImage} alt='QR Code' />
            <h3>Scan QR Code</h3>
            <p>Scan this code to save my contact information</p>
            <button onClick={() => setIsQRModalOpen(false)}>Close</button>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  )
}

export default SocialIcons