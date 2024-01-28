import Breadcrumbs from '../../components/breadcrumbs'
import * as Styled from './styles'

const Appointment = () => {
  return (
    <Styled.Container>
      <Breadcrumbs
        title="Agendar consulta"
        subtitle="Recupere seus pokémons em 5 segundos"
      />
      <Styled.Appointment></Styled.Appointment>
    </Styled.Container>
  )
}

export default Appointment
