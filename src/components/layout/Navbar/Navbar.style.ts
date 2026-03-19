import styled from 'styled-components'
import ColorPalletes from '../../../utils/color'
import { MediaScreen } from '../../../utils/mediaScreen'

export const NavbarContainer = styled.nav<{ $isMobile: boolean }>`
  position: fixed;
  ${props => props.$isMobile ? 'bottom: 16px; top: auto;' : 'top: 0; bottom: auto;'}
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1200;
  pointer-events: none;
  padding-top: ${props => props.$isMobile ? '0' : '10px'};
`

export const FloatingContainer = styled.div<{ $scrolled: boolean; $isMobile: boolean }>`
  background-color: ${props => 
    props.$isMobile 
      ? 'rgba(18, 18, 22, 0.85)' 
      : props.$scrolled ? 'rgba(18, 18, 22, 0.92)' : 'rgba(18, 18, 22, 0.75)'
  };
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: ${props => props.$isMobile ? '40px' : '24px'};
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  padding: ${props => props.$isMobile ? '0.6rem 0.4rem' : '0.3rem 0.8rem'};
  transition: all 0.2s ease;
  display: inline-flex;
  pointer-events: auto;
  width: ${props => props.$isMobile ? 'auto' : 'auto'};
  max-width: ${props => props.$isMobile ? '95%' : 'none'};

  &:hover {
    border-color: rgba(255, 255, 255, 0.1);
    background-color: ${props => props.$isMobile 
      ? 'rgba(18, 18, 22, 0.95)' 
      : 'rgba(20, 20, 25, 0.85)'
    };
  }
`

export const NavButtonsContainer = styled.div<{ $isMobile: boolean }>`
  display: flex;
  gap: ${props => props.$isMobile ? '0.1rem' : '0.1rem'};
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (max-width: ${MediaScreen.tablet}) {
    gap: ${props => props.$isMobile ? '0.1rem' : '0.05rem'};
  }
`

export const NavButton = styled.button<{ $isMobile: boolean }>`
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
  margin: 0;
  padding: ${props => props.$isMobile ? '0.4rem 0.5rem' : '0.5rem 1.2rem'};
  border-radius: ${props => props.$isMobile ? '20px' : '20px'};
  font-size: ${props => props.$isMobile ? '0.95rem' : '0.95rem'};
  letter-spacing: 0.3px;
  transition: all 0.2s ease;
  cursor: pointer;
  font-family: inherit;
  display: flex;
  flex-direction: ${props => props.$isMobile ? 'column' : 'row'};
  align-items: center;
  justify-content: center;
  gap: ${props => props.$isMobile ? '2px' : '6px'};
  line-height: 1;
  min-width: ${props => props.$isMobile ? '60px' : 'auto'};

  .nav-icon {
    font-size: ${props => props.$isMobile ? '1.4rem' : '1.1rem'};
    margin-bottom: ${props => props.$isMobile ? '2px' : '0'};
    color: ${props => props.$isMobile ? ColorPalletes.greenPrimary + 'cc' : 'inherit'};
  }

  .nav-text {
    font-size: ${props => props.$isMobile ? '0.6rem' : '0.95rem'};
    font-weight: ${props => props.$isMobile ? '500' : '400'};
    text-transform: uppercase;
  }

  &:hover {
    color: ${ColorPalletes.greenPrimary};
    background-color: rgba(19, 204, 158, 0.08);
    transform: translateY(-1px);
    
    .nav-icon {
      color: ${ColorPalletes.greenPrimary};
    }
  }

  /* Desktop styles - no icons */
  @media only screen and (min-width: 769px) {
    .nav-icon {
      display: none;
    }
  }

  /* Mobile specific styles */
  @media only screen and (max-width: ${MediaScreen.tablet}) {
    ${props => props.$isMobile && `
      padding: 0.4rem 0.4rem;
      
      .nav-icon {
        font-size: 1.3rem;
        margin-bottom: 2px;
      }
      
      .nav-text {
        font-size: 0.55rem;
      }
    `}
  }

  @media only screen and (max-width: ${MediaScreen.mobile}) {
    ${props => props.$isMobile && `
      padding: 0.3rem 0.3rem;
      min-width: 50px;
      
      .nav-icon {
        font-size: 1.2rem;
      }
      
      .nav-text {
        font-size: 0.5rem;
      }
    `}
  }
`