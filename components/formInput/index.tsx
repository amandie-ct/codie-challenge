import { useController } from 'react-hook-form'
import * as Styled from './styles'

interface IFormInputProps {
  label: string
  name: string
  placeholder: string
}

const FormInput = ({ label, name, placeholder }: IFormInputProps) => {
  const { field } = useController({ name })
  return (
    <Styled.InputContainer>
      <Styled.FormLabel>{label}</Styled.FormLabel>
      <input type="text" placeholder={placeholder} {...field} />
    </Styled.InputContainer>
  )
}

export default FormInput
