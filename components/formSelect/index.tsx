import { useState, ChangeEvent } from 'react'
import * as Styled from './styles'

interface IFormSelectProps {
  name: string
  select_label: string
  placeholder: string
  control: any
  options?: string[] | undefined
  selected_region?: string
  selected_city?: string
  onChange?: any
}

const FormSelect = (props: IFormSelectProps) => {
  const [value, setValue] = useState('')

  return (
    <>
      <Styled.Wrapper>
        <Styled.SelectLabel>{props.select_label}</Styled.SelectLabel>

        <Styled.FormSelect
          value={value}
          onChange={props.onChange}
          name={props.name}
        >
          <option value="" disabled selected hidden>
            {props.placeholder}
          </option>
          {props.options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </Styled.FormSelect>
      </Styled.Wrapper>
    </>
  )
}

export default FormSelect
