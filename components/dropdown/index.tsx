import { useState } from 'react'
import * as Styled from './styles'

interface IDropdown {
  selected: string
  options?: string[] | undefined
  setSelected: any
}

const Dropdown = ({ selected, setSelected, options }: IDropdown) => {
  const [active, setActive] = useState(false)

  return (
    <Styled.Dropdown>
      <Styled.DropdownBtn onClick={(e) => setActive(!active)}>
        {selected}
        <span>V</span>
      </Styled.DropdownBtn>
      {active && (
        <Styled.DropdownContent>
          <>
            {options?.map((option) => {
              return (
                <Styled.DropdownItem
                  onClick={(e) => {
                    setSelected(option)
                    setActive(false)
                  }}
                >
                  {option}
                </Styled.DropdownItem>
              )
            })}
          </>
        </Styled.DropdownContent>
      )}
    </Styled.Dropdown>
  )
}

export default Dropdown
