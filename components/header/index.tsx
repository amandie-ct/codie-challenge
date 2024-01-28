import * as Styled from './styles'
import Button from '../button/Button'
import Logo from '../logo'
import Link from 'next/link'

// interface IHeaderProps {
//     logo_button: ReactNode
//     link: string
//     linkText: string
//     button: ReactNode
// }

const Header = () => {
  return (
    <Styled.Header>
      <Logo logo_text="Centro Pokémon" />
      <Styled.HeaderShortcuts>
        <Link href="/about">Quem somos</Link>
        <Button button_text="Agendar consulta" />
      </Styled.HeaderShortcuts>
    </Styled.Header>
  )
}

export default Header
