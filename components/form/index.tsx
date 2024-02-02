import * as yup from 'yup'
import * as Styled from './styles'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, useFieldArray, SubmitHandler } from 'react-hook-form'
import FormInput from '../formInput'
import FormButton from '../formAddPokemonButton'
import FormSelect from '../formSelect'

const schema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  lastName: yup.string().required('Sobrenome é obrigatório'),
  region: yup.string().required('Região é obrigatória'),
  city: yup.string().required('Cidade é obrigatória'),
  pokemon: yup
    .array()
    .of(yup.string().required('Adicione no mínimo 1 pokémon')),
  dateTime: yup.date().default(() => new Date())
})

type FormValues = {
  name: string
  lastName: string
  region: string
  city: string
  pokemon: string[]
  otherPokemon: {
    pokemonName: string
  }[]
  dateTime: Date
}

export const YupPokemonForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      name: '',
      lastName: '',
      region: '',
      city: '',
      pokemon: [''],
      otherPokemon: [{ pokemonName: '' }],
      dateTime: new Date()
    },
    mode: 'onChange'
    // resolver: yupResolver(schema)
  })
}

const PokemonForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: errors
  } = useForm<FormValues>()

  const { fields, append, remove } = useFieldArray({
    name: 'otherPokemon',
    control
  })

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) =>
    console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Styled.Container>
        <Styled.Group>
          <FormInput
            label="Nome"
            placeholder="Digite seu nome"
            control={control}
            {...register('name')}
          />

          <FormInput
            label="Sobrenome"
            placeholder="Digite seu sobrenome"
            control={control}
            {...register('lastName')}
          />
        </Styled.Group>

        <Styled.Group>
          <FormSelect
            control={control}
            select_label="Região"
            placeholder="Selecione sua região"
            {...register('region')}
          />
          <FormSelect
            control={control}
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
        <FormButton
          text="Adicionar novo pokémon ao time..."
          onClick={() => append({ pokemonName: '' })}
        />
        <Styled.Group>
          <FormSelect
            control={control}
            name="dateTime"
            select_label="Data para Atendimento"
            placeholder="Selecione uma data"
          />
          <FormSelect
            control={control}
            name="time"
            select_label="Horário de Atendimento"
            placeholder="Selecione um horário"
          />
        </Styled.Group>
      </Styled.Container>
    </form>
  )
}

export default PokemonForm
