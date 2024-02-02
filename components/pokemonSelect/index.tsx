import { useQuery } from '@tanstack/react-query'
import { fetchPokemons } from '../../pages/api'
import { useState } from 'react'
import * as Styled from './styles'
import Select from 'react-select'

export interface IPokemon {
  name: string
  url: string
}

export interface IPokemonProps {
  value?: any
  onChange?: any
}

const PokemonSelect = (props: IPokemonProps) => {
  const {
    data: pokemons,
    isLoading,
    isError
  } = useQuery<IPokemon[], Error>({
    queryFn: () => fetchPokemons(),
    queryKey: ['pokemon']
  })

  const [selectedPokemon, setSelectedPokemon] = useState('')
  const pokemonArray = pokemons?.map((pokemon) => {
    return { value: pokemon.name, label: pokemon.name }
  })

  const handlePokemonChange = (e) => {
    setSelectedPokemon(e)
  }

  return (
    <Select
      options={pokemonArray}
      placeholder="Selecione seu pokémon"
      onChange={(e) => handlePokemonChange(e?.value)}
    />
  )
}

export default PokemonSelect
