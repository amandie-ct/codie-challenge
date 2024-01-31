import FormSelect from '../formSelect'
import { useQuery } from '@tanstack/react-query'
import { fetchPokemons } from '../../pages/api'
import { useState } from 'react'
import FormButton from '../formButton'
import * as Styled from './styles'

export interface IPokemon {
  name: string
  url: string
}

const SelectPokemon = () => {
  const [selectedPokemon, setSelectedPokemon] = useState('Bulbassaur')
  const {
    data: pokemons,
    isLoading,
    isError
  } = useQuery<IPokemon[], Error>({
    queryFn: () => fetchPokemons(),
    queryKey: ['pokemon']
  })

  const pokemonArray = pokemons?.map((pokemon) => pokemon.name)

  const handlePokemonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPokemon(event.target.value)
    console.log(selectedPokemon)
  }

  if (isLoading) {
    return <p>Carregando...</p>
  }

  if (isError) {
    return <p>Erro ao carregar os dados</p>
  }

  return (
    <>
      <>
        <Styled.Title>Cadastre seu time</Styled.Title>
        <Styled.SubTitle>Atendemos até 06 pokémons por vez</Styled.SubTitle>
      </>
      <FormSelect
        name="pokemon"
        id="pokemon_select"
        placeholder="Selecione seu Pokémon"
        select_label="Pokémon"
        options={pokemonArray}
        onChange={handlePokemonChange}
      />
      <FormButton text="Adicionar novo pokémon ao time..." />
    </>
  )
}

export default SelectPokemon
