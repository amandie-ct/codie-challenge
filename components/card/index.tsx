import Button from '../button/Button'
import * as Styled from './styles'

interface ICardProps {
  title: string
  icon: string
  message: string
}

const Card = ({ title, icon, message }: ICardProps) => {
  return (
    <Styled.CardContainer>
      <h1>{title}</h1>
      <img src={icon} />
      <p>{message}</p>
      <Button button_text="Fazer Novo Agendamento" button_link="/appointment" />
    </Styled.CardContainer>
  )
}

export default Card
