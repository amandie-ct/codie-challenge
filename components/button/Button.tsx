import Link from 'next/link'
import * as Styled from './styles'

export interface IButtonProps {
  button_text: string
  button_link?: string
  width: number
}

const Button = ({
  button_text,
  button_link = '/appointment',
  width
}: IButtonProps) => {
  return (
    <Styled.Button $width={width}>
      <Link href={button_link}>{button_text}</Link>
    </Styled.Button>
  )
}

export default Button
