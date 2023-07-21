import { Content } from './Chip.style'
import { FrammerLetter } from '../../utils/framer'
interface Props {
  content: string
  color: string
}

const Chip = ({ content, color }: Props): JSX.Element => {
  return (
    <Content variants={FrammerLetter} color={color}>
      {content}
    </Content>
  )
}

export default Chip
