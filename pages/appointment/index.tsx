import Breadcrumbs from '../../components/breadcrumbs'
import * as Styled from './styles'
import { useForm, SubmitHandler } from 'react-hook-form'

const Appointment = () => {
  const { register, handleSubmit } = useForm()
  return (
    <Styled.Container>
      <Breadcrumbs
        title="Agendar consulta"
        subtitle="Recupere seus pokémons em 5 segundos"
      />

      <Styled.Appointment>
        <h1>Preencha o formulário abaixo para agendar sua consulta</h1>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data)
          })}
        >
          <Styled.FormContainer>
            <Styled.InputContainer>
              <Styled.FormLabel htmlFor="name">Nome</Styled.FormLabel>
              <Styled.FormInput
                {...register('name')}
                placeholder="Digite seu nome..."
              />
            </Styled.InputContainer>
            <Styled.InputContainer>
              <Styled.FormLabel htmlFor="surname">Sobrenome</Styled.FormLabel>
              <Styled.FormInput
                {...register('surname')}
                placeholder="Digite seu sobrenome..."
              />
            </Styled.InputContainer>
          </Styled.FormContainer>
        </form>
      </Styled.Appointment>
    </Styled.Container>
  )
}

export default Appointment
