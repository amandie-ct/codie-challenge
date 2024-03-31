// import { useState } from 'react'
import Card from '../../../components/card'
import * as Styled from '../../../pageStyles/status'
import Breadcrumbs from '../../../components/breadcrumbs'

const Status = () => {
  return (
    <Styled.Container>
      <Breadcrumbs
        title="Agendar consulta"
        subtitle="Recupere seus pokémons em 5 segundos"
      />
      <Styled.Status>
        <Card
          title="Consulta Agendada"
          icon="/check.svg"
          message="Seu agendamento para dia xx/xx/xxxx, às 00h00m,
para 0x pokémons foi realizado com sucesso!"
        />

        <Card
          title="Houve um problema no agendamento"
          icon="/warning.svg"
          message="{mensagem de erro}"
        />
      </Styled.Status>
    </Styled.Container>
  )
}

export default Status
