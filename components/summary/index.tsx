import * as Styled from './styles'

interface ISummaryProps {
  pokemonNumber: number
}

const Summary = (props: ISummaryProps) => {
  const pricePerPokemon: number = 70
  return (
    <Styled.AppointmentSummary>
      <hr />
      <Styled.SummaryBlocks>
        <p>Número de pokémons a serem atendidos:</p>
        <p>{props.pokemonNumber}</p>
      </Styled.SummaryBlocks>
      <Styled.SummaryBlocks>
        <p>Atendimento unitário por pokémon:</p>
        <p>R$ {pricePerPokemon} </p>
      </Styled.SummaryBlocks>
      <Styled.SummaryBlocks>
        <p>Subtotal:</p>
        <p>R$ {props.pokemonNumber * pricePerPokemon}</p>
      </Styled.SummaryBlocks>
      <Styled.SummaryBlocks>
        <p>Taxa geracional*:</p>
        <p>R$ 2,10</p>
      </Styled.SummaryBlocks>
      <p>
        *adicionamos uma taxa de 3%, multiplicado pelo número da geração mais
        alta do time, com limite de até 30%
      </p>
    </Styled.AppointmentSummary>
  )
}

export default Summary
