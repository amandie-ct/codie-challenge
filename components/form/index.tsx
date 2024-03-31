// import * as yup from 'yup'
import * as Styled from './styles'
import { DevTool } from '@hookform/devtools'
// import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, useFieldArray } from 'react-hook-form'
import FormButton from '../addButton'
import Button from '../button/Button'
import { useRegionData } from '../../hooks/useRegionData'
import { useState } from 'react'
import { usePokemonData } from '../../hooks/usePokemonData'
// import { useTimeData } from '../../hooks/useTimeData'
// import { useDatesData } from '../../hooks/useDatesData'
import Dropdown from '../dropdown'
import { useCityData } from '../../hooks/useCityData'

// const schema = yup.object({
//   firstName: yup.string().required('Nome é obrigatório'),
//   lastName: yup.string().required('Sobrenome é obrigatório'),
//   region: yup.string().required('Região é obrigatória'),
//   city: yup.string().required('Cidade é obrigatória'),
//   firstPokemon: yup.string().required('Adicione no mínimo 1 pokémon)
//   pokemonName: yup
//     .array()
//     .of(yup.string()),
//   date: yup.date().default(() => new Date())
// time: yup.string().required('Adicione um horário')
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
  const { isLoading, pokemonArray } = usePokemonData()
  const { isLoading: isLoadingRegion, regionArray } = useRegionData()
  // const { isLoading: isLoadingDates, dateArray } = useDatesData()
  const [pokemon, setPokemon] = useState('Selecione seu pokémon')
  const [region, setRegion] = useState('Selecione sua região')
  const [city, setCity] = useState('Selecione sua cidade')
  const [date, setDate] = useState('Selecione uma data')
  const { isLoading: isLoadingCity, cityArray } = useCityData(region)

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

  const { fields, append } = useFieldArray({
    name: 'additionalPokemon',
    control
  })

  const onSubmit = (data: FormValues) => {
    console.log('form submitted', data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Styled.Container>
          <Styled.Group>
            <Styled.InputWrapper>
              <Styled.FormLabel htmlFor="firstName">Nome</Styled.FormLabel>
              <Styled.Input
                placeholder="Digite seu nome"
                id="firstName"
                {...register('firstName')}
                type="text"
              />
            </Styled.InputWrapper>

            <Styled.InputWrapper>
              <Styled.FormLabel htmlFor="lastName">Sobrenome</Styled.FormLabel>
              <Styled.Input
                placeholder="Digite seu sobrenome"
                id="lastName"
                {...register('lastName')}
                type="text"
              />
            </Styled.InputWrapper>
          </Styled.Group>

          <Styled.Group>
            <Styled.InputContainer>
              <Styled.FormLabel htmlFor="region">Região</Styled.FormLabel>
              {isLoadingRegion ? (
                <h1>Carregando...</h1>
              ) : (
                <Dropdown
                  selected={region}
                  setSelected={setRegion}
                  options={regionArray}
                />
              )}
            </Styled.InputContainer>
            <Styled.InputContainer>
              <Styled.FormLabel htmlFor="city">Cidade</Styled.FormLabel>
              {isLoadingCity ? (
                <h1>Carregando...</h1>
              ) : (
                <Dropdown
                  selected={city}
                  setSelected={setCity}
                  options={cityArray}
                />
              )}
            </Styled.InputContainer>
          </Styled.Group>

          <Styled.Wrapper>
            <Styled.Title>Cadastre seu time</Styled.Title>
            <Styled.SubTitle>Atendemos até 06 pokémons por vez</Styled.SubTitle>
          </Styled.Wrapper>

          <Styled.Group>
            {!isLoading && (
              <>
                <Styled.FormLabel htmlFor="firstPokemon">
                  Pokémon 01
                </Styled.FormLabel>
                {/* <Controller
                  name="firstPokemon"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      placeholder="Selecione seu pokémon"
                      options={pokemonArray}
                      id="firstPokemon"
                      onChange={handlePokemonChange}
                    />
                  )}
                /> */}
                <Dropdown
                  selected={pokemon}
                  setSelected={setPokemon}
                  options={pokemonArray}
                />
              </>
            )}
          </Styled.Group>

          <>
            {fields.map((field, index) => {
              return (
                <Styled.Group className="form-control" key={field.id}>
                  <Styled.FormLabel htmlFor={`additionalPokemon.${index}`}>
                    Pokémon 0{index + 2}
                  </Styled.FormLabel>
                  {/* <Controller
                    name={`additionalPokemon.${index}.pokemonName`}
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        placeholder="Selecione seu pokémon"
                        options={pokemonArray}
                        id={`additionalPokemon.${index}`}
                      />
                    )}
                  /> */}
                  <Dropdown
                    selected={pokemon}
                    setSelected={setPokemon}
                    options={pokemonArray}
                  />
                </Styled.Group>
              )
            })}
            <Styled.Group>
              <FormButton
                text="Adicionar novo pokémon ao time"
                onClick={() => append({ pokemonName: '' })}
              />
            </Styled.Group>
          </>

          <Styled.Group>
            <Styled.InputContainer>
              <Styled.FormLabel htmlFor="date">
                Data de atendimento
              </Styled.FormLabel>
              {/* {isLoadingDates ? ( */}
              <h1>Carregando...</h1>
              {/* ) : ( */}
              <Dropdown
                selected={date}
                setSelected={setDate}
                // options={dateArray}
              />
              {/* )} */}
            </Styled.InputContainer>

            <Styled.InputContainer>
              <Styled.FormLabel htmlFor="time">
                Horário de atendimento
              </Styled.FormLabel>
              {/* <Controller
                name="time"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    placeholder="Selecione um horário"
                    // options={timeOptions}
                  />
                )}
              /> */}
            </Styled.InputContainer>
          </Styled.Group>
        </Styled.Container>

        <Styled.Summary>
          <hr></hr>
          <Styled.SummaryRows>
            <p>Número de pokémons a serem atendidos:</p>
            <p>01</p>
          </Styled.SummaryRows>
          <Styled.SummaryRows>
            <p>Atendimento unitário por pokémon:</p>
            <p>R$70,00</p>
          </Styled.SummaryRows>
          <Styled.SummaryRows>
            <p>Subtotal:</p>
            <p>R$70,00</p>
          </Styled.SummaryRows>
          <Styled.SummaryRows>
            <p>Taxa geracional*:</p>
            <p>R$2,10</p>
          </Styled.SummaryRows>
          <span>
            *adicionamos uma taxa de 3% , multiplicado pelo número da geração
            mais alta do time, com limite de até 30%
          </span>
          <h1> Valor total: R$</h1>
          <Button
            button_text="Concluir agendamento"
            button_link={null}
            width={11.4}
            type="submit"
          />
        </Styled.Summary>
      </form>
      <DevTool control={control} />
    </>
  )
}

export default PokemonForm
