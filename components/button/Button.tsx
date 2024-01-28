import Link from 'next/link'
import * as Styled from './styles'

interface IButtonProps {
  button_text: string
  button_link?: string
}

const Button = ({
  button_text,
  button_link = '/appointment'
}: IButtonProps) => {
  return (
    <Styled.Button>
      <Link href={button_link}>
        <p>{button_text}</p>
      </Link>
    </Styled.Button>
  )
}

export default Button
