import { useController } from 'react-hook-form'
import * as Styled from './styles'

interface IFormInputProps {
  label: string
  name: string
  placeholder: string
  control: any
}

const FormInput = (props: IFormInputProps) => {
  const { field, fieldState } = useController(props)
  return (
    <Styled.InputContainer>
      <Styled.FormLabel htmlFor={props.name}>{props.label}</Styled.FormLabel>
      <Styled.Input placeholder={props.placeholder} {...field} />
    </Styled.InputContainer>
  )
}

export default FormInput
