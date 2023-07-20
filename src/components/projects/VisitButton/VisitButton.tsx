import React from 'react'
import ButtonRightIcon from '../../Button/ButtonRightIcon/ButtonRightIcon'
import * as S from './VisitButton.style'

interface Props {
  color: string
  onClick: () => void
}

const VisitButton = ({ onClick, color }: Props): JSX.Element => {
  return (
    <ButtonRightIcon
      onClick={() => {
        onClick()
      }}
      content='Visit'
      color={color}
      animateTo='right'
    >
      <S.Icon />
    </ButtonRightIcon>
  )
}

export default VisitButton
