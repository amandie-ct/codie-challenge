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
      </Styled.Appointment>
    </Styled.Container>
  )
}

export default Appointment
