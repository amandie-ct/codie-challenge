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
    <Link href={button_link}>
      <Styled.Button>
        <p>{button_text}</p>
      </Styled.Button>
    </Link>
  )
}

export default Button
