import * as Styled from './styles'
import Logo from '../logo'
import Link from 'next/link'
import Button from '../button/Button'

const Header = () => {
  return (
    <Styled.Header>
      <Logo logo_text="Centro Pokémon" />
      <Styled.HeaderShortcuts>
        <Link href="/about">Quem somos</Link>
        <Button
          button_text="Agendar consulta"
          width={10.75}
          type="button"
          button_link={'/appointment'}
        />
      </Styled.HeaderShortcuts>
    </Styled.Header>
  )
}

export default Header
