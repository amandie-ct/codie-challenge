import Breadcrumbs from '../../components/breadcrumbs'
import FormInput from '../../components/formInput'
import * as Styled from './styles'
import { SubmitHandler, useForm } from 'react-hook-form'

type FormFields = {
  first_name: string
  last_name: string
  region?: string
  city?: string
  pokemon_name?: string[]
  pokemon_qty?: number
  date?: string
  time?: string
}

const Appointment = () => {
  const { handleSubmit, control } = useForm<FormFields>({
    defaultValues: {
      first_name: '',
      last_name: '',
      region: '',
      city: '',
      pokemon_name: [],
      pokemon_qty: 0,
      date: '',
      time: ''
    },
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data)
  }

  return (
    <Styled.Container>
      <Breadcrumbs
        title="Agendar consulta"
        subtitle="Recupere seus pokémons em 5 segundos"
      />

      <Styled.Appointment>
        <h1>Preencha o formulário abaixo para agendar sua consulta</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Styled.FormContainer>
            <FormInput
              control={control}
              label="Nome"
              placeholder="Digite seu nome"
              name="first_name"
              value="first_name"
            />
          </Styled.FormContainer>
        </form>
      </Styled.Appointment>
    </Styled.Container>
  )
}

export default Appointment
