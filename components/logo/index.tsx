import { useEffect, useState } from 'react'
import * as Styled from './styles'

export interface ILogoProps {
  logo_text: string
  isopen?: boolean
}

const Logo = ({ logo_text, isopen = true }: ILogoProps) => {
  useEffect(() => {
    setTimeout(() => {
      isopen = false
    }, 5000)
  }, [isopen])

  return (
    <Styled.Logo isopen={isopen}>
      <img src="/images/white-pokeball.svg" alt="Pokebola" />
      <p>{logo_text}</p>
    </Styled.Logo>
  )
}

export default Logo
