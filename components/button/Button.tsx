import * as Styled from './styles'

interface IButtonProps {
  button_text: string
}

const Button = ({ button_text }: IButtonProps) => {
  return (
    <Styled.Button>
      <p>{button_text}</p>
    </Styled.Button>
  )
}

export default Button
