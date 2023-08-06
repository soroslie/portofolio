import ButtonRightIcon from '../../Button/ButtonRightIcon/ButtonRightIcon'
import * as S from './VisitButton.style'

interface Props {
  color: string
  onClick: () => void
}

const VisitButton = ({ onClick, color }: Props): JSX.Element => {
  return (
    <S.Container>
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
    </S.Container>
  )
}

export default VisitButton
