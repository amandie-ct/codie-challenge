import Link from 'next/link'
import * as Styled from './styles'

export interface IButtonProps {
  button_text: string
  button_link: string | null
  type: 'submit' | 'button' | 'reset'
  width: number
}

const Button = ({ button_text, button_link, width, type }: IButtonProps) => {
  return (
    <Styled.Button $width={width} type={type}>
      {button_link ? (
        <Link href={button_link}>{button_text}</Link>
      ) : (
        <>{button_text}</>
      )}
    </Styled.Button>
  )
}

export default Button
