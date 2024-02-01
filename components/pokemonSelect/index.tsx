import FormSelect from '../formSelect'
import { useQuery } from '@tanstack/react-query'
import { fetchPokemons } from '../../pages/api'
import { useState } from 'react'
import FormButton from '../formAddPokemonButton'
import * as Styled from './styles'
import Select from 'react-select'

export interface IPokemon {
  name: string
  url: string
}

const PokemonSelect = () => {
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

  const options = [
    { value: 'a', label: 'a' },
    { value: 'b', label: 'b' },
    { value: 'c', label: 'c' },
    { value: 'da', label: 'da' }
  ]

  return (
    <>
      {/* <Styled.Wrapper>
        {/* <Styled.Title>Cadastre seu time</Styled.Title>
        <Styled.SubTitle>Atendemos até 06 pokémons por vez</Styled.SubTitle> */}
      {/* </Styled.Wrapper> */}
      {/* <FormSelect
        name="pokemon"
        select_label="Pokémon"
        placeholder="Selecione seu pokémon"
        control={control}
        options={pokemonArray}
        onChange={handlePokemonChange}
      /> */}

      <Select options={options} />
      <FormButton text="Adicionar novo pokémon ao time..." />
    </>
  )
}

export default PokemonSelect
