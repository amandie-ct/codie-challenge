import Breadcrumbs from '../../components/breadcrumbs'
import Button from '../../components/button/Button'
import FormInput from '../../components/formInput'
import * as Styled from './styles'
import { SubmitHandler, useForm } from 'react-hook-form'
import LocationSelect from '../../components/SelectLocation'

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
            />
            <FormInput
              control={control}
              label="Sobrenome"
              placeholder="Digite seu sobrenome"
              name="last_name"
            />
          </Styled.FormContainer>
          <Styled.FormContainer></Styled.FormContainer>

          <Styled.FormContainer>
            <LocationSelect />
          </Styled.FormContainer>

          <Styled.Label>Cadastre seu time</Styled.Label>
          <Styled.SubLabel>Atendemos até 06 pokémons por vez</Styled.SubLabel>
        </form>
        <Styled.AppointmentSummary>
          <hr />
          <Styled.SummaryBlocks>
            <p>Número de pokémons a serem atendidos:</p>
            <p>01</p>
          </Styled.SummaryBlocks>
          <Styled.SummaryBlocks>
            <p>Atendimento unitário por pokémon:</p>
            <p>R$ 70</p>
          </Styled.SummaryBlocks>
          <Styled.SummaryBlocks>
            <p>Subtotal:</p>
            <p>R$ 70</p>
          </Styled.SummaryBlocks>
          <Styled.SummaryBlocks>
            <p>Taxa geracional*:</p>
            <p>R$ 2,10</p>
          </Styled.SummaryBlocks>
          <p>
            *adicionamos uma taxa de 3%, multiplicado pelo número da geração
            mais alta do time, com limite de até 30%
          </p>
          <Styled.SummaryBlocks>
            <p>Valor total: R$ 72,10</p>
            <Button button_text="Concluir Agendamento" width={11.4} />
          </Styled.SummaryBlocks>
        </Styled.AppointmentSummary>
      </Styled.Appointment>
    </Styled.Container>
  )
}

export default Appointment
