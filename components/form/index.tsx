// import * as yup from 'yup'
import * as Styled from './styles'
// import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import FormButton from '../formAddPokemonButton'
import FormSelect from '../formSelect'
import Button from '../button/Button'
import Select from 'react-select'
import { DevTool } from '@hookform/devtools'

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

// export const YupPokemonForm = () => {
//   const form = useForm<FormValues>({
//     defaultValues: {
//       name: '',
//       lastName: '',
//       region: '',
//       city: '',
//       pokemon: [''],
//       otherPokemon: [{ pokemonName: '' }],
//       dateTime: new Date()
//     },
//     mode: 'onChange'
//     // resolver: yupResolver(schema)
//   })
// }

const PokemonForm = () => {
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
            <FormSelect
              select_label="Região"
              placeholder="Selecione sua região"
              {...register('region')}
            />
            <FormSelect
              select_label="Cidade"
              placeholder="Selecione sua cidade"
              {...register('city')}
            />
          </Styled.Group>

          <Styled.Wrapper>
            <Styled.Title>Cadastre seu time</Styled.Title>
            <Styled.SubTitle>Atendemos até 06 pokémons por vez</Styled.SubTitle>
          </Styled.Wrapper>
          {/* <div>
          {fields.map((field, index) => {
            return (
              <div className="form-control" key={field.id}>
                <PokemonSelect
                  onChange={
                    register(`otherPokemon.${index}.pokemonName` as const)
                      .onChange
                  }
                />
              </div>
            )
          })}
        </div> */}
          {/* <FormButton
          text="Adicionar novo pokémon ao time..."
          onClick={() => append({ pokemonName: '' })}
        /> */}
          <Styled.Group>
            {/* <FormSelect
            name="dateTime"
            select_label="Data para Atendimento"
            placeholder="Selecione uma data"
          />
          <FormSelect
            name="time"
            select_label="Horário de Atendimento"
            placeholder="Selecione um horário"
          /> */}

            <Controller
              name="time"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={[
                    { value: 'chocolate', label: 'Chocolate' },
                    { value: 'strawberry', label: 'Strawberry' },
                    { value: 'vanilla', label: 'Vanilla' }
                  ]}
                />
              )}
            />
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
