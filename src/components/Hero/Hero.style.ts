import styled from 'styled-components'
import ColorPalletes from '../../utils/color'
import { motion } from 'framer-motion'
import { MediaScreen } from '../../utils/mediaScreen'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #000000;
  color: ${ColorPalletes.whitePrimary};
  padding: 0 2rem;
  margin-top: -40px;

  @media only screen and (max-width: ${MediaScreen.tablet}) {
    height: auto;
    min-height: auto;
    padding: 1rem;
    align-items: flex-start;
    padding-top: 2rem;
    padding-bottom: 0;
    margin-top: -30px;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  align-items: center;

  @media only screen and (max-width: ${MediaScreen.tablet}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

// Left Column Styles
export const LeftColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transform: scale(1.05);
  padding: 0 2rem;

  @media only screen and (max-width: ${MediaScreen.tablet}) {
    align-items: center;
    text-align: center;
    padding: 0 1rem;
    gap: 0.8rem;
    transform: scale(1);
    width: 100%;
  }
`

export const Greeting = styled(motion.span)`
  font-size: 2.4rem;
  color: ${ColorPalletes.greenPrimary};
  letter-spacing: 2px;
  font-weight: 500;
  margin-bottom: -0.3rem;
  
  span {
    color: ${ColorPalletes.whitePrimary};
    font-size: 2rem;
    margin-left: 0.5rem;
  }

  @media only screen and (max-width: ${MediaScreen.tablet}) {
    font-size: 2rem;
    span {
      font-size: 1.8rem;
    }
  }
`

export const NameContainer = styled(motion.div)`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: -0.2rem;
  margin-bottom: -0.2rem;

  @media only screen and (max-width: ${MediaScreen.tablet}) {
    justify-content: center;
  }
`

export const Name = styled(motion.h1)`
  font-size: clamp(3.4rem, 6vw, 4.8rem);
  font-weight: 700;
  line-height: 1.1;
  margin: 0;
  color: ${ColorPalletes.whitePrimary};

  @media only screen and (max-width: ${MediaScreen.tablet}) {
    font-size: clamp(2.8rem, 5vw, 3.5rem);
  }
`

export const ChineseName = styled(motion.span)`
  font-size: clamp(1.9rem, 3.5vw, 2.6rem);
  font-weight: 400;
  color: ${ColorPalletes.greenPrimary};
  opacity: 0.9;

  @media only screen and (max-width: ${MediaScreen.tablet}) {
    font-size: clamp(1.5rem, 3vw, 2rem);
  }
`

export const Title = styled(motion.h2)`
  font-size: clamp(1.3rem, 2.2vw, 1.6rem);
  color: ${ColorPalletes.orangeLight};
  font-weight: 600;
  margin: 0 0 0.2rem 0;
  letter-spacing: 1px;

  @media only screen and (max-width: ${MediaScreen.tablet}) {
    font-size: clamp(1.1rem, 2vw, 1.3rem);
  }
`

// Futuristic Divider
export const Divider = styled(motion.div)`
  width: 220px;
  height: 3px;
  background: linear-gradient(90deg, 
    transparent, 
    ${ColorPalletes.orangeLight}, 
    ${ColorPalletes.greenPrimary}, 
    transparent
  );
  margin: 0.2rem 0 0.8rem 0;
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(255, 255, 255, 0.6), 
      transparent
    );
    animation: shimmer 2.5s infinite;
  }

  @keyframes shimmer {
    0% { left: -100%; }
    20% { left: 100%; }
    100% { left: 100%; }
  }

  @media only screen and (max-width: ${MediaScreen.tablet}) {
    margin: 0.2rem auto 0.8rem auto;
    width: 180px;
  }
`

// Social Icons
export const SocialContainer = styled(motion.div)`
  display: flex;
  gap: 1.2rem;
  margin: 0.5rem 0 1rem 0;

  @media only screen and (max-width: ${MediaScreen.tablet}) {
    justify-content: center;
    gap: 1rem;
    margin: 0.5rem 0 0.8rem 0;
  }
`

export const SocialIcon = styled(motion.a)`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: ${ColorPalletes.orangeLight};
  color: ${ColorPalletes.whitePrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 15px 25px ${ColorPalletes.orangeLight}60, 0 8px 16px rgba(0, 0, 0, 0.4);
  }

  svg {
    width: 28px;
    height: 28px;
    fill: currentColor;
  }

  @media only screen and (max-width: ${MediaScreen.tablet}) {
    width: 48px;
    height: 48px;
    
    svg {
      width: 24px;
      height: 24px;
    }
  }
`

// Stats Box
export const StatsBox = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  background: rgba(40, 40, 45, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 24px;
  padding: 1.8rem;
  margin: 0.2rem 0 0 0;
  backdrop-filter: blur(12px);
  box-shadow: 
    0 15px 35px rgba(0, 0, 0, 0.6),
    0 5px 15px rgba(0, 0, 0, 0.4),
    inset 0 1px 2px rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease-in-out;

  &:hover {
    background: rgba(50, 50, 55, 0.5);
    border-color: rgba(255, 255, 255, 0.25);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.8),
      0 8px 20px rgba(0, 0, 0, 0.5),
      inset 0 1px 3px rgba(255, 255, 255, 0.12);
    transform: translateY(-4px);
    backdrop-filter: blur(14px);
  }

  @media only screen and (max-width: ${MediaScreen.mobile}) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1.5rem;
    
    &:hover {
      transform: translateY(-2px);
    }
  }

  @media only screen and (max-width: ${MediaScreen.tablet}) {
    margin: 0.2rem 0 0 0;
  }
`

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const StatNumber = styled.span`
  font-size: 2.2rem;
  font-weight: 700;
  color: ${ColorPalletes.greenPrimary};
  margin-bottom: 0.3rem;

  @media only screen and (max-width: ${MediaScreen.mobile}) {
    font-size: 1.8rem;
  }
`

export const StatLabel = styled.span`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.3;

  @media only screen and (max-width: ${MediaScreen.mobile}) {
    font-size: 0.9rem;
  }
`

// Right Column Styles - FIXED VERSION
export const RightColumn = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media only screen and (max-width: ${MediaScreen.laptop}) {
    transform: scale(0.9);
  }

  @media only screen and (max-width: ${MediaScreen.tablet}) {
    display: none;
  }
`

export const ImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${MediaScreen.laptop}) {
    max-width: 400px;
  }
`

// FIXED: Circle Wrapper to handle centering separately
export const CircleWrapper = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 480px;
  height: 480px;
  z-index: 1;
  pointer-events: none; /* Prevents interference with image hover */
  
  @media only screen and (max-width: ${MediaScreen.laptop}) {
    width: 380px;
    height: 380px;
  }
`

// FIXED: White circle with proper transform-origin
export const WhiteCircle = styled(motion.div)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 
    0 20px 50px rgba(0, 0, 0, 0.8),
    0 0 0 2px rgba(255, 255, 255, 0.3),
    0 0 0 5px rgba(255, 255, 255, 0.1),
    inset 0 0 30px rgba(255, 255, 255, 0.2);
  transform-origin: center center;
  will-change: transform, box-shadow;
`

export const ProfileImage = styled(motion.img)`
  position: relative;
  width: 100%;
  height: auto;
  max-height: 450px;
  object-fit: contain;
  object-position: center;
  z-index: 2;
  filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.6));
  display: block;
  transition: all 0.3s ease;
  cursor: pointer;

  @media only screen and (max-width: ${MediaScreen.laptop}) {
    max-height: 380px;
  }

  &:hover {
    filter: drop-shadow(0 30px 50px rgba(0, 0, 0, 0.9));
  }
`