import FormSelect from '../formSelect'
import { useQuery } from '@tanstack/react-query'
import { fetchPokemons } from '../../pages/api'
import { useState } from 'react'

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

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
      <FormSelect
        name="pokemon"
        id="pokemon_select"
        placeholder="Selecione seu Pokémon"
        select_label="Pokémon"
        options={pokemonArray}
        onChange={handleRegionChange}
      />
    </>
  )
}

export default SelectPokemon
