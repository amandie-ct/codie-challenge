import { useEffect } from 'react'
import * as Styled from './styles'

export interface ILogoProps {
  logo_text: string
}

const Logo = ({ logo_text }: ILogoProps) => {
  useEffect(() => {
    setTimeout(() => {
      console.log('chego aqui')
    }, 5000)
  }, [])

  return (
    <Styled.Logo>
      <img src="/images/white-pokeball.svg" alt="Pokebola" />
      <p>{logo_text}</p>
    </Styled.Logo>
  )
}

export default Logo
