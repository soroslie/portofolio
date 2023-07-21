import styled from 'styled-components'
import ColorPalletes from '../../../utils/color'
import { MediaScreen } from '../../../utils/mediaScreen'

export const Container = styled.footer`
  color: ${ColorPalletes.whitePrimary};
  width: 100%;
  margin-top: 2rem;
`

export const Mail = styled.a`
  font-size: 40px;
  text-decoration: none;
  font-weight: bold;
  color: ${ColorPalletes.graySecondary};
  background: linear-gradient(
      to right,
      rgba(250, 250, 250, 1) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 1) 100%
    ),
    linear-gradient(
      to right,
      rgba(152, 222, 204, 1) 0%,
      rgba(255, 255, 255, 1) 34%,
      rgba(74, 152, 133, 1) 71%,
      rgba(19, 204, 158, 1) 100%
    );
  background-size: 100% 3px, 0 3px;
  background-position: 100% 100%, 0 100%;
  transition: all 400ms;
  background-repeat: no-repeat;

  &:hover {
    cursor: pointer;
    background-size: 0 3px, 100% 3px;
    color: ${ColorPalletes.greenPrimary};
  }

  @media only screen and (max-width: ${MediaScreen.tablet}) {
    font-size: 20px;
  }
`

export const Copyright = styled.p`
  text-align: center;
  color: ${ColorPalletes.grayTertiary};
  margin: 2rem 0;
`
export const Info = styled.p`
  text-align: center;
`
export const MailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
