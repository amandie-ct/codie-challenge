import { useEffect, useState } from 'react'
import * as Styled from './styles'

export interface ILogoProps {
  logo_text: string
  isOpen?: boolean
}

const Logo = ({ logo_text }: ILogoProps) => {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false)
    }, 5000)

    // return () => clearTimeout()
  }, [])

  return (
    <Styled.Logo isOpen={isOpen}>
      <img src="/images/white-pokeball.svg" alt="Pokebola" />
      <p>{logo_text}</p>
    </Styled.Logo>
  )
}

export default Logo
