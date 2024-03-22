import { useState } from 'react'
import * as Styled from './styles'

const Dropdown = () => {
  const [active, setActive] = useState(false)
  return (
    <Styled.Dropdown>
      <Styled.DropdownBtn onClick={(e) => setActive(!active)}>
        Choose one <span>V</span>
      </Styled.DropdownBtn>
      {active && (
        <Styled.DropdownContent>
          <Styled.DropdownItem>React</Styled.DropdownItem>
          <Styled.DropdownItem>Node</Styled.DropdownItem>
          <Styled.DropdownItem>Python</Styled.DropdownItem>
        </Styled.DropdownContent>
      )}
    </Styled.Dropdown>
  )
}

export default Dropdown
