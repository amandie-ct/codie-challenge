import { useState, useEffect } from 'react'
import * as Styled from './styles'

export interface ILogoProps {
  logo_text: string
}

const Logo = ({ logo_text }: ILogoProps) => {
  const [showText, setShowText] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Styled.Logo
      onMouseEnter={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
    >
      <img src="/images/white-pokeball.svg" alt="Pokebola" />
      <p style={{ display: showText ? 'block' : 'none' }}>{logo_text}</p>
    </Styled.Logo>
  )
}

export default Logo
