import Breadcrumbs from '../../components/breadcrumbs'
import * as Styled from './styles'
import PokemonForm from '../../components/form'

const Appointment = () => {
  return (
    <Styled.Container>
      <Breadcrumbs
        title="Agendar consulta"
        subtitle="Recupere seus pokémons em 5 segundos"
      />

      <Styled.Appointment>
        <h1>Preencha o formulário abaixo para agendar sua consulta</h1>
        <PokemonForm />

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
          </Styled.SummaryBlocks>
        </Styled.AppointmentSummary>
      </Styled.Appointment>
    </Styled.Container>
  )
}

export default Appointment
