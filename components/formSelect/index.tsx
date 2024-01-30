import { useState, ChangeEvent } from 'react'
import * as Styled from './styles'

interface IFormSelectProps {
  name: string
  select_label: string
  placeholder: string
  control?: any
  options: string[]
  selected_region?: string
  selected_city?: string
}

const FormSelect = (props: IFormSelectProps) => {
  const [selectedValue, setSelectedValue] = useState('')

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value
    setSelectedValue(newValue)
  }

  return (
    <Styled.SelectContainer>
      <Styled.SelectLabel>{props.select_label}</Styled.SelectLabel>

      <Styled.FormSelect value={selectedValue} onChange={handleSelectChange}>
        <option value="" disabled>
          {`Selecione sua ${props.select_label}`}
        </option>
        {props.options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Styled.FormSelect>
      <Styled.ArrowIcon>
        <p>&gt;</p>
      </Styled.ArrowIcon>
    </Styled.SelectContainer>
  )
}

export default FormSelect
