// import * as yup from 'yup'
import * as Styled from './styles'
// import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import FormButton from '../formAddPokemonButton'
import Button from '../button/Button'
import Select from 'react-select'
import { DevTool } from '@hookform/devtools'
import { useRegionData } from '../../hooks/useRegionData'
import { useLocationData } from '../../hooks/useCityData'
import { useState } from 'react'
import { usePokemonData } from '../../hooks/usePokemonData'
import { useTimeData } from '../../hooks/useTimeData'
import { useDatesData } from '../../hooks/useDatesData'

// const schema = yup.object({
//   name: yup.string().required('Nome é obrigatório'),
//   lastName: yup.string().required('Sobrenome é obrigatório'),
//   region: yup.string().required('Região é obrigatória'),
//   city: yup.string().required('Cidade é obrigatória'),
//   pokemon: yup
//     .array()
//     .of(yup.string().required('Adicione no mínimo 1 pokémon')),
//   dateTime: yup.date().default(() => new Date())
// })

type FormValues = {
  firstName: string
  lastName: string
  region: string
  city: string
  firstPokemon: string
  additionalPokemon: {
    pokemonName: string
  }[]
  date: Date
  time: string
}

const PokemonForm = () => {
  const [selectedRegion, setSelectedRegion] = useState<any>()

  const form = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      region: '',
      city: '',
      firstPokemon: '',
      additionalPokemon: [
        {
          pokemonName: ''
        }
      ],
      date: new Date(),
      time: ''
    }
  })
  const { register, handleSubmit, control } = form

  const onSubmit = (data: FormValues) => {
    console.log('form submitted', data)
  }

  const regionOptions = useRegionData()?.map((region) => {
    return { value: region, label: region }
  })

  const pokemonOptions = usePokemonData()?.map((pokemon) => {
    return { value: pokemon, label: pokemon }
  })

  const timeOptions = useTimeData()?.map((time) => {
    return { value: time, label: time }
  })

  const dateOptions = useDatesData()?.map((date) => {
    return { value: date, label: date }
  })

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Styled.Container>
          <Styled.Group>
            <Styled.InputContainer>
              <Styled.FormLabel htmlFor="firstName">Nome</Styled.FormLabel>
              <Styled.Input
                placeholder="Digite seu nome"
                id="firstName"
                {...register('firstName')}
                type="text"
              />
            </Styled.InputContainer>

            <Styled.InputContainer>
              <Styled.FormLabel htmlFor="lastName">Sobrenome</Styled.FormLabel>
              <Styled.Input
                placeholder="Digite seu sobrenome"
                id="lastName"
                {...register('lastName')}
                type="text"
              />
            </Styled.InputContainer>
          </Styled.Group>

          <Styled.Group>
            <Styled.InputContainer>
              <Styled.FormLabel htmlFor="region">Região</Styled.FormLabel>
              <Controller
                name="region"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={regionOptions}
                    onChange={(option) => setSelectedRegion(option)}
                    placeholder="Selecione sua região"
                  />
                )}
              />
            </Styled.InputContainer>
            <Styled.InputContainer>
              <Styled.FormLabel htmlFor="city">Cidade</Styled.FormLabel>
              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <Select {...field} placeholder="Selecione sua cidade" />
                )}
              />
            </Styled.InputContainer>
          </Styled.Group>

          <Styled.Wrapper>
            <Styled.Title>Cadastre seu time</Styled.Title>
            <Styled.SubTitle>Atendemos até 06 pokémons por vez</Styled.SubTitle>
          </Styled.Wrapper>

          <Styled.Group>
            <Styled.FormLabel htmlFor="firstPokemon">
              Pokémon 01
            </Styled.FormLabel>
            <Controller
              name="firstPokemon"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  placeholder="Selecione seu pokémon"
                  options={pokemonOptions}
                />
              )}
            />
          </Styled.Group>

          <Styled.Group>
            <Styled.InputContainer>
              <Styled.FormLabel htmlFor="date">
                Data de atendimento
              </Styled.FormLabel>
              <Controller
                name="date"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    placeholder="Selecione uma data"
                    options={dateOptions}
                  />
                )}
              />
            </Styled.InputContainer>

            <Styled.InputContainer>
              <Styled.FormLabel htmlFor="time">
                Horário de atendimento
              </Styled.FormLabel>
              <Controller
                name="time"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    placeholder="Selecione um horário"
                    options={timeOptions}
                  />
                )}
              />
            </Styled.InputContainer>
          </Styled.Group>
        </Styled.Container>
        <Button
          button_text="Concluir agendamento"
          button_link={null}
          width={11.4}
          type="submit"
        />
      </form>
      <DevTool control={control} />
    </>
  )
}

export default PokemonForm
