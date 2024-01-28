import * as Styled from './styles'

interface ILogoProps {
  logo_text: string
}

const Logo = ({ logo_text }: ILogoProps) => {
  return (
    <Styled.Logo>
      <img src="/images/white-pokeball.svg" alt="Pokebola" />
      <p>{logo_text}</p>
    </Styled.Logo>
  )
}

export default Logo
