import { useState, ChangeEvent } from 'react'
import * as Styled from './styles'

interface IFormSelectProps {
  name: string
  id: string
  select_label: string
  placeholder: string
  control?: any
  options?: string[] | undefined
  selected_region?: string
  selected_city?: string
  onChange?: any
}

const FormSelect = (props: IFormSelectProps) => {
  const [value, setValue] = useState('')

  // const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
  //   const newValue = event.target.value
  //   setValue(newValue)
  // }

  return (
    <Styled.SelectContainer>
      <Styled.Wrapper>
        <Styled.SelectLabel htmlFor={props.id}>
          {props.select_label}
        </Styled.SelectLabel>

        <Styled.FormSelect
          value={value}
          onChange={props.onChange}
          id={props.id}
          name={props.name}
        >
          <option value="" disabled selected hidden>
            {`Selecione sua ${props.select_label}`}
          </option>
          {props.options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </Styled.FormSelect>
      </Styled.Wrapper>
      {/* <Styled.ArrowIcon> */}
      {/* <p>&gt;</p>
      </Styled.ArrowIcon> */}
    </Styled.SelectContainer>
  )
}

export default FormSelect
