import { useQuery } from '@tanstack/react-query'
import { fetchPokemons } from '../pages/api'
export interface IPokemon {
  name: string
  url: string
}

export const usePokemonData = () => {
  const {
    isLoading,
    data: pokemons,
    isError,
    error,
    isFetching,
    refetch
  } = useQuery<IPokemon[]>({
    queryKey: ['pokemon'],
    queryFn: () => fetchPokemons()
  })

  const pokemonArray = pokemons?.map((pokemon) => pokemon.name)

  return pokemonArray
}
