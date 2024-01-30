import { useState } from 'react'
import * as Styled from './styles'

interface IFormSelectProps {
  name: string
  placeholder: string
  control: any
  options: { label: string; value: string }
  onChange: () => void
}

const FormSelect = (props: IFormSelectProps) => {
  const [selectedValue, setSelectedValue] = useState('')

  const handleSelectChange = (event) => {
    const newValue = event.target.value
    setSelectedValue(newValue)
    onChange(newValue)
  }

  return (
    <Styled.SelectContainer>
      <Styled.FormSelect value={selectedValue} onChange={handleSelectChange}>
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Styled.FormSelect>
      <Styled.ArrowIcon>&#9660;</Styled.ArrowIcon>
    </Styled.SelectContainer>
  )
}

export default FormSelect
