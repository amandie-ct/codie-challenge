import * as Styled from './styles'

interface IFormButtonProps {
  text: string
  //   onClick: Function
}

const FormButton = (props: IFormButtonProps) => {
  return (
    <Styled.Button type="button">
      <p>{props.text}</p>
      <p>+</p>
    </Styled.Button>
  )
}

export default FormButton
