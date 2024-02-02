import { useQuery } from '@tanstack/react-query'
import { fetchPokemons } from '../pages/api'
import { useState } from 'react'

export interface IPokemon {
  name: string
  url: string
}

export const usePokemon = () => {
  const {
    data: pokemons,
    isLoading,
    isError
  } = useQuery<IPokemon[], Error>({
    queryFn: () => fetchPokemons(),
    queryKey: ['pokemon']
  })

  const pokemonArray = pokemons?.map((pokemon) => pokemon.name)

  return pokemonArray
}
