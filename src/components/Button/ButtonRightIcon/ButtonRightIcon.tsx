import { ReactNode } from 'react'
import * as S from './ButtonRightIcon.style'

interface Props {
  animateTo?: 'right' | 'bot' | 'top' | 'left' | 'none'
  content: string
  color?: string
  children: ReactNode | JSX.Element
  onClick: () => void
}

const ButtonRightIcon = ({
  content,
  children,
  onClick,
  animateTo = 'none',
  color = '000'
}: Props): JSX.Element => {
  const renderAnimationDirection = (): JSX.Element => {
    switch (animateTo) {
      case 'top':
        return <p className='animate-to-top animate'>{children}</p>
      case 'bot':
        return <p className='animate-to-bot animate'>{children}</p>
      case 'right':
        return <p className='animate-to-right animate'>{children}</p>
      case 'left':
        return <p className='animate-to-left animate'>{children}</p>
      case 'none':
        return <p>{children}</p>
    }
  }

  return (
    <S.Container
      onClick={() => {
        onClick()
      }}
      style={{ color }}
    >
      {content} {renderAnimationDirection()}
    </S.Container>
  )
}

export default ButtonRightIcon
