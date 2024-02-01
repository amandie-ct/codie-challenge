import { useController } from 'react-hook-form'
import * as Styled from './styles'

interface IFormInputProps {
  label: string
  name: string
  placeholder: string
  control: any
}

const FormInput = (props: IFormInputProps) => {
  const { field } = useController(props)
  return (
    <Styled.Wrapper>
      <Styled.FormLabel htmlFor={props.name}>{props.label}</Styled.FormLabel>
      <Styled.Input placeholder={props.placeholder} {...field} />
    </Styled.Wrapper>
  )
}

export default FormInput
